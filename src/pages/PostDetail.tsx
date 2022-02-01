import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RouterLink } from "../components/RouterLink";
import { PostMeta } from "../Contract";
import { NotFound } from "./NotFound";

const modules = import.meta.glob("../posts/*.mdx");

interface Post {
    content: ReactElement;
    meta: PostMeta;
}

const components = {
    h2: (props: any) => (
        <Box mt={4}>
            <Typography variant="h2" {...props} />
        </Box>
    ),
    h3: (props: any) => <Typography variant="h3" {...props} />,
    code: (props: any) => {
        const { children, ...rest } = props;
        // omit final line-break to avoid unintended empty line
        return (
            <SyntaxHighlighter language="javascript" style={obsidian} {...rest}>
                {children.slice(0, -1)}
            </SyntaxHighlighter>
        );
    },
};

export const PostDetail: React.VFC = () => {
    const [post, setPost] = useState<Post | null | false>(null);
    const { path } = useParams();
    if (path === undefined) {
        throw Error("path is required");
    }
    useEffect(() => {
        const x = `../posts/${path}.mdx`;
        if (!(x in modules)) {
            setPost(false);
            return;
        }
        modules[x]()
            .then((v) =>
                setPost({ content: v.default({ components }), meta: v.meta })
            )
            .catch((e) => {
                console.error(e);
                setPost(false);
            });
    }, [path]);
    useEffect(() => {
        const originalTitle = document.title;
        if (post !== null && post !== false) {
            document.title = post.meta.title;
        }
        return () => {
            document.title = originalTitle;
        };
    }, [post]);
    if (post === null) {
        return null;
    }
    if (post === false) {
        return <NotFound />;
    }
    return (
        <Box mx={2}>
            <RouterLink to="/">&laquo; back</RouterLink>
            <Paper sx={{ my: 2, px: 2, py: 0.5 }}>
                <Typography variant="body2">{post.meta.published}</Typography>
                <Box mt={2} mb={0.5}>
                    <Typography variant="h1">{post.meta.title}</Typography>
                </Box>
                <Divider />
                <Box mt={2}>{post.content}</Box>
            </Paper>
        </Box>
    );
};

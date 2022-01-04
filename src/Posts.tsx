import { Box, Paper, Typography } from "@mui/material";
import { RouterLink } from "./components/RouterLink";

interface PostMeta {
    path: string;
    title: string;
    published: string;
}

const modules = import.meta.globEager("./posts/*.mdx");
const posts: PostMeta[] = [];
for (const path in modules) {
    const match = path.match(/\.\/posts\/(.*)\.mdx$/);
    if (match !== null) {
        posts.push({ ...modules[path].meta, path: match[1] });
    }
}

export const Posts: React.VFC = () => {
    return (
        <Box my={2}>
            {posts.map((v) => (
                <PostCard key={v.path} meta={v} />
            ))}
        </Box>
    );
};

const PostCard: React.VFC<{ meta: PostMeta }> = ({ meta }) => {
    return (
        <Box m={2}>
            <Paper sx={{ px: 2, py: 0.5 }}>
                <Typography variant="body2">{meta.published}</Typography>
                <Typography variant="h6">{meta.title}</Typography>
                <RouterLink to={`/posts/${meta.path}`}>
                    &raquo; read more
                </RouterLink>
            </Paper>
        </Box>
    );
};

import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Link,
    Typography,
} from "@mui/material";
import { PostMeta } from "../Contract";

const modules = import.meta.globEager("../posts/*.mdx");
const posts: PostMeta[] = [];
for (const path in modules) {
    const match = path.match(/\/posts\/(.*)\.mdx$/);
    if (match !== null) {
        posts.push({ ...modules[path].meta, path: match[1] });
    }
}

export const Posts: React.VFC = () => {
    return (
        <Box>
            {posts.map((v) => (
                <PostCard key={v.path} meta={v} />
            ))}
        </Box>
    );
};

const PostCard: React.VFC<{ meta: PostMeta }> = ({ meta }) => {
    return (
        <Box m={2}>
            <Card>
                <CardActionArea
                    component={RouterLink}
                    to={`/posts/${meta.path}`}
                >
                    <CardContent sx={{ px: 2, py: 0.5 }}>
                        <Typography variant="body2">
                            {meta.published}
                        </Typography>
                        <Typography variant="h6">{meta.title}</Typography>
                        <Link component="span" color="primary">
                            &raquo; read more
                        </Link>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

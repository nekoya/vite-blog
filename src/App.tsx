import {
    Box,
    createTheme,
    Link,
    Paper,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0f546b",
            light: "#ecf0f1",
        },
        secondary: {
            main: blue[50],
        },
    },
});

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

export const App: React.VFC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Header />
                <Box my={2}>
                    {posts.map((v) => (
                        <PostCard key={v.path} meta={v} />
                    ))}
                </Box>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

const PostCard: React.VFC<{ meta: PostMeta }> = ({ meta }) => {
    return (
        <Box m={2}>
            <Paper sx={{ px: 2, py: 0.5 }}>
                <Typography variant="body2">{meta.published}</Typography>
                <Typography variant="h6">{meta.title}</Typography>
                <Link href={`/posts/${meta.path}`}>&raquo; read more</Link>
            </Paper>
        </Box>
    );
};

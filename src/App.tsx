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
import { meta } from "./example.mdx";

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
                <Box m={2} my={4}>
                    <Paper sx={{ px: 2, py: 0.5 }}>
                        <Typography variant="body2">
                            {meta.published}
                        </Typography>
                        <Typography variant="h6">{meta.title}</Typography>
                        <Link href="">&raquo; read more</Link>
                    </Paper>
                </Box>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

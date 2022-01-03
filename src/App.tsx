import {
    Box,
    createTheme,
    Divider,
    Link,
    Paper,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Example, { meta } from "./example.mdx";

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
    const [open, setOpen] = useState(false);
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
                        {open ? (
                            <Box mt={0.5}>
                                <Divider />
                                <Example />
                                <Link onClick={() => setOpen(false)}>
                                    &raquo; close
                                </Link>
                            </Box>
                        ) : (
                            <Link onClick={() => setOpen(true)}>
                                &raquo; read more
                            </Link>
                        )}
                    </Paper>
                </Box>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

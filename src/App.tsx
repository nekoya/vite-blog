import { Outlet } from "react-router-dom";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
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
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
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
                <Container maxWidth="md">
                    <Box my={4}>
                        <Outlet />
                    </Box>
                </Container>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

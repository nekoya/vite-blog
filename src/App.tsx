import { Box, createTheme, Paper, ThemeProvider } from "@mui/material";
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
                <Box mx={2} my={10}>
                    <Paper>
                        <Box p={2}>fooo</Box>
                    </Paper>
                </Box>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

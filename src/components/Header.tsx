import { AppBar, Box, Toolbar } from "@mui/material";
import { RouterLink } from "./RouterLink";

export const Header: React.VFC = () => {
    return (
        <Box>
            <AppBar position="static" elevation={0}>
                <Toolbar variant="dense" disableGutters>
                    <RouterLink
                        to="/"
                        mx="auto"
                        variant="h6"
                        color="primary.contrastText"
                        underline="none"
                    >
                        nekoya.dev
                    </RouterLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

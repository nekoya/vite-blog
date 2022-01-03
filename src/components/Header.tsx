import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Header: React.VFC = () => {
    return (
        <Box>
            <AppBar position="static" elevation={0}>
                <Toolbar variant="dense" disableGutters>
                    <Typography mx="auto" variant="h6">
                        nekoya.dev
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

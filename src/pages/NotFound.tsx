import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { RouterLink } from "../components/RouterLink";

export const NotFound: React.VFC = () => {
    return (
        <Box sx={{ my: 20, textAlign: "center" }}>
            <Typography variant="h2"> Page Not Found.</Typography>
            <Box mt={4}>
                <RouterLink to="/">show entries</RouterLink>
            </Box>
        </Box>
    );
};

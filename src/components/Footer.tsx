import ArchiveIcon from "@mui/icons-material/Archive";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Link } from "@mui/material";
import { FlexBox } from "./FlexBox";
import { IconText } from "./IconText";

export const Footer: React.VFC = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "primary.light",
                p: 2,
            }}
        >
            <FlexBox gap={4} justifyContent="center">
                <Link href="https://twitter.com/nekoya">
                    <IconText icon={TwitterIcon}>nekoya</IconText>
                </Link>
                <Link href="https://github.com/nekoya">
                    <IconText icon={GitHubIcon}>nekoya</IconText>
                </Link>
                <Link href="https://nekoya.github.io/blog/archives/">
                    <IconText icon={ArchiveIcon}>past entries</IconText>
                </Link>
            </FlexBox>
        </Box>
    );
};

import { Box, SvgIconProps, Typography } from "@mui/material";
import { FlexBox } from "./FlexBox";

export const IconText: React.FC<{
    icon: (x: SvgIconProps) => JSX.Element;
}> = (props) => {
    return (
        <FlexBox>
            <props.icon fontSize="small" />
            <Box ml={0.5}>
                <Typography variant="body2">{props.children}</Typography>
            </Box>
        </FlexBox>
    );
};

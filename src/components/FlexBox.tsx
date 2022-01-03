import { BoxProps, Box } from "@mui/material";

export const FlexBox: React.FC<BoxProps> = (props) => {
    const { children, ...rest } = props;
    const boxProps: BoxProps = {
        display: "flex",
        alignItems: "center",
    };
    Object.assign(boxProps, rest);
    return <Box {...boxProps}>{children}</Box>;
};

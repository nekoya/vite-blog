import { Link, LinkProps } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

export const RouterLink: React.FC<
    Omit<LinkProps, "component"> & { to: string }
> = (props) => {
    const { variant, ...rest } = props;
    return (
        <Link
            component={ReactRouterLink}
            variant={variant ?? "body1"}
            {...rest}
        />
    );
};

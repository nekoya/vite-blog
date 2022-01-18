import { Link as ReactRouterLink } from "react-router-dom";
import { Link, LinkProps } from "@mui/material";

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

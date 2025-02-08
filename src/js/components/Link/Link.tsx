import cn from "classnames";
import LinkProps from "./Link.types";

const Link = (props: LinkProps) => {
  const { children, text, href, ariaLabel, className } = props;

  const renderChild = children ? children : text;

  return (
    <a className={cn(className)} {...props} href={href} aria-label={ariaLabel}>
      {renderChild}
    </a>
  );
};

export default Link;

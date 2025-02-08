import type { CardProps as CardUIProps } from "@radix-ui/themes";
import LinkProps from "../Link/Link.types";
import ImageProps from "../Image/Image.types";

type CardProps = CardUIProps & {
  img: ImageProps;
  description: string;
  links: Array<LinkProps>;
  techStack: Array<string>;
};

export default CardProps;

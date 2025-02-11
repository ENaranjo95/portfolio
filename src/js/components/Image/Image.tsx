import ImageProps from "./Image.types";
import cn from "classnames";

const Image = (props: ImageProps) => {
  const { alt, mobile, media = "(min-width: 680px)", src, className } = props;
  return (
    <picture className={cn(className)}>
      <source srcSet={mobile} media={media} />
      <img {...props} src={src} alt={alt} loading="lazy" />
    </picture>
  );
};

export default Image;

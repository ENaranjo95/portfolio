import ImageProps from "./Image.types";

const Image = (props: ImageProps) => {
  const { alt, mobile, media = "(min-width: 680px)", src } = props;
  return (
    <picture>
      <source srcSet={mobile} media={media} />
      <img {...props} src={src} alt={alt} loading="lazy" />
    </picture>
  );
};

export default Image;

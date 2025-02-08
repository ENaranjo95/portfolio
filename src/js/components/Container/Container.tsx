import cn from "classnames";

const Container = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "grid min-h-10 grid-cols-4 gap-2 sm:grid-cols-12 sm:gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;

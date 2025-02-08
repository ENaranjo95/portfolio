import { Toggle as ToggleUI } from "radix-ui";
import type { ToggleProps } from "@radix-ui/react-toggle";
import cn from "classnames";

const Toggle = (props: ToggleProps) => {
  const { children, className } = props;
  return (
    <ToggleUI.Root
      {...props}
      className={cn(
        "cursor-pointer rounded-md border-2 px-2 py-1 text-black hover:bg-black hover:text-white focus:bg-black focus:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:bg-white dark:focus:text-black",
        className,
      )}
    >
      {children}
    </ToggleUI.Root>
  );
};

export default Toggle;

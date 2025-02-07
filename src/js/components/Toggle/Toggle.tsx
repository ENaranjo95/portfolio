import { Toggle as ToggleUI } from "radix-ui";
import type { ToggleProps } from "@radix-ui/react-toggle";
import cn from 'classnames';


const Toggle = (props: ToggleProps) => {
    const { children, className } = props;
    return (
	<ToggleUI.Root {...props} className={cn('dark:text-white', className)}>
		{children}
	</ToggleUI.Root>
    );
};

export default Toggle;
import cn from "classnames";
import { NavigationMenu } from "radix-ui";

const NavigationRoot = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <NavigationMenu.Root className={cn('grid grid-cols-12 gap-4', className)}>
            {children}
        </NavigationMenu.Root>
    )
};

export default NavigationRoot
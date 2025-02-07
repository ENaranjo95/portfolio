import { NavigationMenu } from "radix-ui";

const NavigationRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <NavigationMenu.Root>
            {children}
        </NavigationMenu.Root>
    )
};

export default NavigationRoot
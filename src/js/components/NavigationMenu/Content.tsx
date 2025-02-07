import { NavigationMenu } from "radix-ui";

const NavigationContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <NavigationMenu.Content>
            {children}
        </NavigationMenu.Content>
    )
};

export default NavigationContent;
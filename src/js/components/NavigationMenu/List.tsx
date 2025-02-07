import { NavigationMenu } from "radix-ui";

const NavigationList = ({ children }: { children: React.ReactNode }) => {
    return (
        <NavigationMenu.List>
            {children}
        </NavigationMenu.List>
    )
};

export default NavigationList;
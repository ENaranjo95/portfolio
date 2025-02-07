import { NavigationMenu } from "radix-ui";

const NavigationItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <NavigationMenu.Item>
            {children}
        </NavigationMenu.Item>
    )
};

export default NavigationItem;
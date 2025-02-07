import { NavigationMenu } from "radix-ui";

const NavigationLink = ({ children }: { children: React.ReactNode }) => {
    return (
        <NavigationMenu.Link>
            {children}
        </NavigationMenu.Link>
    )
};

export default NavigationLink;
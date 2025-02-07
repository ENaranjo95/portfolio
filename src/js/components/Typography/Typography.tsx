import { Heading, Text } from '@radix-ui/themes';
import type { TextProps } from '@radix-ui/themes';
import type { HeadingProps } from '@radix-ui/themes';
import cn from 'classnames';

const Typography = (props: TextProps | HeadingProps) => {
    const { as, children, className } = props;

    if (as === 'p' || as === 'span' || as === 'label' || as === 'div') {
        return <Text {...props} className={cn('dark:text-white', className)}>{children}</Text>;
    }

    if (as === 'h1' || as === 'h2' || as === 'h3' || as === 'h4' || as === 'h5' || as === 'h6') {
        return <Heading {...props} className={cn('dark:text-white', className)}>{children}</Heading>;
    }

    return null;
};

export default Typography;
import cn from 'classnames';

const Container = (props: { children: React.ReactNode; className?: string }) => {
    const { children, className } = props;

    return (
        <div className={cn('grid grid-cols-12 gap-4', className)}>
            {children}
        </div>
    )
};

export default Container;
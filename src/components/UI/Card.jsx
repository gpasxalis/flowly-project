export default function Card({
    as: Component = "div",
    className = "",
    innerClassName = "",
    children,
    ...props
}) {
    const outerBase =
        "bg-white/30 dark:bg-black/10 border border-indigo-400/30 dark:border-gray-400/30 border-t-indigo-400/60 dark:border-t-gray-400/60 rounded-2xl";

    const innerBase =
        "rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl";

    return (
        <Component className={`${outerBase} ${className}`} {...props}>
            <div className={`${innerBase} ${innerClassName}`}>{children}</div>
        </Component>
    );
}

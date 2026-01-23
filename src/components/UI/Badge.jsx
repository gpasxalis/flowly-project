export default function Badge({ children }) {
    return (
        <h3 className="text-[9px] uppercase tracking-widest text-white/90 bg-indigo-600/80 dark:bg-indigo-600/40 backdrop-blur-xl w-fit px-2 py-1 rounded-full">
            {children}
        </h3>
    );
}

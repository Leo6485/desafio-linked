export default function Button({ children, icon: Icon, variant = "primary", onClick }) {
    const variants = {
        primary: "bg-brand text-white hover:scale-110 duration-100 hover:shadow-md",
        secondary: "border border-brand text-brand hover:scale-110 duration-100 hover:shadow-md",
    };

    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-2 rounded-[25px] text-2xl px-2 sm:px-5 py-2 ${variants[variant] ?? variants.primary}`}
        >
            {Icon && <Icon className="h-4" />}
            {children}
        </button>
    );
}
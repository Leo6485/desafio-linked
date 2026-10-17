export default function Button({ children, icon: Icon, variant = "primary", onClick }) {
    const variants = {
        primary: "brand-color text-white hover:bg-teal-500",
        secondary: "border border-teal-700 text-teal-700 hover:bg-teal-50",
    };

    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 rounded-full text-2xl px-5 py-2 ${variants[variant] ?? variants.primary}`}
        >
            {Icon && <Icon className="h-4" />}
            {children}
        </button>
    );
}
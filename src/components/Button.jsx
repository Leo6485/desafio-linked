export default function Button({children, variant="primary", onClick}) {
    const variants = {
        primary: "brand-color text-white hover:bg-teal-500",
        secondary: "border border-teal-700 text-teal-700 hover:bg-teal-50",
    }

    return (
        <button
            onClick={onClick}
            className={`rounded px-4 ${variants[variant] ?? variants.primary}`}
        >
            {children}
        </button>
    )
}
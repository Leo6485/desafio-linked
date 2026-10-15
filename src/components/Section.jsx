export default function Section({ children, dark, id, className = "" }) {
    return (
        <section
            id={id}
            className={`h-dvh relative flex flex-col justify-center ${dark ? "brand-color text-white" : "bg-white text-gray-800"} ${className}`}
        >
            {children}
        </section>
    );
}

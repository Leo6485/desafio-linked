export default function Section({ children, dark, id, className = "" }) {
    return (
        <section
            id={id}
            className={`min-h-screen relative flex flex-col justify-center ${dark ? "bg-teal-900 text-white" : "bg-white text-gray-800"} ${className}`}
        >
            {children}
        </section>
    );
}

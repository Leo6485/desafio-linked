export default function Section({ children, dark }) {
    return (
        <div className={`h-dvh ${dark ? "bg-teal-900" : ""}`}>
            {children}
        </div>
    );
}
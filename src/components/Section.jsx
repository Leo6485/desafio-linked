import flor from "../assets/flor.webp";

export default function Section({ children, dark, id, flowers = 0, className = "", ...props}) {
    const flowers_pos = {
        1: [
            { className: "top-0 left-0 -translate-x-1/4 -translate-y-1/4 rotate-12" },
            { className: "bottom-0 right-0 translate-x-1/4 translate-y-1/4 -rotate-12" },
        ],
        2: [
            { className: "top-0 left-0 -translate-x-1/4 -translate-y-1/4 rotate-12" },
            { className: "top-0 right-0 translate-x-1/4 -translate-y-1/4 -rotate-45" },
        ],
    };

    const currentFlowers = flowers_pos[flowers] || [];

    return (
        <section
            id={id}
            className={`min-h-dvh md:h-dvh relative flex flex-col justify-center overflow-hidden ${
                dark ? "brand-color text-white" : "bg-white text-black"
            } ${className}`}
            {...props}
        >
            {flowers !== 0 && (
                <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
                    {currentFlowers.map((pos, index) => (
                        <img
                            key={index}
                            src={flor}
                            alt=""
                            aria-hidden="true"
                            className={`absolute w-sm sm:w-md md:w-lg opacity-25 object-contain ${pos.className}`}
                        />
                    ))}
                </div>
            )}
            <div className="relative z-10 w-full h-full flex flex-col justify-center">
                {children}
            </div>
        </section>
    );
}

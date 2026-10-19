export default function HorariosTable({
    itens = [
        { label: "Segunda - Sexta", value: "08:00 - 17:00" },
        { label: "Sábado", value: "10:00 - 14:00" },
        { label: "Domingo", value: "Fechado" },
    ],
    className = "",
}) {
    return (
        <div
            className={`brand-color text-white rounded-xl p-6 sm:p-8 flex flex-col justify-center shadow-xl w-full max-w-md${className}`}
        >
            <div className="flex flex-col divide-y divide-white/20">
                {itens.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between py-5 first:pt-0 last:pb-0 gap-6 text-left"
                    >
                        <span className="font-normal text-base sm:text-lg tracking-wide text-white">
                            {item.label}
                        </span>
                        <span className="font-bold text-base sm:text-lg tracking-wide text-right whitespace-nowrap">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
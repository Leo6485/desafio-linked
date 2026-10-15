import fundoDefault from "../assets/fundo.png";
import lineSvg from "../assets/line.svg";

export default function ImgFundo({
    src = fundoDefault,
    alt = "Consultório de psicologia e psicoterapia",
    className = "",
    scale = 1,
    ...props
}) {
    return (
        <div className={`relative h-full w-full overflow-hidden ${className}`}>
            <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
                {...props}
            />
            <img
                src={lineSvg}
                alt=""
                aria-hidden="true"
                className="absolute left-0 top-0 h-full pointer-events-none select-none origin-top-left"
                style={{
                    transform: scale !== 1 ? `scale(${scale})` : undefined,
                }}
            />
        </div>
    );
}
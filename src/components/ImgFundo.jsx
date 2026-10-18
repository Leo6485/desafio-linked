import lineSvg from "../assets/line.svg";
import fundo from "../assets/fundo.webp"

export default function ImgFundo() {
    return (
        <div className={`hidden md:flex justify-end relative h-full w-full overflow-hidden`}>
            <img
                src={fundo}
                alt="Consultório de psicologia e psicoterapia"
                className="h-full w-full object-cover"
            />
            <img
                src={lineSvg}
                alt=""
                aria-hidden="true"
                className="absolute left-0 top-0 h-full pointer-events-none select-none origin-top-left object-cover"
            />
        </div>
    );
}
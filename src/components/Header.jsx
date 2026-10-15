export default function Header({ children }) {
    return (
        <div className="flex bg-white border-b p-2 border-[#004346] w-full justify-between">
            Nome/Logo
            <div className="font-inter-w400 text-base flex justify-end w-full gap-5">
                <a>Inicio</a>
                <a>Serviços</a>
                <a>Horários</a>
                <a>Feedback</a>
                <a>Contato</a>
            </div>
        </div>
    )
}
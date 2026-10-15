export default function Header({ children }) {
    return (
        <div className="sticky top-0 z-50 flex bg-white opacity-90 backdrop-blur-2xl border-b p-4 border-brand w-full justify-between">
            Nome/Logo
            <div className="font-inter-w400 text-base flex justify-end w-full gap-5">
                <a className="hover:border-b border-brand -my-px text-brand" href="#inicio">Inicio</a>
                <a className="hover:border-b border-brand -my-px text-brand" href="#servicos">Serviços</a>
                <a className="hover:border-b border-brand -my-px text-brand" href="#horarios">Horários</a>
                <a className="hover:border-b border-brand -my-px text-brand" href="#feedbacks">Feedbacks</a>
                <a className="hover:border-b border-brand -my-px text-brand" href="#contato">Contato</a>
            </div>
        </div>
    )
}
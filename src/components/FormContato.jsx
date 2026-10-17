import Button from "./Button";
import { FaPaperPlane } from "react-icons/fa";

export default function FormContato() {
    return (
        <div className="border border-brand rounded-2xl p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2 mb-3 text-brand">
                <h3 className="text-xl font-bold">Formulário de contato</h3>
                <span className="hidden sm:inline opacity-40">|</span>
                <span className="text-sm opacity-80">
                    Ficou com alguma dúvida? Converse diretamente conosco!
                </span>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5">
                <div className="flex items-center brand-color text-white rounded-full px-4 py-1.5 gap-2">
                    <span className="font-semibold text-sm">Nome:</span>
                    <input type="text" className="bg-transparent w-full outline-none text-sm" />
                </div>

                <div className="flex items-center brand-color text-white rounded-full px-4 py-1.5 gap-2">
                    <span className="font-semibold text-sm">Email:</span>
                    <input type="email" className="bg-transparent w-full outline-none text-sm" />
                </div>

                <div className="flex items-center brand-color text-white rounded-full px-4 py-1.5 gap-2">
                    <span className="font-semibold text-sm">Obs:</span>
                    <input type="text" className="bg-transparent w-full outline-none text-sm" />
                </div>

                <div className="flex justify-center mt-1">
                    <Button variant="secondary" icon={FaPaperPlane}>
                        ENVIAR
                    </Button>
                </div>
            </form>
        </div>
    );
}


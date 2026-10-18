import { IoLocationOutline } from "react-icons/io5"

export default function Endereco() {
    return (
        <div className="brand-color text-white rounded-xl p-4 sm:p-5 flex flex-col justify-center shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Visite-nos</h3>
            <div className="flex items-center gap-2 font-bold mb-1">
                <IoLocationOutline className="text-xl shrink-0" />
                <span>ENDEREÇO:</span>
            </div>
            <div className="flex flex-col text-sm opacity-90 pl-7 space-y-0.5">
                <span>Rua, número</span>
                <span>Bairro</span>
                <span className="mt-1">CEP: 40028922</span>
            </div>
        </div>
    )
}
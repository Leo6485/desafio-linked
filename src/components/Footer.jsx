import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

function FooterCol({ title, children }) {
    return (
        <div className="flex flex-col">
            <h3 className="font-bold tracking-wider text-base sm:text-lg mb-3">
                {title}
            </h3>
            <div className="flex flex-col gap-2 text-sm sm:text-base opacity-90">
                {children}
            </div>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="brand-color text-white py-12 px-6 sm:px-12">
            <div className="max-w-6xl w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

                <FooterCol title="EMPRESA:">
                    <a href="https://facebook.com" className="flex items-center gap-2 hover:underline">
                        <FaFacebookSquare className="text-xl shrink-0" />
                        <span>Facebook</span>
                    </a>
                    <a href="https://instagram.com" className="flex items-center gap-2 hover:underline">
                        <FaInstagram className="text-xl shrink-0" />
                        <span>Instagram</span>
                    </a>
                    <a href="https://linkedin.com" className="flex items-center gap-2 hover:underline">
                        <FaLinkedin className="text-xl shrink-0" />
                        <span>LinkedIn</span>
                    </a>
                </FooterCol>

                <FooterCol title="ACESSO RÁPIDO:">
                    <a href="#inicio" className="hover:underline">Início</a>
                    <a href="#servicos" className="hover:underline">Nossos Serviços</a>
                    <a href="#horarios" className="hover:underline">Horários</a>
                    <a href="#feedbacks" className="hover:underline">Feedbacks</a>
                    <a href="#contato" className="hover:underline">Contato</a>
                </FooterCol>

                <FooterCol title="SERVIÇOS:">
                    <span>Serviço 1</span>
                    <span>Serviço 2</span>
                    <span>Serviço 3</span>
                </FooterCol>

                <FooterCol title="CONTATO:">
                    <span>Rua, número</span>
                    <span>Bairro</span>
                    <span>+55 (01)23456-7890</span>
                    <a href="mailto:email@email.com" className="hover:underline">email@email.com</a>
                </FooterCol>
            </div>
        </footer>
    );
}

import { useState } from "react";

export default function Header({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const links = [
        { href: "#inicio", label: "Inicio" },
        { href: "#servicos", label: "Serviços" },
        { href: "#horarios", label: "Horários" },
        { href: "#feedbacks", label: "Feedbacks" },
        { href: "#contato", label: "Contato" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-brand w-full">
            <div className="flex items-center justify-between p-4 w-full">
                <div className="text-brand font-bold text-lg">
                    {children || "Nome/Logo"}
                </div>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex font-inter-w400 text-base justify-end gap-5">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            className="hover:border-b border-brand -my-px text-brand transition-colors"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Botão Hambúrguer Mobile */}
                <button
                    type="button"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMenuOpen}
                    className="md:hidden p-1.5 text-brand hover:opacity-80 focus:outline-none transition-colors"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu Dropdown Mobile */}
            {isMenuOpen && (
                <nav className="fixed w-full md:hidden border-t border-brand/20 bg-white/95 backdrop-blur-2xl px-4 py-3 flex flex-col gap-3 font-inter-w400 text-base shadow-md">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            className="text-brand py-1.5 px-2 hover:bg-slate-100 rounded transition-colors"
                            href={link.href}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}

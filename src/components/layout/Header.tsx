import React, { useState, useEffect } from "react";
import {  Phone,  Mail, Menu, X} from "lucide-react";
import ApapachoHome from "../../assets/ApapachoHome.png"
import { InstagramIcon, FacebookIcon } from "../commons/SocialIcons";


interface NavItem {
    label: string;
    href: string;
    isHighlight?: boolean;
}

const navItems: NavItem[] = [
    { label: "HOME", href: "#home" },
    { label: "CONÓCENOS", href: "#conocenos" },
    { label: "NUESTRO TRABAJO", href: "#trabajo" },
    { label: "SÚMATE", href: "#sumate", isHighlight: true },
    { label: "NOVEDADES", href: "#novedades" },
];

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
    const handleScroll = () => {
        // Si scrolea más de 20px, consideramos la página en estado scrolled
        if (window.scrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <header className="w-full px-2 py-2 bg-white shadow-sm font-sans sticky top-0 z-50">
      {/* Topbar Superior */}
        <div className={`bg-white border-b border-gray-100 text-xs text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0 py-0 border-none' : 'max-h-12 opacity-100 py-2'}`}>
        
            <div className="w-full flex justify-between items-center">
            <div className="flex items-center space-x-6"></div>

          {/* Telefono y Redes Sociales */}
            <div className="flex items-center space-x-6">
                <a
                href="tel:+5493816399929"
                className="flex items-center space-x-1 hover:text-apapacho-green transition-colors hidden sm:flex"
                >
                <Phone size={14} className="text-apapacho-green text-bold" />
                <span>+54 9 3816 39-9929</span>
                </a>
                <span className="text-gray-300">|</span>
                <a
                href="mailto:apapacho.aca@gmail.com"
                aria-label="Email"
                className="text-gray-600 hover:text-apapacho-green transition-colors"
                >
                <Mail size={16} />
                </a>
                <a
                href="https://www.instagram.com/fundacion_apapacho/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-apapacho-green transition-colors"
                >
                <InstagramIcon size={16} />
                </a>
                <a
                href="https://www.facebook.com/profile.php?id=61555260777900&ref=NONE_xav_ig_profile_page_web#"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-gray-600 hover:text-apapacho-green transition-colors"
                >
                <FacebookIcon size={16} />
                </a>
            </div>
            </div>
        </div>

      {/* Navbar Principal */}
        <div className="w-full px-1 flex justify-between items-center">
            <a href="#home" className="flex items-center space-x-2">
            <img
                src={ApapachoHome}
                alt="Fundación Apapacho Con El Alma"
                className="h-15 w-auto flex items-right"
                onError={(e) => {
                // Fallback visual temporal si aún no está colocada o hay error al cargar imagen
                const target = e.currentTarget;
                target.style.display = "none";
                }}
            />
    <div className="flex flex-col leading-none">
        <div className="font-brand font-bold text-2xl tracking-wide text-gray-800">
            FUNDACIÓN <span className="text-apapacho-green">APAPACHO</span>
        </div>
        <span className="font-script text-apapacho-red self-end -mt-1 leading-none transform -rotate-1">
            con el alma
        </span> 
    </div>
    </a>

            {/* Menú Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                <a
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                    item.isHighlight
                    ? "text-apapacho-green hover:text-apapacho-darkgreen font-bold"
                    : "text-gray-700 hover:text-apapacho-green"
                }`}
                >
                {item.label}
                </a>
            ))}
            </nav>

        {/* Botón menú Mobile */}
            <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        {/* Menú desplegable Mobile */}
        {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-3">
            {navItems.map((item) => (
                <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base font-semibold ${
                    item.isHighlight
                    ? "text-apapacho-green font-bold"
                    : "text-gray-700 hover:text-apapacho-green"
                }`}
                >
                {item.label}
                </a>
            ))}
            </div>
        )}
        </header>
    );
};

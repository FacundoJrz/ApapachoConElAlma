import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../commons/SocialIcons';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-amber-500 text-white font-sans">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Columna 1: Información */}
            <div className="space-y-4">
            <h3 className="font-bold text-lg tracking-wide uppercase">INFORMACIÓN</h3>
            <p className="text-sm text-white/90 leading-relaxed">
                Fundación Apapacho Con El Alma <br />
                San Miguel de Tucumán, Argentina
            </p>
            <div className="space-y-2 text-sm text-white/90">
                <p className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Tucumán, Argentina</span>
                </p>
                <p className="flex items-center space-x-2">
                <Mail size={16} />
                <span>apapacho.aca@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+54 9 3816 39-9929</span>
                </p>
            </div>
        </div>

        {/* Columna 2: Mapa del sitio */}
        <div className="space-y-4">
            <h3 className="font-bold text-lg tracking-wide uppercase">MAPA DEL SITIO</h3>
            <ul className="space-y-2 text-sm text-white/90">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#conocenos" className="hover:underline">Conócenos</a></li>
                <li><a href="#trabajo" className="hover:underline">Nuestro Trabajo</a></li>
                <li><a href="#sumate" className="hover:underline">Súmate</a></li>
                <li><a href="#novedades" className="hover:underline">Novedades</a></li>
            </ul>
        </div>

        {/* Columna 3: Nos acompañan */}
        <div className="space-y-4">
            <h3 className="font-bold text-lg tracking-wide uppercase">NOS ACOMPAÑAN</h3>
            <ul className="space-y-2 text-sm text-white/90">
                <li><a href="#empresa" className="hover:underline">Instituciones</a></li>
                <li><a href="#empresa" className="hover:underline">Empresas Aliadas</a></li>
            </ul>
        </div>

        {/* Columna 4: Redes + Logo */}
        <div className="space-y-6">
            <div>
                <h3 className="font-bold text-lg tracking-wide uppercase mb-3">REDES SOCIALES</h3>
                <div className="flex space-x-4 text-white">
                <a href="mailto:apapacho.aca@gmail.com" className="hover:text-amber-200">
                    <Mail size={20} />
                </a>
                <a href="https://www.instagram.com/fundacion_apapacho/" target="_blank" rel="noreferrer" className="hover:text-amber-200">
                    <InstagramIcon size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61555260777900&ref=NONE_xav_ig_profile_page_web#" target="_blank" rel="noreferrer" className="hover:text-amber-200">
                    <FacebookIcon size={20} />
                </a>
                </div>
            </div>

            <div className="font-brand text-2xl font-bold tracking-wider">
                FUNDACIÓN <br />
                <span className="text-white">APAPACHO</span><br />
                <span className="text-white">CON EL ALMA</span>
                
            </div>
            </div>

        </div>

        <div className="border-t border-amber-600 py-4 text-center text-xs text-white/80">
            © {new Date().getFullYear()} Fundación Apapacho Con El Alma. Todos los derechos reservados.
        </div>
        </footer>
    );
};

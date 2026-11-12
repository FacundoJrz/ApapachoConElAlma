import React from 'react';
import { CONTACTO, crearEnlaceWhatsApp } from '../../config/contacto';
import apapachoLogo from '../../../src/assets/ApapachoHome.png';
export const PartnersSection: React.FC = () => {
    return (
        <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto text-center space-y-10">
        <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            Aliados de Fundación Apapacho Con El Alma
            </h2>
            <p className="text-gray-500 text-sm mt-2">
            Empresas e instituciones que hacen posible nuestro trabajo diario
            </p>
        </div>

        {/* Grilla de logos aliadas (placeholders limpios) */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 transition-all duration-300">
            <span className="flex flex-col items-center gap-4 font-bold text-xl text-gray-400 tracking-wider">AQUI TU EMPRESA TENDRÁ SU ESPACIO
                <img src={apapachoLogo} alt="Logo de tu empresa" className="h-12 sm:h-16"/>
            </span>

        </div>

        <div>
            <a
            href={crearEnlaceWhatsApp(CONTACTO.whatsappVoluntarios,
                'Hola! estamos interesados en formar parte del programa de empresas aliadas ¿me brindarías más información?')}
                 target="_blank"
                 rel="noopener noreferrer"
            className="inline-block bg-apapacho-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
            Sumate como Aliado
            </a>
        </div>
        </section>
    );
};

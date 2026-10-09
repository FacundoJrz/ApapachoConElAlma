import React from 'react';

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
            <span className="font-bold text-xl text-gray-400 tracking-wider">EMPRESA ALIDA 1</span>
            <span className="font-bold text-xl text-gray-400 tracking-wider">INSTITUCIÓN 2</span>
            <span className="font-bold text-xl text-gray-400 tracking-wider">COMERCIO LOCAL 3</span>
            <span className="font-bold text-xl text-gray-400 tracking-wider">ORGANIZACIÓN 4</span>
        </div>

        <div>
            <a
            href="#empresa"
            className="inline-block bg-apapacho-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
            Sumate como Aliado
            </a>
        </div>
        </section>
    );
};

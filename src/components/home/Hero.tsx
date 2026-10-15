import React from 'react';
import portada from '../../assets/ApapachoPortada1.jpeg';
import { ConElAlmaBadge } from '../commons/ConElAlmaBadge';

export const Hero: React.FC = () => {
    return (
        <section className="relative bg-gray-900 text-white min-h-[480px] sm:min-h-[560px] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo usando la variable portada importada */}
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-300"
            style={{ 
            backgroundImage: `url(${portada})` 
            }}
        />

        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center z-10">
            <div className="inline-flex flex-col items-end">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-0">
                FUNDACIÓN <span className="text-apapacho-green">APAPACHO</span>
                </h1>
                
                <ConElAlmaBadge 
                    className="h-9 sm:h-12 md:h-14 w-44 sm:w-60 -mt-1 sm:-mt-2 transform -rotate-1" 
                    textColor="text-apapacho-green"
                    />
            </div>

            <p className="text-lg sm:text-2xl font-semibold mt-6 mb-4 text-gray-200 tracking-wide">
                San Miguel de Tucumán
            </p>

            <p className="text-base sm:text-xl font-light max-w-2xl mx-auto text-gray-300 leading-relaxed">
                Transformando realidades, acompañando infancias y adolescencias
            </p>

</div>
        </section>
    );
};

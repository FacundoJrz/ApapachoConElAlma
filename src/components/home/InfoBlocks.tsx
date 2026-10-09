import React from 'react';
import Niños from '../../assets/Niños.png'


export const InfoBlocks: React.FC = () => {
    return (
    <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto space-y-20">
        
        {/* Bloque 1: ¿Quiénes somos? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            <div className="inline-block">
                <span className="text-sm font-bold uppercase tracking-wider text-apapacho-green">Conocenos</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
                ¿Quiénes somos?
                </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Somos <strong className="text-gray-900">Fundación Apapacho Con El Alma</strong>. Acompañamos de manera voluntaria a niños, niñas y adolescentes durante su permanencia en Dispositivos de Cuidado Institucional de Tucumán, mediante actividades de recreación, estimulación, apoyo escolar y celebración de fechas especiales.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
                Nuestro equipo de voluntarios comparte tiempo, escucha y afecto para construir espacios de acompañamiento durante su permanencia en los DCI.
            </p>

            <a
                href="#trabajo"
                className="inline-block bg-apapacho-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full text-sm transition-transform duration-300 transform hover:scale-105 shadow-md"
            >
                Saber más
            </a>
        </div>

        {/* Imagen representativa */}
        <div className="relative flex justify-center">
            <div className="w-full max-w-md h-80 sm:h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                src={Niños} 
                alt="Infancias de Fundación Apapacho Con El Alma" 
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop";
                }}
                />
            </div>
            </div>
        </div>

        {/* Bloque 2: ¿Por qué acompañamos las infancias y adolescencias? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Imagen en el lado izquierdo para pantallas medianas/grandes */}
            <div className="relative flex justify-center order-2 md:order-1">
            <div className="w-full max-w-md h-80 sm:h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                src="/infancia-apapacho.jpg" 
                alt="Acompañando a la infancia" 
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop";
                }}
                />
            </div>
        </div>

        <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block">
                <span className="text-sm font-bold uppercase tracking-wider text-apapacho-green">Nuestra Causa</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
                ¿Por qué acompañamos a las infancias y adolescencias?
                </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Creemos en la importancia de acompañar a niños, niñas y adolescentes durante su permanencia en los DCI, con espacios de juego, aprendizaje, escucha y afecto.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
                En Fundación Apapacho Con El Alma compartimos actividades de recreación, estimulación y celebración, en el marco de los derechos de las infancias y adolescencias.
            </p>

            <a
                href="#sumate"
                className="inline-block bg-apapacho-green hover:bg-apapacho-darkgreen text-white font-bold px-8 py-3 rounded-full text-sm transition-transform duration-300 transform hover:scale-105 shadow-md"
            >
                Quiero ayudar
            </a>
            </div>
        </div>

    </section>
    );
};

import React from 'react';
import { HeartHandshake, Sparkles, PartyPopper } from 'lucide-react';

interface ProgramCard {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const programs: ProgramCard[] = [
    {
        title: 'APOYO ESCOLAR Y ESTIMULACIÓN',
        description: 'Acompañamos los aprendizajes mediante apoyo escolar y actividades de estimulación.',
        icon: <HeartHandshake size={36} className="text-apapacho-green" />,
    },
    {
        title: 'RECREACIÓN Y TALLERES',
        description: 'Compartimos espacios de juego, recreación y talleres con las infancias y adolescencias que acompañamos.',
        icon: <Sparkles size={36} className="text-apapacho-teal" />,
    },
    {
        title: 'CUMPLEAÑOS Y FECHAS ESPECIALES',
        description: 'Celebramos cumpleaños, Día de las Infancias, Primavera, Navidad, Reyes y Carnaval, entre otras fechas especiales.',
        icon: <PartyPopper size={36} className="text-apapacho-yellow" />,
    },
];

export const ProgramsSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 sm:px-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center space-y-12">
            
            <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-apapacho-red mb-3">
                ¿Cómo lo hacemos?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                Acompañamos a las infancias y adolescencias a través de nuestras actividades:
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
                <div 
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center space-y-4"
                >
                <div className="p-4 bg-orange-50 rounded-full">
                    {program.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 tracking-wide">
                    {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                </p>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
};

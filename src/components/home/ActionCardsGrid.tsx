import React from 'react';
import { Heart, Gift, HandHeart, Building2, Award } from 'lucide-react';

interface ActionCard {
    title: string;
    description: string;
    buttonText: string;
    bgColor: string;
    icon: React.ReactNode;
    href: string;
}

const actions: ActionCard[] = [
    {
        title: 'APADRINÁ',
        description: 'Convertite en padrino haciendo un aporte mensual recurrente para sostener nuestras actividades cotidianas.',
        buttonText: 'Ver más',
        bgColor: 'bg-apapacho-green',
        icon: <Heart size={32} className="text-white" />,
        href: '#sumate/padrino',
    },
    {
        title: 'DONACIONES',
        description: 'Tu aporte de alimentos, indumentaria, insumos o materiales es clave para el funcionamiento de la fundación.',
        buttonText: 'Ver más',
        bgColor: 'bg-emerald-600',
        icon: <Gift size={32} className="text-white" />,
        href: '#sumate/donaciones',
    },
    {
        title: 'VOLUNTARIADO',
        description: 'Sumate a nuestro equipo y doná lo más valioso: tu tiempo y cariño para transformar realidades.',
        buttonText: 'Ver más',
        bgColor: 'bg-apapacho-red',
        icon: <HandHeart size={32} className="text-white" />,
        href: '#sumate/voluntario',
    },
    {
        title: 'ALIÁ TU EMPRESA',
        description: 'Sumá a tu empresa como aliada de la fundación y canalizá iniciativas de responsabilidad social.',
        buttonText: 'Ver más',
        bgColor: 'bg-apapacho-yellow',
        icon: <Building2 size={32} className="text-white" />,
        href: '#sumate/empresa',
    },
    {
        title: 'SER EMBAJADOR',
        description: 'Ayudanos a difundir nuestra misión y conectar a más personas solidarias con la fundación.',
        buttonText: 'Ver más',
        bgColor: 'bg-apapacho-teal',
        icon: <Award size={32} className="text-white" />,
        href: '#sumate/embajador',
    },
];

export const ActionCardsGrid: React.FC = () => {
    return (
        <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
            <span className="text-apapacho-green font-bold text-sm tracking-wider uppercase">Involucrate</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
            Con tu ayuda transformamos vidas <span className="text-apapacho-green">¡Sumate!</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((card, idx) => (
            <div 
                key={idx} 
                className={`${card.bgColor} rounded-3xl p-8 text-white flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
                <div className="space-y-4">
                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {card.icon}
                </div>
                <h3 className="text-2xl font-extrabold tracking-wide">
                    {card.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                    {card.description}
                </p>
                </div>

                <div>
                <a
                    href={card.href}
                    className="inline-block bg-white/20 hover:bg-white hover:text-gray-900 text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors duration-300 backdrop-blur-sm"
                >
                    {card.buttonText}
                </a>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

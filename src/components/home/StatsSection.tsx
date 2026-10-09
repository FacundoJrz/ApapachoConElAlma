import React from 'react';
import { Smile, HeartHandshake, Clock, CalendarDays } from 'lucide-react';

interface StatItem {
    value: string;
    label: string;
    icon: React.ReactNode;
}

const stats: StatItem[] = [
    {
        value: '3',
        label: 'DCI acompañados',
        icon: <Smile size={32} className="text-apapacho-green" />,
    },
    {
        value: '+100',
        label: 'Voluntarios activos',
        icon: <HeartHandshake size={32} className="text-apapacho-green" />,
    },
    {
    value: '+7.200',
        label: 'Horas de contención y talleres',
        icon: <Clock size={32} className="text-apapacho-green" />,
    },
    {
        value: '3',
        label: 'Años de trabajo ininterrumpido',
        icon: <CalendarDays size={32} className="text-apapacho-green" />,
    },
];

export const StatsSection: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16 px-6 sm:px-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto text-center space-y-12">
            
            <div>
            <span className="text-apapacho-green font-bold text-sm tracking-widest uppercase">Impacto</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight mt-1">
                Fundación Apapacho Con El Alma en números
            </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-3">
                <div className="p-3 bg-white rounded-full shadow-sm">
                    {stat.icon}
                </div>
                <p className="text-3xl sm:text-5xl font-black text-gray-900">
                    {stat.value}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm font-medium max-w-[180px]">
                    {stat.label}
                </p>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
};

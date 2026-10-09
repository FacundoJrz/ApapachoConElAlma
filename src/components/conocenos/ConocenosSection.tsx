import React, { useState } from 'react';
import { ShieldCheck, MapPin, Users, HeartHandshake, BookOpen, PartyPopper, Megaphone, Sparkles } from 'lucide-react';
import { ConElAlmaBadge } from '../commons/ConElAlmaBadge';
import { DonationBanner } from '../home/DonationBanner';

// Interfaces para el equipo
interface BoardMember {
    name: string;
    role: string;
}

interface AreaReferent {
    area: string;
    names: string[];
    icon: React.ReactNode;
}

const boardMembers: BoardMember[] = [
    { name: 'María Florencia Lafuente', role: 'Presidente' },
    { name: 'Florencia Belén Rodríguez', role: 'Secretaria' },
    { name: 'Paola Gómez', role: 'Tesorera' },
    { name: 'Gabriela Juárez', role: 'Vocal' },
];

const referents: AreaReferent[] = [
    {
        area: 'Apoyo Escolar',
        names: ['Camila López', 'Sol Adorno', 'Paulina Pinna Otero', 'Emilia Lagarriegue'],
        icon: <BookOpen size={20} className="text-apapacho-green" />,
    },
    {
        area: 'Recreación & Talleres',
        names: ['Benjamín Lafuente', 'María Palferro', 'Milagros Soria', 'Lourdes Albornoz', 'Renatta Manno', 'Guadalupe Montenegro', 'Solana Brito', 'Micaela Martínez'],
        icon: <Sparkles size={20} className="text-amber-500" />,
    },
    {
        area: 'Cumpleaños & Festejos Especiales',
        names: ['Moira Albornoz', 'Guadalupe Albornoz', 'Yuliana Bertoluzzi', 'Belén Romano', 'Lourdes Giménez'],
        icon: <PartyPopper size={20} className="text-apapacho-red" />,
    },
    {
        area: 'Salidas & Eventos',
        names: ['Camila Huaco', 'Estefanía Martín', 'Paula Bazán', 'Sofía Bazán'],
        icon: <HeartHandshake size={20} className="text-teal-600" />,
    },
    {
        area: 'Marketing, Prensa & Actas',
        names: ['Nazarena Garibaldi', 'Pilar Aguirre', 'Guadalupe Iramain', 'Milagro Salazar'],
        icon: <Megaphone size={20} className="text-blue-600" />,
    },
    {
        area: 'Proyectos, Insumos e Ingresos',
        names: ['Luciana Cruz', 'José María Herrera', 'Gabriela Juárez', 'Luciana Richardi'],
        icon: <Users size={20} className="text-purple-600" />,
    },
        ];

export const ConocenosSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'board' | 'referents'>('board');

    return (
        <div className="w-full bg-white font-sans">
        
        {/* 1. Hero Header Conótenos */}
        <section className="relative bg-gray-900 text-white py-24 sm:py-32 flex items-center justify-center overflow-hidden">
            <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop')` }}
            />
            <div className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-3">
            <div className="inline-flex flex-col items-center">
                <h1 className="font-brand text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none">
                CONÓCENOS
                </h1>
                <ConElAlmaBadge className="w-36 sm:w-52 -mt-1 sm:-mt-2" textColor="text-apapacho-green" />
            </div>
            <p className="text-base sm:text-xl font-light text-gray-200 max-w-xl mx-auto pt-2">
                Conocé un poco más acerca del alma y el equipo detrás de la Fundación
            </p>
            </div>
        </section>

      {/* 2. Sección Institucional */}
        <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
            
            {/* Ficha Legal / Identidad */}
            <div className="bg-orange-50/60 rounded-3xl p-8 sm:p-12 border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl min-w-0 flex-1">
                <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full text-xs font-bold text-apapacho-green shadow-sm border border-orange-200">
                <ShieldCheck size={16} />
                <span>Personería Jurídica Aprobada</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Acompañamos a las infancias y adolescencias en Tucumán
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                La <strong>Fundación Apapacho Con El Alma</strong> cuenta con personería jurídica bajo la <strong>Resolución N° 102/2025 DPJ</strong> (Dirección de Personería Jurídica) de Tucumán.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                Fundación Apapacho Con El Alma nació el 31 de mayo de 2023, cuando dos voluntarias colaboraron en un festejo de cumpleaños.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-64 md:flex-shrink-0 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <span className="block text-xl sm:text-2xl font-black text-apapacho-green leading-tight break-words">Alrededor de 100</span>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Voluntarios Activos</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <span className="block text-3xl font-black text-apapacho-red">3</span>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">DCI acompañados</span>
                </div>
            </div>
            </div>

        {/* Misión y Objetivos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <span className="text-apapacho-green font-bold text-sm uppercase tracking-wider">Nuestra Labor</span>
                <h3 className="text-3xl font-extrabold text-gray-900">
                ¿Qué hacemos cotidianamente?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                Realizamos actividades de manera 100% voluntaria en los <strong>Dispositivos de Cuidado Institucional (DCI)</strong>. Nuestro objetivo principal es acompañar a los niños, niñas y adolescentes durante su tiempo de permanencia.
                </p>
                <p className="text-gray-600 leading-relaxed">
                Lo hacemos a través de talleres de estimulación, apoyo escolar, espacio de recreación y el festejo permanente de fechas especiales: <em>cumpleaños, Día de las Infancias, Primavera, Navidad, Reyes y Carnaval</em>.
                </p>
            </div>

          {/* Tarjetas de DCI acompañados */}
            <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-800 flex items-center space-x-2">
                <MapPin size={20} className="text-apapacho-green" />
                <span>DCI que acompañamos:</span>
                </h4>

                <div className="grid grid-cols-1 gap-3">
                <div className="bg-white border-l-4 border-apapacho-green p-4 rounded-r-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gray-900">DCI Yerba Buena</h5>
                    <p className="text-xs text-gray-500">Acompañamiento integral, talleres de estimulación y apoyo.</p>
                </div>

                <div className="bg-white border-l-4 border-apapacho-red p-4 rounded-r-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gray-900">DCI Barrio Sur (San Miguel de Tucumán)</h5>
                    <p className="text-xs text-gray-500">Recreación, apoyo escolar y festejos comunitarios.</p>
                </div>

                <div className="bg-white border-l-4 border-apapacho-teal p-4 rounded-r-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gray-900">DCI Tafí Viejo</h5>
                    <p className="text-xs text-gray-500">Espacios de juego, contención y fortalecimiento.</p>
                </div>
                </div>
            </div>
            </div>

        </section>

      {/* Banner de donación reutilizado */}
        <DonationBanner />

        {/* 3. Sección Nuestro Equipo */}
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-apapacho-green font-bold text-sm uppercase tracking-wider">Nuestro equipo</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
                Nuestro Equipo
            </h2>
            <p className="text-gray-600 text-base">
                El corazón de la fundación: autoridades y coordinadores que impulsan este sueño diariamente.
            </p>

            {/* Selector de Pestañas (Consejo vs Referentes) */}
            <div className="flex justify-center space-x-2 pt-4">
                <button
                onClick={() => setActiveTab('board')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeTab === 'board'
                    ? 'bg-apapacho-green text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                >
                Consejo de Administración
                </button>
                <button
                onClick={() => setActiveTab('referents')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeTab === 'referents'
                    ? 'bg-apapacho-green text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                >
                Referentes por Área
                </button>
            </div>
        </div>

        {/* Vista A: Consejo de Administración */}
        {activeTab === 'board' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
                {boardMembers.map((member, idx) => (
                <div 
                    key={idx}
                    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center space-y-4 hover:shadow-md transition-shadow"
                >
                    <div className="w-28 h-28 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-apapacho-green font-bold text-3xl border-4 border-white shadow-sm overflow-hidden">
                    <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div>
                    <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                    <p className="text-xs font-semibold text-apapacho-green uppercase tracking-wider mt-0.5">
                        {member.role}
                    </p>
                    </div>
                </div>
                ))}
            </div>
        )}

        {/* Vista B: Referentes por Área */}
        {activeTab === 'referents' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {referents.map((item, idx) => (
                <div 
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4 hover:border-orange-200 transition-colors"
                >
                    <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-orange-50 rounded-xl">
                        {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-base">{item.area}</h3>
                    </div>

                    <ul className="space-y-1.5 pl-2 text-sm text-gray-600">
                    {item.names.map((person, pIdx) => (
                        <li key={pIdx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-apapacho-green"></span>
                        <span>{person}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            )}

        </section>

    </div>
    );
};

import React, { useState } from 'react';
import { Heart, BookOpen, Sparkles, PartyPopper, ChevronDown, ChevronUp, Play, Smile, HandHeart } from 'lucide-react';
import { ConElAlmaBadge } from '../commons/ConElAlmaBadge';
import { DonationBanner } from '../home/DonationBanner';
import CollageConocenos from '../../assets/CollageSumateSection.jpg';

interface ProgramDetail {
    id: string;
    title: string;
    category: string;
    icon: React.ReactNode;
    summary: string;
    description: string;
    imageUrl: string;
    highlights: string[];
    }

const programsData: ProgramDetail[] = [
    {
        id: 'apoyo-escolar',
        title: 'Apoyo Escolar y Estimulación Cognitiva',
        category: 'Educación & Desarrollo',
        icon: <BookOpen className="text-apapacho-green" size={24} />,
        summary: 'Acompañamiento en tareas escolares y refuerzo de aprendizajes clave.',
        description: 'Nuestros voluntarios acompañan a niños, niñas y adolescentes durante su permanencia en los DCI mediante apoyo escolar y actividades de estimulación. Compartimos espacios de aprendizaje, escucha y afecto en el marco de sus derechos.',
        imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
        highlights: [
        'Apoyo escolar y acompañamiento en los aprendizajes',
        'Acompañamiento personalizado en tareas',
        'Actividades de estimulación'
        ]
    },
    {
        id: 'recreacion-talleres',
        title: 'Recreación, Juego y Expresión',
        category: 'Juego & Contención',
        icon: <Sparkles className="text-amber-500" size={24} />,
        summary: 'Espacios de juego, recreación y talleres.',
        description: 'Compartimos actividades de juego, recreación y talleres con las infancias y adolescencias durante su permanencia en los DCI. Estos encuentros forman parte de nuestro acompañamiento voluntario desde la escucha y el afecto.',
        imageUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop',
        highlights: [
        'Talleres y actividades de recreación',
        'Juegos cooperativos y dinámicas de integración',
        'Espacios de juego compartido'
        ]
    },
    {
        id: 'festejos-cumpleanios',
        title: 'Cumpleaños y Salidas Especiales',
        category: 'Celebraciones & Afecto',
        icon: <PartyPopper className="text-apapacho-red" size={24} />,
        summary: 'Festejos de cumpleaños, fechas especiales y salidas recreativas.',
        description: 'Compartimos festejos de cumpleaños, Día de las Infancias, Primavera, Navidad, Reyes y Carnaval, entre otras fechas especiales. También realizamos salidas como parte del acompañamiento a las infancias y adolescencias.',
        imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
        highlights: [
        'Festejos de cumpleaños',
        'Eventos temáticos: Reyes, Navidad, Carnaval y Primavera',
        'Paseos y salidas culturales fuera de los DCI'
        ]
    }
];

export const NuestroTrabajoSection: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>('apoyo-escolar');
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="w-full bg-white font-sans text-gray-800">
        
        {/* 1. Hero Header */}
        <section className="relative bg-gray-900 text-white py-24 sm:py-32 flex items-center justify-center overflow-hidden">
            <div 
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url(${CollageConocenos})`}}
            />
            <div className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-4">
            <div className="inline-flex flex-col items-center">
                <h1 className="font-brand text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none">
                NUESTRO TRABAJO
                </h1>
                <ConElAlmaBadge className="w-40 sm:w-56 -mt-1 sm:-mt-2" textColor="text-apapacho-green" />
            </div>
            <p className="text-base sm:text-xl font-light text-gray-200 max-w-2xl mx-auto pt-2">
                Nuestra misión es acompañar infancias sin cuidados parentales de manera voluntaria durante su tiempo de institucionalidad.
            </p>
            </div>
        </section>

        {/* 2. Diagnóstico / Enfoque Humano */}
        <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto space-y-12">
            <div className="bg-orange-50/70 border border-orange-100 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-sm">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-apapacho-green shadow-sm border border-orange-200">
                <Heart size={16} fill="currentColor" />
                <span>Acompañamiento Vincular y Afectivo</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
                La contención emocional es un derecho fundamental para crecer con sonrisas
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Los niños, niñas y adolescentes alojados en Dispositivos de Cuidado Institucional (DCI) transitan realidades complejas. Más allá de sus necesidades materiales, requieren la presencia constante de adultos comprometidos que les brinden escucha, juego, afecto y estímulo para su futuro.
            </p>
            </div>

        {/* Bloque Explicativo con Imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-6">
            <div className="space-y-6">
                <span className="text-apapacho-green font-bold text-sm uppercase tracking-wider">El acompañamiento de Fundación Apapacho Con El Alma</span>
                <h3 className="text-3xl font-extrabold text-gray-900 leading-tight">
                Acompañar el tiempo de permanencia con amor y presencia
                </h3>
                <p className="text-gray-600 leading-relaxed">
                Trabajamos de forma voluntaria y articulada con los equipos de cada dispositivo en <strong>Yerba Buena, Barrio Sur (Capital) y Tafí Viejo</strong>. Nos organizamos en comisiones especializadas para que cada visita sea un espacio de encuentro significativo.
                </p>
                <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                    <HandHeart className="text-apapacho-green mt-1 flex-shrink-0" size={20} />
                    <p className="text-sm text-gray-700"><strong>Acompañamiento voluntario:</strong> Actividades organizadas por equipos de referentes y voluntarios.</p>
                </div>
                <div className="flex items-start space-x-3">
                    <Smile className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-sm text-gray-700"><strong>Vínculos sanos:</strong> Fomentamos la autoestima, el respeto y la alegría a través del juego positivo.</p>
                </div>
                </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
                alt="Niños sonriendo en taller recreativo" 
                className="w-full h-80 sm:h-96 object-cover"
                />
            </div>
            </div>
        </section>

      {/* Banner de donaciones reutilizable */}
        <DonationBanner />

        {/* 3. Programas y Áreas de Trabajo (Acordeón interactivo) */}
        <section className="py-20 px-6 sm:px-12 max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
            <span className="text-apapacho-green font-bold text-sm uppercase tracking-wider">Líneas de Acción</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
                Nuestros Programas en los DCI
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
                Hacé clic en cada área para conocer en detalle las actividades cotidianas que realizamos.
            </p>
            </div>

            <div className="space-y-4">
            {programsData.map((prog) => {
                const isOpen = openAccordion === prog.id;
                return (
                <div 
                    key={prog.id}
                    className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all"
                >
                    {/* Cabecera de Acordeón */}
                    <button
                    onClick={() => toggleAccordion(prog.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50/40 transition-colors"
                    >
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-orange-50 rounded-xl">
                        {prog.icon}
                        </div>
                        <div>
                        <span className="text-xs font-semibold text-apapacho-green uppercase tracking-wider">
                            {prog.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                            {prog.title}
                        </h3>
                        </div>
                    </div>
                    {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                    </button>

                    {/* Contenido desplegable */}
                    {isOpen && (
                    <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50/50 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="space-y-4">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {prog.description}
                        </p>
                        <ul className="space-y-2">
                            {prog.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-xs font-semibold text-gray-700">
                                <span className="w-2 h-2 rounded-full bg-apapacho-green"></span>
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                        <div className="rounded-xl overflow-hidden h-48 shadow-sm border border-gray-200">
                        <img 
                            src={prog.imageUrl} 
                            alt={prog.title} 
                            className="w-full h-full object-cover"
                        />
                        </div>
                    </div>
                    )}
                </div>
                );
            })}
            </div>
        </section>

      {/* 4. Historia en Primera Persona (Sección de Video / Testimonio) */}
        <section className="py-16 px-6 sm:px-12 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-2">
                <span className="text-apapacho-yellow font-bold text-xs uppercase tracking-wider">Testimonios & Vivencias</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                Historias en primera persona
                </h2>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
                Conocé la voz de nuestros voluntarios y el impacto transformador de acompañar con el alma a las infancias.
                </p>
            </div>

            {/* Reproductor de Video Mockup */}
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-gray-800 border-4 border-gray-700 shadow-2xl flex items-center justify-center group">
                <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop" 
                alt="Previsualización de video" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity"
                />
                
                <button 
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="relative z-10 w-20 h-20 bg-apapacho-green text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none"
                aria-label="Reproducir testimonio"
                >
                <Play size={36} className="ml-1" fill="currentColor" />
                </button>

                {isVideoPlaying && (
                <div className="absolute inset-0 bg-black z-20 flex items-center justify-center p-4">
                    <p className="text-center text-sm text-gray-300">
                    🎬 <em>Aquí se cargará el reproductor de video de la fundación.</em>
                    <br />
                    <button 
                        onClick={() => setIsVideoPlaying(false)} 
                        className="mt-4 text-xs underline text-apapacho-yellow"
                    >
                        Cerrar vista previa
                    </button>
                    </p>
                </div>
                )}
            </div>
            </div>
        </section>

        </div>
    );
};

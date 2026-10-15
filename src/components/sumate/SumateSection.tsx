import React, { useState } from 'react';
import { HeartHandshake, Gift, UserPlus, Building2, Award, ChevronDown, ChevronUp, MapPin, Clock, CheckCircle2, Send} from 'lucide-react';
import { ConElAlmaBadge } from '../commons/ConElAlmaBadge';
import CollageConocenos from '../../assets/CollageSumateSection.jpg';

export type CollaborationSection = 'padrino' | 'donaciones' | 'voluntario' | 'empresa' | 'embajador';

interface SumateSectionProps {
    initialSection?: CollaborationSection;
    registerSection?: (section: CollaborationSection, element: HTMLDivElement | null) => void;
}

const sponsorshipOptions: ReadonlyArray<{ amount: number; url: string }> = [
    { amount: 5000, url: 'https://mpago.la/1DVryuY' },
    { amount: 10000, url: 'https://mpago.la/1rFVdpg' },
    { amount: 15000, url: 'https://mpago.la/2P5gJkZ' },
];

const sponsorshipAmountFormatter = new Intl.NumberFormat('es-AR');

// App cambia la key al navegar: reinicia el acordeón con el apartado de la URL.
export const SumateSection: React.FC<SumateSectionProps> = ({ initialSection = 'padrino', registerSection }) => {
  // Estado para controlar qué sección del acordeón está desplegada
    const [openSection, setOpenSection] = useState<CollaborationSection | null>(initialSection);

    const toggleSection = (section: CollaborationSection) => {
    setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="w-full bg-white font-sans text-gray-800">
        
        {/* 1. Hero Header SÚMATE */}
        <section className="relative bg-gray-900 text-white py-24 sm:py-32 flex items-center justify-center overflow-hidden">
            <div 
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{backgroundImage: `url(${CollageConocenos})` }}
            />
            <div className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-4">
            <div className="inline-flex flex-col items-center">
                <h1 className="font-brand text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
                SÚMATE
                </h1>
                <ConElAlmaBadge className="w-40 sm:w-60 -mt-1 sm:-mt-3" textColor="text-apapacho-green" />
            </div>
            <p className="text-lg sm:text-2xl font-light text-gray-200 max-w-xl mx-auto pt-2">
                Podés formar parte de nuestra Misión
            </p>
            </div>
        </section>

        {/* Bajada principal */}
        <section className="py-12 px-4 text-center border-b border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            ¡Descubrí todas las formas de colaborar!
            </h2>
        </section>

        {/* 2. Acordeón de Colaboración */}
        <section className="py-12 px-4 sm:px-8 max-w-5xl mx-auto space-y-6">
            
            {/* BLOQUE 1: PADRINO */}
            <div ref={(element) => registerSection?.('padrino', element)} className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all">
            <button
                onClick={() => toggleSection('padrino')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50/30 transition-colors"
            >
                <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-100/70 text-apapacho-green rounded-xl">
                    <HeartHandshake size={28} />
                </div>
                <h3 className="text-2xl font-bold text-apapacho-green">Padrino</h3>
                </div>
                {openSection === 'padrino' ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {openSection === 'padrino' && (
                <div className="p-6 sm:p-8 border-t border-gray-100 bg-gray-50/40 space-y-6">
                <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
                    Elegí tu aporte para acompañar a Fundación Apapacho Con El Alma durante la permanencia de infancias y adolescencias en DCI.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sponsorshipOptions.map(({ amount, url }) => {
                        const amountLabel = `$${sponsorshipAmountFormatter.format(amount)} ARS`;

                        return (
                            <div key={amount} className="bg-white p-6 rounded-2xl border border-gray-200 text-center space-y-4">
                                <h4 className="text-2xl font-bold text-apapacho-green">
                                    {amountLabel}
                                </h4>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Apadriná con ${amountLabel} (abre en otra pestaña)`}
                                    className="inline-block w-full text-center bg-apapacho-green hover:bg-apapacho-darkgreen text-white font-extrabold text-lg px-4 py-3.5 rounded-full shadow-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-apapacho-darkgreen"
                                >
                                    APADRINÁ
                                </a>
                            </div>
                        );
                    })}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Antes de confirmar tu adhesión, revisá en Mercado Pago el importe, la frecuencia de cobro y las condiciones de la suscripción.
                </p>
                </div>
            )}
            </div>

        {/* BLOQUE 2: DONACIONES (Dinero, Materiales e Insumos) */}
            <div ref={(element) => registerSection?.('donaciones', element)} className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all">
            <button
                onClick={() => toggleSection('donaciones')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50/30 transition-colors"
            >
                <div className="flex items-center space-x-4">
                <div className="p-3 bg-amber-100/70 text-amber-600 rounded-xl">
                    <Gift size={28} />
                </div>
                <h3 className="text-2xl font-bold text-amber-600">Donaciones</h3>
                </div>
                {openSection === 'donaciones' ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {openSection === 'donaciones' && (
                <div className="p-6 sm:p-8 border-t border-gray-100 bg-gray-50/40 space-y-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-apapacho-green">
                        Donación independiente
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
                        Colaborá con Fundación Apapacho Con El Alma con un aporte monetario. Podrás ingresar el importe que desees donar en Mercado Pago, sin suscripción automática.
                    </p>
                    <a
                        href="https://link.mercadopago.com.ar/apapachoconelalma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto text-center bg-apapacho-green hover:bg-apapacho-darkgreen text-white font-extrabold text-lg px-10 py-3.5 rounded-full shadow-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-apapacho-darkgreen"
                    >
                        DONÁ
                    </a>
                </div>

                <p className="text-center text-gray-700 font-bold text-lg">
                    ¡Si tenés algo de lo que figura en esta lista para donar, acércate a nuestro punto de recepción!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Listado Necesidades Habituales */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
                    <div className="bg-apapacho-green text-white font-bold text-center py-2 rounded-lg text-sm uppercase tracking-wider">
                        Necesidades Habituales
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <li className="flex items-center space-x-2">⭐ <span>Juguetes didácticos y juegos de mesa</span></li>
                        <li className="flex items-center space-x-2">⭐ <span>Útiles escolares y cuadernos</span></li>
                        <li className="flex items-center space-x-2">⭐ <span>Insumos para festejos (cotillón, manteles)</span></li>
                        <li className="flex items-center space-x-2">⭐ <span>Libros infantiles y de cuentos</span></li>
                    </ul>
                    </div>

                    {/* Listado Necesidades del Momento */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
                    <div className="bg-amber-500 text-white font-bold text-center py-2 rounded-lg text-sm uppercase tracking-wider">
                        Necesidades Del Momento
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                        <li className="flex items-center space-x-2">⭐ <span>Ropa de abrigo y calzado (varios talles)</span></li>
                        <li className="flex items-center space-x-2">⭐ <span>Insumos para cumpleaños</span></li>
                        <li className="flex items-center space-x-2">⭐ <span>Materiales de arte (hojas, temperas, pinceles)</span></li>
                    </ul>
                    </div>

                    {/* Caja de recepción / Horarios */}
                    <div className="bg-orange-100/60 p-6 rounded-2xl border border-orange-200 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-apapacho-green font-bold">
                        <MapPin size={20} />
                        <span>Punto de Recepción</span>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed">
                        Coordinamos la recepción de insumos en San Miguel de Tucumán y Yerba Buena.
                        </p>
                        <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 pt-2">
                        <Clock size={16} className="text-apapacho-green" />
                        <span>Coordinación previa por WhatsApp</span>
                        </div>
                    </div>
                    <a 
                        href="https://wa.me/5493816399929" 
                        target="_blank" 
                        rel="noreferrer"
                        className="block text-center bg-white border border-orange-300 text-apapacho-green font-bold text-xs py-2.5 rounded-xl hover:bg-orange-50 transition-colors"
                    >
                        Coordinar Entrega
                    </a>
                    </div>

                </div>
                </div>
            )}
            </div>

        {/* BLOQUE 3: VOLUNTARIO */}
            <div ref={(element) => registerSection?.('voluntario', element)} className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all">
            <button
                onClick={() => toggleSection('voluntario')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50/30 transition-colors"
            >
                <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-100/70 text-apapacho-red rounded-xl">
                    <UserPlus size={28} />
                </div>
                <h3 className="text-2xl font-bold text-apapacho-red">Voluntario</h3>
                </div>
                {openSection === 'voluntario' ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {openSection === 'voluntario' && (
                <div className="p-6 sm:p-8 border-t border-gray-100 bg-gray-50/40 space-y-8">
                <p className="text-gray-600 text-base leading-relaxed">
                    En Fundación Apapacho Con El Alma compartimos la vocación de acompañar a las infancias y adolescencias desde el tiempo compartido, la escucha y el afecto.
                </p>

                <div className="space-y-3">
                    <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wider">
                    Perfil de voluntarios que necesitamos actualmente:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                    <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-gray-100">
                        <CheckCircle2 size={16} className="text-apapacho-green" />
                        <span>Apoyo escolar y lectura</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-gray-100">
                        <CheckCircle2 size={16} className="text-apapacho-green" />
                        <span>Recreadores y coordinadores de juegos</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-gray-100">
                        <CheckCircle2 size={16} className="text-apapacho-green" />
                        <span>Fotografía, redes y diseño</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-gray-100">
                        <CheckCircle2 size={16} className="text-apapacho-green" />
                        <span>Movilidad y logística de traslados</span>
                    </div>
                    </div>
                </div>

              {/* Banner destacado CTA */}
                <div className="bg-gray-900 text-white rounded-2xl p-8 text-center space-y-4 shadow-md">
                    <h4 className="text-xl sm:text-2xl font-extrabold">
                    ¿Qué tipo de voluntariado querés hacer?
                    </h4>
                    <p className="text-gray-300 text-sm max-w-lg mx-auto">
                    Comunicate con nosotros para agendar una primera entrevista.
                    </p>
                    <a 
                    href="https://wa.me/5493812155026?text=Hola,%20quiero%20sumarme%20como%20voluntario!" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block bg-apapacho-red hover:bg-red-700 text-white font-extrabold px-8 py-3 rounded-full transition-transform hover:scale-105"
                    >
                    ¡Quiero unirme!
                    </a>
                </div>
                </div>
            )}
            </div>

        {/* BLOQUE 4: EMPRESA ALIADA */}
        <div ref={(element) => registerSection?.('empresa', element)} className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all">
            <button
                onClick={() => toggleSection('empresa')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50/30 transition-colors"
            >
                <div className="flex items-center space-x-4">
                <div className="p-3 bg-teal-100/70 text-teal-600 rounded-xl">
                    <Building2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-teal-600">Empresa Aliada</h3>
                </div>
                {openSection === 'empresa' ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {openSection === 'empresa' && (
                <div className="p-6 sm:p-8 border-t border-gray-100 bg-gray-50/40 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 text-base">¿Cuáles son los beneficios?</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Sumar a tu empresa como aliada potencia tu Responsabilidad Social Empresaria (RSE), impactando directamente en la calidad de vida de los niños, niñas y adolescentes de nuestra provincia y visibilizando el compromiso social de tu marca.
                    </p>
                    </div>
                    <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 text-base">Modalidades de Alianza</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Podés colaborar mediante aportes corporativos periódicos, sponsoreo de eventos específicos (Navidad, Día de las Infancias) o donación de productos.
                    </p>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <a 
                    href="mailto:apapacho.aca@gmail.com?subject=Alianza%20Empresarial" 
                    className="inline-flex items-center space-x-2 text-sm font-bold text-teal-600 hover:text-teal-800 transition-colors"
                    >
                    <Send size={16} />
                    <span>Contactar a nuestro equipo de Alianzas</span>
                    </a>
                </div>
                </div>
            )}
            </div>

        {/* BLOQUE 5: EMBAJADOR */}
            <div ref={(element) => registerSection?.('embajador', element)} className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all">
            <button
                onClick={() => toggleSection('embajador')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50/30 transition-colors"
            >
                <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100/70 text-blue-600 rounded-xl">
                    <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">Embajador</h3>
                </div>
                {openSection === 'embajador' ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {openSection === 'embajador' && (
                <div className="p-6 sm:p-8 border-t border-gray-100 bg-gray-50/40 space-y-6">
                <div className="space-y-3 max-w-2xl">
                    <h4 className="font-bold text-gray-900 text-base">¿Cómo funciona?</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    Un Embajador de Fundación Apapacho Con El Alma es una persona comprometida que difunde nuestra causa en sus redes sociales, ámbitos laborales o círculos cercanos, ayudándonos a sumar nuevos padrinos, donantes e insumos.
                    </p>
                </div>

              {/* Formulario/Inscripción de Embajador (reemplaza a la indicación de descargar app) */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4 max-w-xl">
                    <h5 className="font-bold text-gray-800 text-sm uppercase tracking-wider">
                    Inscribite como Embajador Digital
                    </h5>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                    <input 
                        type="text" 
                        placeholder="Nombre completo" 
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500"
                    />
                    <input 
                        type="email" 
                        placeholder="Correo electrónico" 
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                    >
                        Quiero ser Embajador
                    </button>
                    </form>
                </div>
                </div>
            )}
        </div>

        </section>

    </div>
        );
    };

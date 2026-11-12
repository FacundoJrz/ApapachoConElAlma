import React from 'react';
import { CONTACTO, crearEnlaceCorreo } from '../../config/contacto';
import { ExternalLink, ImageOff } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../commons/SocialIcons';
import { ConElAlmaBadge } from '../commons/ConElAlmaBadge';
import { DonationBanner } from '../home/DonationBanner';
import collageSumateSection from '../../assets/CollageSumateSection.jpg';
import instagramFeed from '../../data/instagram.json';

// URLs Oficiales
const INSTAGRAM_URL = "https://www.instagram.com/fundacion_apapacho/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61555260777900&ref=NONE_xav_ig_profile_page_web#";

interface SocialPost {
    id: string;
    imageUrl: string | null;
    caption: string;
    postUrl: string;
    timestamp: string;
    mediaType: string;
}

const instagramPosts: SocialPost[] = instagramFeed.posts;
const postDateFormatter = new Intl.DateTimeFormat('es-AR', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Argentina/Buenos_Aires',
});

const facebookPosts = [
    {
        id: 'fb-1',
        date: 'Hace 2 días',
        text: 'Agradecemos a todos los voluntarios que hicieron posible la jornada de festejos de cumpleaños este fin de semana.',
        postUrl: FACEBOOK_URL,
    },
    {
        id: 'fb-2',
        date: 'Hace 5 días',
        text: '¡Resolución N° 102/2025 DPJ aprobada! Seguimos creciendo con personería jurídica para acompañar a más niños en Tucumán.',
        postUrl: FACEBOOK_URL,
    },
    {
        id: 'fb-3',
        date: 'Hace 1 semana',
        text: 'Buscamos nuevos voluntarios para el área de Apoyo Escolar en San Miguel de Tucumán. ¡Sumate a nuestro equipo!',
        postUrl: FACEBOOK_URL,
    },
];

interface NovedadesSectionProps {
    openDataDeletion?: boolean;
    dataDeletionRef?: React.Ref<HTMLDetailsElement>;
}

export const NovedadesSection: React.FC<NovedadesSectionProps> = ({ openDataDeletion = false, dataDeletionRef }) => {
    return (
        <div className="w-full bg-white font-sans text-gray-800">
        
        {/* 1. Hero Header NOVEDADES */}
        <section className="relative bg-gray-900 text-white py-24 sm:py-32 flex items-center justify-center overflow-hidden">
            <div 
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url(${collageSumateSection})` }}
            />
            <div className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-4">
            <div className="inline-flex flex-col items-center">
                <h1 className="font-brand text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
                NOVEDADES
                </h1>
                <ConElAlmaBadge className="w-40 sm:w-60 -mt-1 sm:-mt-3" textColor="text-apapacho-green" />
            </div>
            <p className="text-lg sm:text-2xl font-light text-gray-200 max-w-xl mx-auto pt-2">
                Mirá las últimas noticias y actividades de la fundación
            </p>
            </div>
        </section>

        {/* Banner de Donación Reutilizable */}
        <DonationBanner />

        {/* 2. Sección Feed Instagram */}
        <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-4 gap-4">
            <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-pink-50 text-pink-600 rounded-2xl">
                <InstagramIcon size={28} />
                </div>
                <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Instagram</h2>
                <p className="text-xs text-gray-500">@fundacion_apapacho</p>
                </div>
            </div>

            <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-sm"
            >
                <span>Ver perfil en Instagram</span>
                <ExternalLink size={16} />
            </a>
            </div>

            {instagramPosts.length === 0 && (
                <p className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
                    Por ahora podés ver nuestras últimas publicaciones directamente en{' '}
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-pink-700 underline focus-visible:outline-2 focus-visible:outline-offset-4">
                        Instagram
                    </a>.
                </p>
            )}

            {/* Grilla adaptable de las últimas seis publicaciones reales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {instagramPosts.map((post) => (
                <a
                key={post.id}
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${post.caption || 'Publicación de Fundación Apapacho Con El Alma'} — ${postDateFormatter.format(new Date(post.timestamp))}. Ver en Instagram (abre otra pestaña)`}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xs hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-600"
                >
                {post.imageUrl ? <img
                    src={`${import.meta.env.BASE_URL}${post.imageUrl}`}
                    alt={post.caption || 'Publicación de Fundación Apapacho Con El Alma'}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                /> : <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center text-gray-600">
                    <ImageOff size={32} aria-hidden="true" />
                    <span className="text-sm">Ver publicación en Instagram</span>
                </div>}

                {/* Overlay oscuro al pasar el cursor */}
                <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity p-6 flex flex-col justify-between text-white">
                    <p className="text-xs font-medium line-clamp-3 leading-relaxed">
                    {post.caption || 'Ver publicación en Instagram'}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold pt-2 border-t border-white/20">
                        <time dateTime={post.timestamp}>{postDateFormatter.format(new Date(post.timestamp))}</time>
                        <ExternalLink size={14} aria-hidden="true" />
                    </div>
                </div>
                </a>
            ))}
            </div>
        </section>

        <section aria-label="Eliminación de datos de Instagram" className="px-4 sm:px-8 max-w-6xl mx-auto pb-8">
            <details ref={dataDeletionRef} open={openDataDeletion} className="rounded-2xl border border-gray-200 bg-gray-50">
                <summary className="cursor-pointer rounded-2xl p-5 sm:p-6 font-bold text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-600">
                    Solicitar la eliminación de publicaciones de Instagram
                </summary>
                <div className="px-5 pb-6 sm:px-6 space-y-4 text-sm leading-relaxed text-gray-700">
                    <p>
                        Para solicitar la eliminación de publicaciones de Instagram de nuestra web escribinos a{' '}
                        <a href={crearEnlaceCorreo('Solicitud de eliminación de datos - ApapachoConElAlmaWeb')} className="font-bold text-pink-700 underline break-all focus-visible:outline-2 focus-visible:outline-offset-4">
                            {CONTACTO.correo}
                        </a>.
                    </p>
                    <p>Usá el asunto «Solicitud de eliminación de datos - ApapachoConElAlmaWeb» e incluí:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Tu nombre y el usuario de Instagram relacionado con la solicitud.</li>
                        <li>El enlace a la publicación, si corresponde, y qué datos solicitás eliminar.</li>
                        <li>Tu relación con la cuenta o el contenido para que podamos verificar la solicitud.</li>
                    </ul>
                    <p>No envíes contraseñas, tokens ni documentos de identidad.</p>
                    <p>
                        La solicitud se atiende manualmente. Una vez verificada, retiraremos los datos correspondientes que gestione esta integración, incluidas las copias de textos e imágenes publicadas en nuestra web. Si hace falta más información, te contactaremos por correo.
                    </p>
                    <p>Este procedimiento no elimina las publicaciones originales de Instagram, que se gestionan desde esa plataforma.</p>
                    <a href="#novedades/eliminacion-datos" className="inline-block font-semibold text-pink-700 underline focus-visible:outline-2 focus-visible:outline-offset-4">
                        Enlace directo a estas instrucciones
                    </a>
                </div>
            </details>
        </section>

        {/* 3. Sección Feed Facebook */}
        <section className="py-12 px-4 sm:px-8 max-w-6xl mx-auto space-y-8 mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-4 gap-4">
            <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-2xl">
                <FacebookIcon size={28} />
                </div>
                <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Facebook</h2>
                <p className="text-xs text-gray-500">Fundación Apapacho Con El Alma</p>
                </div>
            </div>

            <a 
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-sm"
            >
                <span>Seguinos en Facebook</span>
                <ExternalLink size={16} />
            </a>
            </div>

            {/* Tarjetas de publicaciones de Facebook */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facebookPosts.map((fb) => (
                <a
                key={fb.id}
                href={fb.postUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-400 font-semibold">
                    <span>Facebook Post</span>
                    <span>{fb.date}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {fb.text}
                    </p>
                </div>

                <div className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 group">
                    <span>Ver publicación original</span>
                    <ExternalLink size={12} />
                </div>
                </a>
            ))}
            </div>
        </section>

        </div>
        );
    };

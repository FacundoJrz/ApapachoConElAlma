import React from 'react';
import { ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../commons/SocialIcons';
import { ConElAlmaBadge } from '../commons/ConElAlmaBadge';
import { DonationBanner } from '../home/DonationBanner';
import collageSumateSection from '../../assets/CollageSumateSection.jpg';

// URLs Oficiales
const INSTAGRAM_URL = "https://www.instagram.com/fundacion_apapacho/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61555260777900&ref=NONE_xav_ig_profile_page_web#";

interface SocialPost {
    id: string;
    imageUrl: string;
    caption: string;
    likes: number;
    comments: number;
    postUrl: string;
}

// Datos de publicaciones recientes de APAPACHO
const instagramPosts: SocialPost[] = [
    {
        id: '1',
        imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop',
        caption: '¡Festejando los cumpleaños del mes en el DCI Barrio Sur! 🎉🎂',
        likes: 124,
        comments: 18,
        postUrl: INSTAGRAM_URL,
    },
    {
        id: '2',
        imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
        caption: 'Taller de lectura y apoyo escolar semanal en Tafí Viejo 📚✨',
        likes: 98,
        comments: 12,
        postUrl: INSTAGRAM_URL,
    },
    {
        id: '3',
        imageUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=600&auto=format&fit=crop',
        caption: 'Tarde de juegos y recreación al aire libre ☀️🎨',
        likes: 156,
        comments: 24,
        postUrl: INSTAGRAM_URL,
    },
    {
        id: '4',
        imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop',
        caption: 'Encuentro mensual de referentes y voluntarios 🫂🧡',
        likes: 89,
        comments: 9,
        postUrl: INSTAGRAM_URL,
    },
    {
        id: '5',
        imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
        caption: 'Talleres de expresión artística en Yerba Buena 🧩🎨',
        likes: 112,
        comments: 15,
        postUrl: INSTAGRAM_URL,
    },
    {
        id: '6',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop',
        caption: 'Salida especial y paseo recreativo fuera de las residencias 🚌🥳',
        likes: 175,
        comments: 31,
        postUrl: INSTAGRAM_URL,
    },
];

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

export const NovedadesSection: React.FC = () => {
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

            {/* Grilla 3x2 idéntica al diseño de referencia */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {instagramPosts.map((post) => (
                <a
                key={post.id}
                href={post.postUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xs hover:shadow-md transition-all"
                >
                <img 
                    src={post.imageUrl} 
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay oscuro al pasar el cursor */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-between text-white">
                    <p className="text-xs font-medium line-clamp-3 leading-relaxed">
                    {post.caption}
                    </p>

                    <div className="flex items-center space-x-4 text-xs font-bold pt-2 border-t border-white/20">
                    <span className="flex items-center space-x-1">
                        <Heart size={14} className="fill-white" />
                        <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <MessageCircle size={14} className="fill-white" />
                        <span>{post.comments}</span>
                    </span>
                    </div>
                </div>
                </a>
            ))}
            </div>
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

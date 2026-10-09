import React from 'react';
import pinceladaSvg from '../../assets/Pincelada.svg';

interface ConElAlmaBadgeProps {
    className?: string;
    textColor?: string;
    textClassName?: string;
}

export const ConElAlmaBadge: React.FC<ConElAlmaBadgeProps> = ({
    className = "w-48 sm:w-64 md:w-80",
    textColor = "text-apapacho-green",
    textClassName = "text-xs sm:text-base md:text-xl"
}) => {
    return (
        <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
        {/* Pincelada SVG adaptable */}
        <img 
            src={pinceladaSvg} 
            alt="Fondo pincelada" 
            className="w-full h-auto object-contain block transform -scale-y-100 -rotate-5"
        />
        
        {/* Texto superpuesto proporcional */}
        <span 
            className={`absolute font-bold tracking-widest uppercase leading-none ${textColor} ${textClassName}`}
            style={{
            fontFamily: '"Chewy", "Fredoka", var(--font-brand), sans-serif',
            }}
        >
            CON EL ALMA
        </span>
        </div>
    );
};

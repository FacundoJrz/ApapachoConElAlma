import React from 'react';

export const DonationBanner: React.FC = () => {
    return (
        <section className="bg-apapacho-green text-white py-6 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide italic">
            Con tu donación, <span className="not-italic underline underline-offset-4 decoration-2">brindás contención</span>
            </h2>
            
            <a
            href="#sumate/donaciones"
            className="bg-apapacho-darkgreen hover:bg-white hover:text-apapacho-darkgreen text-white font-extrabold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-md transform hover:scale-105 border-2 border-white"
            >
            DONÁ
            </a>
        </div>
        </section>
    );
};

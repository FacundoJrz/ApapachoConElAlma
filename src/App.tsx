import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { DonationBanner } from './components/home/DonationBanner';
import { InfoBlocks } from './components/home/InfoBlocks';
import { ProgramsSection } from './components/home/ProgramsSection';
import { ActionCardsGrid } from './components/home/ActionCardsGrid';
import { StatsSection } from './components/home/StatsSection';
import { PartnersSection } from './components/home/PartnersSection';
import { ConocenosSection } from './components/conocenos/ConocenosSection';
import { NuestroTrabajoSection } from './components/trabajo/NuestroTrabajoSection';
import { SumateSection } from './components/sumate/SumateSection';
import type { CollaborationSection } from './components/sumate/SumateSection';
import { NovedadesSection } from './components/novedades/NovedadesSection';
import { Footer } from './components/layout/Footer';

type View = 'home' | 'conocenos' | 'trabajo' | 'sumate' | 'novedades';

interface Route {
  view: View;
  section?: CollaborationSection;
}

function resolveRoute(hash: string): Route {
  const normalized = hash.toLowerCase();
  if (normalized.startsWith('#sumate/')) {
    const section = normalized.slice('#sumate/'.length);
    switch (section) {
      case 'padrino':
      case 'donaciones':
      case 'voluntario':
      case 'empresa':
      case 'embajador':
        return { view: 'sumate', section };
      default:
        return { view: 'sumate' };
    }
  }
  switch (hash.toLowerCase()) {
    case '#conocenos':
      return { view: 'conocenos' };
    case '#trabajo':
      return { view: 'trabajo' };
    case '#sumate':
      return { view: 'sumate' };
    case '#novedades':
      return { view: 'novedades' };
    default:
      return { view: 'home' };
  }
}

function App() {
  const [route, setRoute] = useState<Route>(() => resolveRoute(window.location.hash));
  const currentView = route.view;
  const sectionElements = useRef<Partial<Record<CollaborationSection, HTMLDivElement>>>({});
  const layoutElement = useRef<HTMLDivElement>(null);
  const registerSection = useCallback((section: CollaborationSection, element: HTMLDivElement | null) => {
    if (element) sectionElements.current[section] = element;
    else delete sectionElements.current[section];
  }, []);

  // 1. Detecta el cambio de hash (#conocenos, #trabajo, #sumate y #novedades)
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(resolveRoute(window.location.hash));
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // El apartado ya está abierto cuando se mide su posición.
  useLayoutEffect(() => {
    const target = route.section ? sectionElements.current[route.section] : undefined;
    const headerHeight = layoutElement.current?.querySelector('header')?.getBoundingClientRect().height ?? 0;
    window.scrollTo({
      top: target ? Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 16) : 0,
      left: 0,
      behavior: 'instant' // Evita la animación suave durante el cambio de vista
    });
  }, [route]);

  return (
    <div ref={layoutElement} className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <DonationBanner />
            <InfoBlocks />
            <ProgramsSection />
            <ActionCardsGrid />
            <StatsSection />
            <PartnersSection />
          </>
        )}
        {currentView === 'conocenos' && <ConocenosSection />}
        {currentView === 'trabajo' && <NuestroTrabajoSection />}
        {currentView === 'sumate' && <SumateSection key={route.section ?? 'general'} initialSection={route.section} registerSection={registerSection} />}
        {currentView === 'novedades' && <NovedadesSection />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

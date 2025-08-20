import { useState } from 'react';
import FloatingHeader from '@/components/FloatingHeader';
import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Services from '@/components/pages/Services';
import Portfolio from '@/components/pages/Portfolio';
import Contact from '@/components/pages/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingHeader currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Index;
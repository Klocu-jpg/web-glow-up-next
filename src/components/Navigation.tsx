
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded transform rotate-45 relative">
              <div className="absolute inset-1 border-2 border-white rounded"></div>
            </div>
            <span className="text-xl font-bold">PRZEGLĄDY DOMOWE</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-red-400 transition-colors duration-200"
              >
                Strona Główna
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:text-red-400 transition-colors duration-200"
              >
                Usługi
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="hover:text-red-400 transition-colors duration-200"
              >
                Cennik
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-red-400 transition-colors duration-200"
              >
                Kontakt
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-white hover:text-red-400 transition-colors duration-200"
            >
              Strona Główna
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-white hover:text-red-400 transition-colors duration-200"
            >
              Usługi
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block px-3 py-2 text-white hover:text-red-400 transition-colors duration-200"
            >
              Cennik
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-white hover:text-red-400 transition-colors duration-200"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

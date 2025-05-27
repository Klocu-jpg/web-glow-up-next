
export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform skew-y-12 animate-pulse"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q25,25 50,50 T100,50" stroke="rgba(239,68,68,0.1)" strokeWidth="2" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)"/>
        </svg>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-red-500 rounded-lg transform rotate-12 shadow-2xl">
              <div className="absolute inset-2 border-4 border-white rounded-lg"></div>
              <div className="absolute inset-4 border-2 border-white rounded"></div>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          PRZEGLĄDY DOMOWE
        </h1>
        
        <div className="text-sm md:text-base text-gray-400 mb-8 tracking-wider">
          www.przegladydomowe.pl
        </div>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-red-400">
          PRZEGLĄDY GAZOWE ELEKTRYCZNE I KOMINIARSKIE
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-4 font-medium">
          Kompleksowa obsługa obiektów budowlanych.
        </p>
        
        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
          Realizujemy obowiązkowe przeglądy domów jednorodzinnych, wielorodzinnych oraz użyteczności publicznej. 
          Również zajmujemy się przeglądami nieruchomości deweloperskich oraz nieruchomości z rynku wtórnego. 
          Wykonujemy świadectwa energetyczne obowiązkowe dla wszystkich nieruchomości.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Skontaktuj się z nami
          </button>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Zobacz cennik
          </button>
        </div>
      </div>
    </section>
  );
};


import { Flame, Zap, Building } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Flame className="w-16 h-16" />,
      title: "Przeglądy Gazowe",
      description: "Profesjonalne przeglądy instalacji gazowych zgodnie z obowiązującymi normami bezpieczeństwa."
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: "Przeglądy Elektryczne", 
      description: "Kompleksowe przeglądy instalacji elektrycznych w budynkach mieszkalnych i użytkowych."
    },
    {
      icon: <Building className="w-16 h-16" />,
      title: "Przeglądy Kominiarskie",
      description: "Przeglądy kominów, przewodów dymowych i wentylacyjnych oraz czyszczenie kominów."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Nasze Usługi
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferujemy kompleksowe usługi przeglądów technicznych dla różnych typów nieruchomości
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-red-500/50"
            >
              <div className="text-red-500 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img 
              src="/lovable-uploads/83ce895d-43b2-4137-b100-ff1e0b5a6253.png" 
              alt="Palnik gazowy"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-semibold">Instalacje Gazowe</h4>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img 
              src="/lovable-uploads/83ce895d-43b2-4137-b100-ff1e0b5a6253.png" 
              alt="Dach z dachówkami"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-semibold">Systemy Kominowe</h4>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img 
              src="/lovable-uploads/83ce895d-43b2-4137-b100-ff1e0b5a6253.png" 
              alt="Instalacje elektryczne"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-semibold">Instalacje Elektryczne</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

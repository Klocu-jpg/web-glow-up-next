
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl text-gray-400">
            Jesteśmy dostępni, aby odpowiedzieć na wszystkie Twoje pytania
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">Informacje kontaktowe</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telefon</p>
                    <p className="text-white text-lg font-semibold">+48 509 488 556</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white text-lg font-semibold">mp@przegladydomowe.pl</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Godziny pracy</p>
                    <p className="text-white text-lg font-semibold">Pon-Pt: 8:00-18:00</p>
                    <p className="text-gray-400">Sob: 9:00-14:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-white">Dlaczego wybierać nas?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Doświadczenie i profesjonalizm</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Konkurencyjne ceny</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Terminowość i rzetelność</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Kompleksowa obsługa</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-white">Wyślij wiadomość</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Imię</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Twoje imię"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Nazwisko</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Twoje nazwisko"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="twoj@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Telefon</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="+48 123 456 789"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Rodzaj przeglądu</label>
                <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200">
                  <option value="">Wybierz rodzaj przeglądu</option>
                  <option value="gazowy">Przegląd gazowy</option>
                  <option value="elektryczny">Przegląd elektryczny</option>
                  <option value="kominiarski">Przegląd kominiarski</option>
                  <option value="kompleksowy">Przegląd kompleksowy</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Wiadomość</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="Opisz szczegóły dotyczące przeglądu..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-white">Umów się na przegląd</h3>
            <p className="text-gray-400 mb-6">
              Zadzwoń lub napisz, aby umówić termin przeglądu Twojej nieruchomości
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+48509488556"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Zadzwoń teraz</span>
              </a>
              <a 
                href="mailto:mp@przegladydomowe.pl"
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Napisz email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

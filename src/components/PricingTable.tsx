
export const PricingTable = () => {
  const pricingData = [
    {
      category: "Domy jednorodzinne",
      gazowy: "200,00 zł",
      kominiarski: "300,00 zł", 
      elektryczny: "450,00 zł",
      rynekPierwotny: "650,00 zł",
      rynekWtorny: "650,00 zł"
    },
    {
      category: "Domy wielorodzinne wspólnoty",
      gazowy: "40 zł za punkt",
      kominiarski: "20 zł za punkt",
      elektryczny: "50 zł za punkt", 
      rynekPierwotny: "550,00 zł",
      rynekWtorny: "550,00 zł"
    },
    {
      category: "Domy wielorodzinne mieszkania",
      gazowy: "40 zł za punkt",
      kominiarski: "20 zł za punkt",
      elektryczny: "25 zł za punkt",
      rynekPierwotny: "550,00 zł", 
      rynekWtorny: "550,00 zł"
    },
    {
      category: "Biura",
      gazowy: "200,00 zł",
      kominiarski: "300,00 zł",
      elektryczny: "40 zł za punkt",
      rynekPierwotny: "x",
      rynekWtorny: "x"
    },
    {
      category: "Obiekty użyteczności publicznej",
      gazowy: "Do uzgodnienia",
      kominiarski: "Do uzgodnienia", 
      elektryczny: "Do uzgodnienia",
      rynekPierwotny: "x",
      rynekWtorny: "x"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Cennik Usług
          </h2>
          <p className="text-xl text-gray-400">
            Przejrzyste ceny dla wszystkich rodzajów przeglądów
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Rodzaj nieruchomości</th>
                  <th className="px-6 py-4 text-center font-semibold">Przegląd gazowy</th>
                  <th className="px-6 py-4 text-center font-semibold">Przegląd kominiarski</th>
                  <th className="px-6 py-4 text-center font-semibold">Przegląd elektryczny</th>
                  <th className="px-6 py-4 text-center font-semibold">Przegląd rynku pierwotnego</th>
                  <th className="px-6 py-4 text-center font-semibold">Przegląd rynku wtórnego</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {pricingData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-medium border-r border-gray-200">{row.category}</td>
                    <td className="px-6 py-4 text-center border-r border-gray-200">{row.gazowy}</td>
                    <td className="px-6 py-4 text-center border-r border-gray-200">{row.kominiarski}</td>
                    <td className="px-6 py-4 text-center border-r border-gray-200">{row.elektryczny}</td>
                    <td className="px-6 py-4 text-center border-r border-gray-200">{row.rynekPierwotny}</td>
                    <td className="px-6 py-4 text-center">{row.rynekWtorny}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Umów się na przegląd
          </button>
        </div>
      </div>
    </section>
  );
};

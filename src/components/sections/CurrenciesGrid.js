import Link from 'next/link';

export default function CurrenciesGrid() {
  const currencies = [
    { code: "AUD", name: "Australian dollar" },
    { code: "GBP", name: "British pound" },
    { code: "JPY", name: "Japanese yen" },
    { code: "CAD", name: "Canadian dollar" },
    { code: "HKD", name: "Hong Kong dollar" },
    { code: "MXN", name: "Mexican peso" },
    { code: "EUR", name: "euro" },
    { code: "INR", name: "Indian rupee" },
    { code: "NZD", name: "New Zealand dollar" },
    { code: "PLN", name: "Polish złoty" },
    { code: "SGD", name: "Singapore dollar" },
    { code: "USD", name: "US dollar" }
  ];

  return (
    <section className="bg-white py-20 border-t border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
          Quick, secure, global payments to over 50 currencies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {currencies.map((currency, idx) => (
            <Link 
              key={idx} 
              href="#" 
              className="flex items-center p-4 rounded-xl border border-border-color/60 hover:border-accent-green hover:shadow-sm transition-all group"
            >
               <span className="bg-gray-100 text-navy font-bold rounded px-2 py-1 mr-4 group-hover:bg-accent-green/10 transition-colors">
                  {currency.code}
               </span>
               <span className="text-gray-700 font-medium group-hover:text-navy transition-colors">
                  {currency.name}
               </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
           <Link href="#" className="inline-flex items-center text-navy font-bold hover:text-accent-blue transition-colors">
              See full list of currencies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
           </Link>
        </div>
      </div>
    </section>
  );
}

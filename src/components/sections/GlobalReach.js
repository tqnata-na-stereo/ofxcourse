import Link from 'next/link';

export default function GlobalReach() {
  const countries = [
    { name: "Australia", code: "au" }, { name: "China", code: "cn" }, { name: "India", code: "in" }, { name: "New Zealand", code: "nz" }, { name: "Spain", code: "es" },
    { name: "Belgium", code: "be" }, { name: "European Union", code: "eu" }, { name: "Ireland", code: "ie" }, { name: "Poland", code: "pl" }, { name: "Thailand", code: "th" },
    { name: "Philippines", code: "ph" }, { name: "France", code: "fr" }, { name: "Italy", code: "it" }, { name: "Singapore", code: "sg" }, { name: "United Kingdom", code: "gb" },
    { name: "Canada", code: "ca" }, { name: "Germany", code: "de" }, { name: "Netherlands", code: "nl" }, { name: "South Africa", code: "za" }, { name: "United States", code: "us" }
  ];

  return (
    <section>
      {/* Top CTA: White Background */}
      <div className="bg-white py-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#F6F6F5] rounded-[32px] p-12 md:p-16 mb-24 w-full max-w-6xl text-center mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-10">
                Join 1 million+ people already using OFX.
              </h2>
              <Link href="#" className="inline-block bg-[#363636] hover:bg-black text-white font-bold text-lg px-14 py-3 rounded-sm transition-all shadow-lg">
                Open an account
              </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Reach: #F7F9FA Background */}
      <div className="bg-[#F7F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-16">
            Send money to over 170 countries (and counting)
          </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 text-left max-w-5xl mx-auto">
          {countries.map((country, idx) => (
            <Link key={idx} href="#" className="flex items-center text-gray-700 hover:text-black font-medium transition-colors group">
              <div className="w-8 h-6 relative mr-3 border border-gray-100 shadow-sm overflow-hidden rounded-[2px] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              {country.name}
            </Link>
          ))}
        </div>
        
        <div className="mt-16">
           <Link href="#" className="inline-flex items-center text-black font-bold hover:opacity-70 transition-opacity border-b-2 border-black/10 pb-1">
              See full list of countries
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
           </Link>
        </div>

        </div>
      </div>
    </section>
  );
}

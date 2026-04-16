import Link from 'next/link';

const cases = [
  {
    title: "Maximise global investment returns",
    description: "When you’re cashing out international property, stocks or other assets abroad, keep more of the money you’ve earned.",
    linkText: "Selling shares",
    href: "#"
  },
  {
    title: "Keep more of your savings and pension",
    description: "Saving money is hard enough. Shift your savings or nest egg across currencies with a fast, secure transfer that keeps life moving forward.",
    linkText: "Savings & pension",
    href: "#"
  },
  {
    title: "Send money to friends and family overseas",
    description: "Whether it’s a gift or a lifeline, send it straight to their bank accounts. They don’t even need an OFX account.",
    linkText: "Friends and family",
    href: "#"
  },
  {
    title: "Make easy global payments no matter where life takes you",
    description: "When your life stretches around the world, we make paying bills, taxes and receiving payments, simple.",
    linkText: "Paying taxes abroad",
    href: "#"
  },
  {
    title: "Make big purchases with small FX margins",
    description: "Whether it’s a wedding, fine art, or other luxury goods, our specialists can help you feel currency confident.",
    linkText: "Luxury imports",
    href: "#"
  },
  {
    title: "Manage regular payments with confidence",
    description: "Send recurring transfers for tuition, mortgages or family support to over 170 countries, with predictable costs.",
    linkText: "Regular payments",
    href: "#"
  }
];

export default function UseCases() {
  return (
    <section className="bg-[#1D1D1F] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center mx-auto max-w-4xl">
          Move money across borders. For big things, small things, and everything in between.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="group block bg-[#363636] p-8 rounded-2xl flex flex-col h-full border border-white/5"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-8 flex-grow">
                {item.description}
              </p>
              <div className="flex items-center text-white font-bold mt-auto transition-opacity hover:opacity-80">
                {item.linkText}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

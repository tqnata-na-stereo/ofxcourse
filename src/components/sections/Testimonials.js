import Image from 'next/image';

const reviews = [
  {
    title: "Great customer service",
    quote: "The customer service team was prompt and helpful. I was overseas when the problem I had occurred and they worked with me and my time zone to make things right. I really appreciate the whole team at OFX for their help.",
    author: "Katelyn",
    role: "OFX client"
  },
  {
    title: "Easy process",
    quote: "The process is just so easy. The website is great and easy to negotiate. If need be, making contact by phone is fast and efficient. This is my go to company if I need to transfer money overseas. I would happily recommend them.",
    author: "Jane",
    role: "OFX client"
  },
  {
    title: "Quick transaction",
    quote: "I received a phone call immediately following the exchange agreement which was very helpful and reassuring. The transaction was extremely quick and I received slightly more than I expected and significantly more that I would have received going through a standard bank transfer. I would definitely use this again.",
    author: "Dawn",
    role: "OFX client"
  },
  {
    title: "Reliable and good rates",
    quote: "I have had an OFX account for over 10 years which I only used occasionally up until now. I now use it quarterly to convert USD to AUD. The first transaction took some time to complete, I’ve just completed the second one by putting in a limit order which executed at a very good price this week. OFX rang me to advise me that my strike price had been hit. Once you are set up, transacting is very easy.",
    author: "Nicholas",
    role: "OFX client"
  },
  {
    title: "Cheaper than the banks",
    quote: "OFX make it so easy to transfer money. Fast secure and cheaper than the banks. They offer a great service with competitive exchange rates.",
    author: "Kelvin",
    role: "OFX client"
  },
  {
    title: "Locked in a great rate",
    quote: "When we sold the property we had a 12-week settlement period, so I locked in a forward contract with OFX. The funds arrived safely and we saved money against the market rate.",
    author: "Stan",
    role: "OFX client"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-light-gray py-20 border-t border-border-color/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
          See why people and businesses around the world choose OFX.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border-color border-opacity-40 hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-4 h-8 w-32 relative">
                <Image 
                  src="/images/image-test.png" 
                  alt="Review Source" 
                  fill
                  className="object-contain object-left"
                />
              </div>
              <h3 className="font-bold text-xl text-navy mb-3">{review.title}</h3>
              <div className="mb-6 h-5 w-32 relative">
                <Image 
                  src="/images/stars.png" 
                  alt="5 Star Rating" 
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                “{review.quote}”
              </p>
              <div className="mt-auto border-t border-gray-100 pt-4">
                <p className="font-bold text-navy">{review.author}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

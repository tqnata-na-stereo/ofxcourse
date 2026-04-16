import Link from 'next/link';
import Image from 'next/image';

export default function IntroOffer() {
  return (
    <section className="bg-white py-20 pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1D1D1F] rounded-[32px] py-16 px-12 md:px-32 text-center text-white flex flex-col items-center">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            New to OFX?<br />Get a rate too good to ignore.
          </h2>
          
          <p className="text-lg md:text-xl text-white max-w-2xl mb-10 leading-relaxed">
            Take advantage of a great introductory rate across these 7 currencies on your first personal FX transfer when booked online.
            <br className="hidden md:block" />
            Then keep the savings going with our bank-beating rates across 50+ currencies when you transfer again.
          </p>
          
          <p className="text-sm md:text-base text-white mb-4">
            Create an international payment
          </p>

          <div className="mb-12 w-full flex justify-center">
            <Image 
              src="/ofxcourse/images/flags.png" 
              alt="International Flags" 
              width={360} 
              height={60}
              className="w-full max-w-[360px] h-auto object-contain"
            />
          </div>

          <Link 
            href="#" 
            className="border-2 border-white/80 hover:bg-white hover:text-[#1D1D1F] text-white font-bold text-base px-8 py-3 rounded-sm transition-all duration-300 shadow-lg"
          >
            View your intro offer
          </Link>

        </div>
      </div>
    </section>
  );
}

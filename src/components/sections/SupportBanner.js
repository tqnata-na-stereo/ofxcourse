import Link from 'next/link';
import Image from 'next/image';

export default function SupportBanner() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 mb-24 max-w-6xl mx-auto">
          
          {/* Left Column: Text */}
          <div className="flex-1 text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              People who care
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Whenever you need help with a transfer, our team is here to support you. 
              Speak to a real person at any time, even outside bank hours.
            </p>
            <Link href="#" className="inline-flex items-center text-black font-bold text-lg group border-b-2 border-black/10 pb-1">
              Contact us
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Right Column: Image with Overlay */}
          <div className="flex-1 relative w-full max-w-md mx-auto lg:mx-0">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3]">
              <Image 
                src="/images/how-can-we-help-5.png"
                alt="Support team"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Bottom Rounded Rectangle CTA */}
        <div className="w-full max-w-7xl mx-auto bg-[#F6F6F5] rounded-[32px] p-8 md:p-10 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4">
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl font-bold text-black">
                Ready to send your money abroad? <span className="font-bold ml-2">Create your account today in less than 5 minutes.</span>
              </p>
            </div>
            <Link 
              href="#" 
              className="bg-[#0064D6] hover:bg-[#59A6FF] text-white font-bold text-lg px-12 py-3 rounded-sm transition-all shadow-md whitespace-nowrap"
            >
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

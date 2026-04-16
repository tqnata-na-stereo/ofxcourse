import Link from 'next/link';
import Image from 'next/image';

export default function CustomerStories() {
  return (
    <section className="bg-[#F6F6F5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-24 md:gap-32">
          
          {/* Story 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/ofxcourse/images/how.png" 
                alt="Jarrad Butler" 
                fill
                className="object-cover"
              />
            </div>
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                How Jarrad Butler saved around €3,365 over 7 years
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Moving overseas can be daunting, but foreign exchange doesn’t have to be. See how Jarrad Butler, a pro rugby player saves more when sending money from Ireland back to Australia with OFX.
              </p>
              <Link href="#" className="inline-flex items-center text-navy font-bold hover:text-accent-blue transition-colors border-b-2 border-navy/10 pb-1">
                Read Jarrad’s story
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>

          {/* Story 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Moving back to Edinburgh: How Scott saved roughly NZ$7,000 with OFX.
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sending money internationally can be fast, easy and inexpensive. Scott discovered this with OFX, saving thousands on his NZD to GBP transfer compared to his bank.
              </p>
              <Link href="#" className="inline-flex items-center text-navy font-bold hover:text-accent-blue transition-colors border-b-2 border-navy/10 pb-1">
                Read Scott’s story
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/ofxcourse/images/moving.png" 
                alt="Scott moving to Edinburgh" 
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

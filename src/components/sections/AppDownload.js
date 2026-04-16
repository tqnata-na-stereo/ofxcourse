import Link from 'next/link';

export default function AppDownload() {
  return (
    <section className="bg-white py-20 border-t border-border-color/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-light-gray rounded-3xl overflow-hidden flex flex-col md:flex-row items-center border border-border-color/60 p-8 md:p-12">
          
          {/* Content Side */}
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              OFX Money Transfer App
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Check rates, make global payments and track transfers. Manage your money anytime, anywhere.
            </p>
            <div className="flex gap-4">
              {/* App Store button */}
              <Link href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
                <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12.8 9.5c.2-2.3 2.1-4.2 4.4-4.5-1.5-2.2-4-2.4-4.9-2.4-2.1-.2-4.1 1.2-5.1 1.2-1.1 0-2.7-1.1-4.4-1.1-2.9 0-5.6 1.7-7 4.1-3 5.2-.8 13 2.1 17.2 1.4 2.1 3.1 4.5 5.4 4.4 2.2-.1 3.1-1.4 5.7-1.4 2.6 0 3.4 1.4 5.8 1.4 2.4.1 3.8-2.1 5.2-4.2 1.6-2.4 2.3-4.7 2.3-4.8-.1 0-4.5-1.7-4.7-6.9.1-4.2 3.5-6.2 3.6-6.2-2-2.9-5-3.3-6.1-3.4-1.2-.2-3.1 1.1-4.3 1.1z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none mb-1 text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold leading-none">App Store</div>
                </div>
              </Link>
              {/* Google Play button */}
               <Link href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
                <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M4.3 22c-.2 0-.4 0-.6-.1-.5-.2-.7-.7-.7-1.3V3.4c0-.6.2-1.1.7-1.3.4-.2.8-.2 1.2 0l13.5 7.8c.4.2.7.7.7 1.2s-.2 1-.7 1.2L5.5 22c-.4.2-.8.2-1.2 0zm.8-17.7v15.4L18.4 12 5.1 4.3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none mb-1 text-gray-300">GET IT ON</div>
                  <div className="text-sm font-semibold leading-none">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Visual/Image Side */}
          <div className="md:w-1/2 flex justify-center">
            {/* Phone mockup placeholder */}
            <div className="w-[200px] h-[400px] bg-white border-8 border-gray-800 rounded-3xl shadow-xl flex items-center justify-center text-center p-4">
              <span className="text-xs font-semibold text-gray-400">App UI Placeholder</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

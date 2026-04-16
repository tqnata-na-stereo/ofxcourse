export default function TrustBadges() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Regulated Badge */}
          <div className="flex flex-col items-center md:items-start gap-2 px-4 py-4 md:py-0">
            <div className="text-black shrink-0">
              {/* Clean Institution SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 22h18" />
                <path d="M3 19h18" />
                <path d="M3 10h18" />
                <path d="M5 19V10" />
                <path d="M19 19V10" />
                <path d="M9 19V10" />
                <path d="M15 19V10" />
                <path d="M1 10l11-6 11 6" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-1">Regulated</h3>
              <p className="text-sm text-gray-500">OFX Is regulated by FCA in the UK.</p>
            </div>
          </div>

          {/* Trusted Badge */}
          <div className="flex flex-col items-center md:items-start gap-2 px-4 py-4 md:py-0">
             <div className="text-black shrink-0">
              {/* Clean 2-Persons SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-1">Trusted by 1 million+</h3>
              <p className="text-sm text-gray-500">More than 1 million clients have trusted OFX to move A$293 billion worldwide.</p>
            </div>
          </div>

          {/* 24/7 Support Badge */}
          <div className="flex flex-col items-center md:items-start gap-2 px-4 py-4 md:py-0">
             <div className="text-black shrink-0">
              {/* Clean Avatar with Circle SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M18 18v-1.5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3V18" />
                <circle cx="12" cy="8.5" r="3.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-1">24/7 support</h3>
              <p className="text-sm text-gray-500">Speak with a real person via phone or email day and night, whenever you need it.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

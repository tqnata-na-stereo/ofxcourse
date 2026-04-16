import Link from 'next/link';
import Image from 'next/image';

export default function Security() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Security</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Keeping you, and your money secure.
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Your money matters, and so does your peace of mind. We use multiple security measures to help protect your money and personal account information, including monitoring for unusual logins and payments to detect potential fraud early.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our 25+ year business was built on secure global payments. We are authorised by the Financial Conduct Authority as an Electronic Money Institution (Firm Ref. No. 902028), with security experts in offices around the world.
            </p>
            <Link href="#" className="inline-flex items-center text-navy font-bold hover:text-accent-blue transition-colors">
              View security measures 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/images/security.png" 
              alt="Security at OFX" 
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}

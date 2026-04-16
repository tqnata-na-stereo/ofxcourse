import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-light-gray text-foreground border-t border-border-color">
      {/* Mini Navbar */}
      <div className="bg-[#F6F6F5] border-b border-gray-200 py-6 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo_footer.png" 
              alt="OFX Logo" 
              width={100} 
              height={30}
              className="h-8 w-auto opacity-90"
            />
          </Link>
          <Link href="#" className="hidden md:block text-gray-700 font-medium hover:text-black transition-colors text-sm">Login</Link>
          <Link href="#" className="hidden md:block text-gray-700 font-medium hover:text-black transition-colors text-sm">Help & Contact</Link>
          <Link href="#" className="hidden md:block text-gray-700 font-medium hover:text-black transition-colors text-sm">Book a demo</Link>
          
          {/* Mobile version simple links */}
          <div className="flex md:hidden gap-4 text-xs font-bold text-gray-700">
            <Link href="#">Login</Link>
            <Link href="#">Help</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1 */}
          <div>
             <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-navy">OFX Money Transfer App</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-accent-green">Download app</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Send money</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Interbank exchange rates</Link></li>
             </ul>
          </div>
          
          {/* Column 2 */}
          <div>
             <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-navy">Personal</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-accent-green">Pay friends and family overseas</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Relocate overseas</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Pay taxes and bills overseas</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Sell international shares</Link></li>
             </ul>
          </div>

          {/* Column 3 */}
          <div>
             <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-navy">Company</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-accent-green">About us</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Our board</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Executive team</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Careers</Link></li>
             </ul>
          </div>

          {/* Column 4 */}
          <div>
             <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-navy">Legal & Privacy</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-accent-green">Legal</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Security</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Fraud Prevention</Link></li>
             </ul>
          </div>

          {/* Column 5 */}
          <div>
             <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-navy">Help & Contact</h4>
             <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-accent-green">Contact us</Link></li>
                <li><Link href="#" className="hover:text-accent-green">FAQs</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Platform enquiries</Link></li>
                <li><Link href="#" className="hover:text-accent-green">Press and media enquires</Link></li>
             </ul>
          </div>

        </div>

        <div className="border-t border-border-color/60 pt-8 text-xs text-gray-500 leading-relaxed">
          <p className="mb-4">© 2026 UKForex Limited (trading as “OFX”) is registered in England and Wales (Company No. 04631395). Our registered office is at 4th Floor, The White Chapel Building, 10 Whitechapel High St, London E1 8QS. We are authorised by the Financial Conduct Authority as an Electronic Money Institution (Firm Ref. No. 902028).</p>
          <p className="mb-2">Visa is a trademark owned by Visa International Service Association and used under license.</p>
          <p className="mb-2">Apple Pay is a service provided by certain Apple affiliates. Google Play and Google Pay are trademarks of Google LLC.</p>
          <p>*Cashback rewards are only available to those OFX Clients who are on an OFX Full-Suite plan...</p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border-color/50 shadow-sm">
      <div className="w-full px-10 h-20 flex items-center justify-between md:grid md:grid-cols-3">
        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/ofxcourse/images/ofx_logo.JPG" 
              alt="OFX Logo" 
              width={140} 
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 h-full items-center justify-center">
          <div className="relative group h-full flex items-center cursor-pointer">
            <span className="text-foreground font-semibold text-sm hover:text-accent-green transition-colors">Move money</span>
            <svg className="w-4 h-4 ml-1 text-gray-500 group-hover:text-accent-green transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </div>
          <div className="relative group h-full flex items-center cursor-pointer">
            <span className="text-foreground font-semibold text-sm hover:text-accent-green transition-colors">Why OFX</span>
            <svg className="w-4 h-4 ml-1 text-gray-500 group-hover:text-accent-green transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </div>
          <div className="relative group h-full flex items-center cursor-pointer">
            <span className="text-foreground font-semibold text-sm hover:text-accent-green transition-colors">Resources</span>
            <svg className="w-4 h-4 ml-1 text-gray-500 group-hover:text-accent-green transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </div>
        </nav>

        {/* Right side Buttons */}
        <div className="hidden md:flex items-center space-x-4 justify-end">
          <Link href="#" className="text-foreground font-semibold text-sm hover:text-navy transition-colors px-3 py-2">
            Login
          </Link>
          <Link href="#" className="bg-primary-btn hover:bg-primary-hover text-white font-bold text-sm px-6 py-3 rounded-sm transition-colors shadow-sm">
            Register
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-foreground p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

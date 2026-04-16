'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [amount, setAmount] = useState('10000.00');
  const [fromCurrency, setFromCurrency] = useState('GBP');
  const [toCurrency, setToCurrency] = useState('EUR');
  const rate = 1.1309;

  return (
    <section className="relative bg-[#F6F6F5] text-navy pt-24 pb-32 overflow-hidden">
      {/* Background abstract graphic (simulated) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -right-1/4 -top-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-accent-green/20 to-accent-blue/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Main Copy */}
          <div>
            <div className="mb-3">
              <Link href="#" className="inline-block cursor-pointer transition-opacity hover:opacity-80">
                <Image 
                  src="/images/trustpilot.JPG" 
                  alt="Trustpilot Rating" 
                  width={300} 
                  height={65}
                  className="h-5 w-auto"
                  priority
                  unoptimized
                />
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Move money globally. Simple, secure and stress-free.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Send money globally with bank-beating rates in 50+ currencies and to more than 170 countries fast, backed by real human support when you need it.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="#" className="bg-primary-btn hover:bg-primary-hover text-white font-bold text-lg px-8 py-4 rounded-sm transition-colors shadow-lg w-full sm:w-auto text-center">
                Get started for free
              </Link>
              <Link href="#" className="text-navy hover:text-accent-green underline underline-offset-4 decoration-2 font-medium transition-colors">
                View OFX intro offer
              </Link>
            </div>
          </div>

          {/* Currency Converter Widget */}
          <div className="bg-white text-foreground rounded-2xl shadow-2xl p-8 max-w-md mx-auto lg:ml-auto w-full relative">
            
            <div className="flex justify-between items-center mb-6">
               <span className="text-sm font-semibold text-gray-500">OFX fee</span>
               <span className="text-sm font-bold text-accent-green">+ £0.00 GBP</span>
            </div>

            {/* From Input */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Amount to be converted</label>
              <div className="flex items-center border-b-2 border-navy/20 hover:border-navy transition-colors focus-within:border-navy pb-2">
                <span className="text-2xl font-light text-gray-400 mr-2">£</span>
                <input 
                  type="text" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full text-3xl font-semibold bg-transparent outline-none focus:ring-0" 
                />
                <select 
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="text-lg font-bold bg-gray-100 rounded-lg px-3 py-1 cursor-pointer outline-none ml-2"
                >
                  <option value="GBP">GBP</option>
                  <option value="USD">USD</option>
                  <option value="AUD">AUD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>

            {/* Rate Display */}
            <div className="flex items-center justify-between my-6 py-2 border-y border-border-color/60">
              <span className="text-sm font-semibold text-gray-500">Your customer rate</span>
              <span className="text-lg font-bold">{rate}</span>
            </div>

            {/* To Display */}
            <div className="mb-8">
              <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Converted to</label>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold text-navy truncate">
                  <span className="text-2xl font-light mr-1">€</span>
                  {amount ? (parseFloat(amount) * rate).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}
                </div>
                <select 
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="text-lg font-bold bg-gray-100 rounded-lg px-3 py-1 cursor-pointer outline-none ml-2 shrink-0"
                >
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="AUD">AUD</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-primary-btn hover:bg-primary-hover text-white font-bold text-lg px-8 py-4 rounded-sm transition-colors shadow-md">
              Get started
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

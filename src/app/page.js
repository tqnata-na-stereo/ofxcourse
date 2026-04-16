import Hero from '../components/sections/Hero';
import TrustBadges from '../components/sections/TrustBadges';
import IntroOffer from '../components/sections/IntroOffer';
import Security from '../components/sections/Security';
import CustomerStories from '../components/sections/CustomerStories';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import UseCases from '../components/sections/UseCases';
import GlobalReach from '../components/sections/GlobalReach';
import SupportBanner from '../components/sections/SupportBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <IntroOffer />
      <Security />
      <CustomerStories />
      <HowItWorks />
      <Testimonials />
      <UseCases />
      <GlobalReach />
      <SupportBanner />
    </>
  );
}

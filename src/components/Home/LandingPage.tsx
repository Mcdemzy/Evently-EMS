import HeroSection from '../shared/HeroSection';
import ExploreNow from '../shared/ExploreNow';
import FAQ from '../shared/FAQ';
// import Footer from '../shared/Footer';
import NewEvents from '../shared/NewEvents';
import NewsLetter from '../shared/NewsLetter';
import PricingSection from '../shared/PricingSection';
import TrendingEvents from '../shared/TrendingEvents';

function LandingPage() {
  return (
    <main className="overflow-hidden dark:bg-black">
      <div>
        <HeroSection />
        <ExploreNow />
        <TrendingEvents />
        <NewEvents />
        <FAQ />
        <PricingSection />
        <NewsLetter />
        {/* <Footer /> */}
      </div>
    </main>
  );
}

export default LandingPage;

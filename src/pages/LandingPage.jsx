import HeroSection from '../components/HeroSection';
import InfoBar from '../components/InfoBar';
import MenuSection from '../components/MenuSection';
import DrinkFeatured from '../components/DrinkFeatured';
import FormSection from '../components/FormSection';
import FooterSection from '../components/FooterSection';


function LandingPage({ isDark }) {
 return (
    <div>
      <HeroSection />
      <InfoBar />
      <MenuSection />
      <DrinkFeatured isDark={isDark} />
      <FormSection />
      <FooterSection />
    </div>
  );
}

export default LandingPage;
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import StatisticsSection from '../components/home/StatisticsSection';
import CtaSection from '../components/home/CtaSection';
import FacilitiesSection from '../components/home/FacilitiesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import BannerSection from '../components/home/BannerSection';
import AcademicSearchPage from './AcademicSearchPage';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <BannerSection /> */}
      <AboutSection />
      <ServicesSection />
      <StatisticsSection />
      <FacilitiesSection />
      <CtaSection />
      <PortfolioSection />
      <AcademicSearchPage />
    </>
  );
};

export default HomePage;
import './App.css';
import HeaderSection from './Components/Header/Header_section';
import IntroSection from './Components/Intro/Intro_section';
import ServicesSection from './Components/Services/Services_section'
import WorksSection from './Components/Works/Works_section'
import PricingSection from './Components/Pricing/Pricing_section'
import ContactSection from './Components/Contact/Contact_section'

function App() {
  return (
    <div>
      <HeaderSection />
      <IntroSection />
      <ServicesSection />
      <WorksSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}

export default App;

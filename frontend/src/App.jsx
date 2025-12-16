import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./pages/home/components/HeroSection/HeroSection";
import SolarEnergyProduction from "./pages/home/components/HeroSection/HeroSection/SolarEnergyProduction";
 import EnergyProductionCards from "./components/EnergyProductionCards";
export default function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <SolarEnergyProduction />
    </>
  );
  
}


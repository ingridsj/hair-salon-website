import { NavBar } from "../../components/LandingPage/NavBar";
import { HeroSection } from "../../components/LandingPage/HeroSection";
import { Feature } from "../../components/LandingPage/Feature";
import { About } from "../../components/LandingPage/About";
import { Footer } from "../../components/LandingPage/Footer";

export function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Feature />
      <About />
      <Footer />
    </div>
  );
}

import HeroSection from "@/components/Hero";
import AboutUs from "@/components/About-us";
import { OurHRServices } from "@/components/our-services";

export default function Home() {
  return (
    <main className=" bg-white">
      <HeroSection />
      <AboutUs />
      <OurHRServices />
    </main>
  );
}


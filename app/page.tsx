import HeroSection from "@/components/HeroSection";
import WhatDrivesMe from "@/components/WhatDrivesMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";

export default function Home() {
  
  return (
    <main className="dark:bg-gray-900">
      
     <HeroSection/>
     <WhatDrivesMe/>
     <Skills/>
     <Projects/>
     <CTA/>
    </main>
  );
}

import HeroSection from "@/components/HeroSection";
import WhatDrivesMe from "@/components/WhatDrivesMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  
  return (
    <main className="dark:bg-gray-900">
      
     <HeroSection/>
     <WhatDrivesMe/>
     <Skills/>
     <Projects/>
    </main>
  );
}

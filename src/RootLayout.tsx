import React from "react";
import HeroComponent from "./components/HeroComponent";
import WhyChooseDelar from "./components/WhyChooseDelar";
import Faqs from "./components/Faqs";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import usePageSEO from "./Hooks/usePageSEO";

const RootLayout: React.FC = () => {
  usePageSEO({
    title: "Delar",
    description: "description",
    keywords: ["keywords 1", "keywords 2"],
    ogTitle: "Delar og title",
    ogDescription: "Delar og description",
    ogImage: "https://delar.com/image.png",
    ogUrl: "https://delar.com",
  });

  return (
    <div>
      <HeroComponent />
      <WhyChooseDelar />
      <Benefits />
      <Faqs />
      <Footer />
    </div>
  );
};

export default RootLayout;

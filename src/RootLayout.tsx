import HeroComponent from "./components/HeroComponent"
import WhyChooseDelar from "./components/WhyChooseDelar"
import Faqs from "./components/Faqs"
import Benefits from "./components/Benefits"
import Footer from "./components/Footer"
const RootLayout = () => {
  return (
    <div>
        <HeroComponent/>
        <WhyChooseDelar/>
        <Benefits/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default RootLayout

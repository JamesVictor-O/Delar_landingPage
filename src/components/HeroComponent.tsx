import Benefits from "./Benefits"
import Footer from "./Footer"
import Navbar from "./Navbar"

const HeroComponent = () => {
  return (
    <div className="bg-[#000F24] min-h-screen">
      <Navbar/>
    <section className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
      The Decentralized Land Registry{" "}
        <span className="text-blue-500">Delar</span>.
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
      leverages blockchain technology to create a transparent, secure and immutable record of land transactions. This platform ensures that landowners, buyers and local authorities can interact within a trustless environment, reducing the incidence of fraud and land-related disputes.
      </p>
      <div>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md mr-4 hover:bg-blue-600">
          Get Started
        </button>
        <button className="border border-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-500">
          Book a Demo
        </button>
      </div>
    </section>
    <Benefits/>
    <div className="py-2">
    <Footer/>
    </div>
    </div>
  )
}

export default HeroComponent


import Navbar from "./Navbar"

const HeroComponent = () => {
  return (
    <div className=" min-h-screen" id="/">
      <Navbar/>
    <section className="flex flex-col items-center  justify-center text-center h-screen pt-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 ">
      The Decentralized Land Registry{" "}
        <span className="text-blue-500">Delar</span>.
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
      leverages blockchain technology to create a transparent, secure and immutable record of land transactions. This platform ensures that landowners, buyers and local authorities can interact within a trustless environment, reducing the incidence of fraud and land-related disputes.
      </p>
      <div className="pt-10">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md mr-4 hover:bg-blue-600">
          Get Started
        </button>
        <button className="border border-blue-500  px-6 py-3 rounded-md hover:bg-blue-500 mb-8">
          Book a Demo
        </button>
      </div>
    </section>
    </div>
  )
}

export default HeroComponent

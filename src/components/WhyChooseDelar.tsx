import TranperencyImage from "../../public/4790881.jpg";
import SecurityImage from "../../public/3838355.jpg";
import conflixImage from "../../public/5672934.jpg";

const WhyChooseDelar = () => {
  return (
    <div className="flex flex-col px-5 items-center mt-10 md:pt-10 md:h-screen" id="why-us">
      <div className="flex items-center  flex-col md:w-[60%]">
        <h2 className="font-montserrat text-xl md:text-3xl font-medium md:font-bold">
          Why Choose Delar?
        </h2>
        <p className="font-wix text-lg font-normal text-center mt-4 leading-8">
          Start managing land ownership seamlessly with Delar. Simplify
          transactions, eliminate disputes, and focus on what matters
          most—building trust and securing your future
        </p>
      </div>

      {/* why choose us card */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-20 px-5 justify-between">
        {/* First card */}
        <div className="bg-white shadow-lg rounded-lg p-5 md:p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
          <div>
            <h2 className="font-wix text-xl font-semibold pb-3 text-gray-800">
              Unparalleled Transparency
            </h2>
            <p className="font-montserrat text-sm font-normal text-gray-600 leading-relaxed">
              We leverage blockchain technology to provide a publicly
              accessible, immutable record of land transactions. Our platform
              ensures every transaction is visible and verifiable, fostering
              trust among all stakeholders.
            </p>
          </div>
          <div className="mt-4">
            <img
              src={TranperencyImage}
              alt="Transparency"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />
          </div>
        </div>

        {/* Second card */}
        <div className="bg-white shadow-lg rounded-lg p-5 md:p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
          <h2 className="font-wix text-xl font-semibold pb-3 text-gray-800">
            Conflict Resolution and Prevention
          </h2>
          <p className="font-montserrat text-sm font-normal text-gray-600 leading-relaxed">
            With a single, authoritative source of truth for land ownership, our
            system drastically reduces disputes over ownership. Stakeholders can
            confidently engage in land transactions without fear of conflicting
            claims or legal battles.
          </p>
          <div className="mt-4">
            <img
              src={conflixImage}
              alt="Conflict Resolution"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />
          </div>
        </div>

        {/* Third card */}
        <div className="bg-white shadow-lg rounded-lg p-5 md:p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
          <div>
            <h2 className="font-wix text-xl font-semibold pb-3 text-gray-800">
              Enhanced Security Against Fraud
            </h2>
            <p className="font-montserrat text-sm font-normal text-gray-600 leading-relaxed">
              Our decentralized system eliminates risks of land grabbing,
              fraudulent sales, and double issuance of certificates.
              Blockchain's tamper-proof nature ensures that once a transaction
              is recorded, it cannot be altered, offering peace of mind to
              landowners and buyers.
            </p>
          </div>
          <div className="mt-4">
            <img
              src={SecurityImage}
              alt="Conflict Resolution"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDelar;

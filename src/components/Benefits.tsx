import React from "react";
import payment from "../assets/payment1.jpg";
import register from "../assets/regist.jpg";
import verify from "../assets/veryfy1.jpg";

const Benefits: React.FC = () => {
  return (
    <section className="py-16 px-4 h-auto md:h-screen" id="benefit">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-xs font-bold text-blue-600 uppercase px-3 py-1 bg-blue-100 rounded-md">
            Benefits
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          How it Works!
        </h2>

        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-12">
          Getting started is this simple – from creating a payment link to
          receiving funds, we’ve made every step smooth and hassle-free.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-center text-center transition-transform hover:scale-105">
            <div className="w-full sm:w-3/4 bg-gray-100 rounded-lg shadow-md mb-4 flex items-center justify-center">
              <img
                src={register}
                alt="Register"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Register Your Land</h3>
            <p className="text-sm sm:text-base">
              Register your land instantly, anywhere in the world.
            </p>
          </div>
          <div className="flex flex-col items-center text-center transition-transform hover:scale-105">
            <div className="w-full sm:w-3/4 bg-gray-100 rounded-lg shadow-md mb-4 flex items-center justify-center">
              <img
                src={verify}
                alt="Verified"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Land Verification</h3>
            <p className="text-sm sm:text-base">
              Verify your land instantly, anywhere in the world.
            </p>
          </div>

          <div className="flex flex-col items-center text-center transition-transform hover:scale-105">
            <div className="w-full sm:w-3/4 bg-gray-100 rounded-lg shadow-md mb-4 flex items-center justify-center">
              <img
                src={payment}
                alt="Payment"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Receive Payments</h3>
            <p className="text-sm sm:text-base">
              Get your land payment instantly, anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

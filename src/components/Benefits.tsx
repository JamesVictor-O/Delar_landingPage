import React from "react";
import { TbCashRegister } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { MdVerified } from "react-icons/md";
const Benefits: React.FC = () => {
  return (
    <section className="py-16 px-4  h-screen" id="benefit">
      <div className="max-w-6xl mx-auto text-center">
      
        <div className="mb-6">
          <span className="text-xs font-bold text-blue-600 uppercase px-3 py-1 bg-blue-100 rounded-md">
            Benefits
          </span>
        </div>

      
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
          How it Works!
        </h2>

       
        <p className=" text-sm md:text-base max-w-2xl mx-auto mb-12">
          Getting started is this simple – from creating a payment link to
          receiving funds, we’ve made every step smooth and hassle-free.
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-lg shadow-md mb-4 flex items-center justify-center">
              {/* Placeholder for Icon/Image */}
              <span className="text-gray-400"><TbCashRegister size={80}/></span>
            </div>
            <h3 className="text-lg font-bold  mb-2">
              Register Your Land
            </h3>
            <p className=" text-sm">
              Register your land instanly, anywhere in the world.
            </p>
          </div>
          <div className="flex flex-col items-center text-center relative">
            <div className="w-24 h-24 bg-gray-100 rounded-lg shadow-md mb-4 flex items-center justify-center">
            
              <span className="text-gray-400"><MdVerified size={80} /></span>
            </div>
            <h3 className="text-lg font-bold  mb-2">Land Verification</h3>
            <p className=" text-sm">
              Verify Your Land instantly, anywhere in the world.
            </p>

            <div className="absolute w-full h-1 bg-gray-300 top-12 left-28 md:left-0 md:top-auto md:h-full md:w-1 md:bottom-[-3.5rem]"></div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-lg shadow-md mb-4 flex items-center justify-center">
            
              <span className="text-gray-400"><MdPayments size={80} /></span>
            </div>
            <h3 className="text-lg font-bold  mb-2">
              Receive Payments
            </h3>
            <p className=" text-sm">
              Get your land instantly, anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

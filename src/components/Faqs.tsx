import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Faqs = () => {
    const [faqs, setFaqs]=useState([
        {
            id:1,
            question:"What is Delar, and how does it work?",
            answer:" technology to create a secure, transparent, and immutable record of land transactions. It enables landowners, buyers, and authorities to engage in fraud-proof and efficient land dealings.",
            isShow:false
        },
        {
            id:2,
            question:"How does Delar prevent land fraud and double issuance of certificates?",
            answer:" Delar leverages blockchain's tamper-proof nature to ensure that once a land transaction is recorded, it cannot be altered. Each land certificate is uniquely tied to a blockchain entry, preventing duplication or fraudulent claims.",
            isShow:false
        },
        {
            id:3,
            question:"Who can use Delar's platform?",
            answer:"Delar is designed for landowners, buyers, local authorities, and legal professionals. Anyone involved in land transactions can use Delar to verify ownership, transfer land rights, or resolve disputes. ",
            isShow:true
        },
        {
            id:4,
            question:" Is my information secure on Delar?",
            answer:"Yes, Delar prioritizes security. Blockchain technology ensures that your data is encrypted, immutable, and only accessible to authorized users. Transactions are publicly verifiable without exposing sensitive personal information.",
            isShow:false
        },
        {
            id:5,
            question:"  How does Delar simplify land transactions?",
            answer:"Delar reduces reliance on manual and bureaucratic processes by digitizing and automating land transactions. This ensures faster processing, minimal errors, and reduced corruption risks",
            isShow:false
        },
        {
            id:6,
            question:"Can Delar help with land dispute resolution?",
            answer:" Yes, Delar provides a single, authoritative source of truth for land ownership. This clarity drastically reduces conflicts and enables stakeholders to resolve disputes confidently and efficiently.",
            isShow:false
        },
    ])

    const handdleShowAnswer=(id:number)=>{
        setFaqs((prevFaqs)=>
             prevFaqs.map((faq)=>
                faq.id === id ? {...faq, isShow:!faq.isShow} : faq
            )
        )
    }
  return (
    <div className="px-8 flex md:flex-row flex-col  justify-between">
      <div className="flex flex-col md:w-[40%]">
        <h2 className="font-montserrat text-xl md:text-3xl font-medium md:font-bold">
          Frequently Asked Questions
        </h2>
        <p className="font-wix text-lg font-normal text-start mt-4">
          Everything you need to know about Delar. Can’t find the answer you’re
          looking for? Please reach out to our dedicated team—we’re here to help
        </p>
      </div>

      {/* faqs */}
      <div className="md:w-[55%]">
        {faqs.map((question:any) =>
          <div className="w-full border border-gray-400 py-5 px-3 shadow-lg rounded-xl mb-4 transition-transform hover:scale-105" key={question.id}>
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-wix font-semibold">
             {question.question}
            </h2>
            {question.isShow ? <IoIosArrowUp  onClick={()=> handdleShowAnswer(question.id)}/> : <IoIosArrowDown onClick={()=> handdleShowAnswer(question.id)} />}
          </div>
          {question.isShow && <p className="font-montserrat leading-5 mt-2 font-normal">
           {question.answer}
          </p> }
          
        </div>

        )}
       

      </div>
    </div>
  );
};

export default Faqs;

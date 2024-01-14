import { useState } from "react";
import { currency } from "../data";
import { IoIosArrowForward } from "react-icons/io";

const Trade = () => {
  const [itemName, setItemName] = useState("Bitcoin");

  return (
    <section className="section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px]">
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="section-title text-center mb-16">
          Trade securely and market the high growth cryptocurrencies.
        </h2>
        <div
          data-aos="fade-up"
          className="flex flex-col gap-[45px] lg:flex-row  "
        >
          {currency.map((item, idx) => {
            const { image, name, abbr, description } = item;
            return (
              <div
                onClick={() => setItemName(name)}
                className={`${
                  name === itemName ? "bg-violet text-white" : "bg-white"
                } w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                key={idx}
              >
                <div className="flex flex-col justify-center items-center">
                  <img className="mb-12" src={image} alt="" />
                  <div className="mb-4 flex items-center gap-x-2 ">
                    <div className="text-[32px] font-bold">{name}</div>
                    <div className="text-lg text-gray-400 font-medium">
                      {abbr}
                    </div>
                  </div>
                  <p className="mb-6 text-center">{description}</p>
                  <button
                    className={`${
                      name === itemName
                        ? "text-white bg-blue hover:bg-blue-hover border-none "
                        : "text-blue "
                    }  border-2 border-gray-300 rounded-full h-16 w-16 flex items-center justify-center`}
                  >
                    <div>
                      <IoIosArrowForward
                        className={name === itemName ? "text-3xl" : "text-xl"}
                      />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trade;

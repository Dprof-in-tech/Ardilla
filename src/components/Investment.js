import React from "react";
import buttonarrow1 from "../assets/buttonarrow1.svg";
import investment from "../assets/investment.svg";

const Investment = () => {
    return (
        <div className="flex flex-col max-w-8xl mx-auto px-16 py-8 relative w-full h-[690px]">
            <div className="flex text-[4rem] gap-2 font-bold self-start items-start text-[#3D0072]">
                    Unlimited
                <h1 className="text-[#0D9488]">
                    Investment
                </h1>
            </div>
            <h1 className="text-[#0D9488] mt-2 self-start text-[4rem] font-bold">
                Opportunities
                </h1>
            <p className="max-w-[50%] text-[1.5rem] text-start font-serif text-[#3D0072] mt-5">
            Plan towards your future by investing with ardilla,  Grow your money confidently and securely with the available investment oppurtuinities  
            </p>
            <div className="flex self-start mt-4">
                    <button className="flex items-center text-[#3D0072] gap-2 border-[#3D0072] border rounded-full px-8 py-4">Invest with ardilla (Coming Soon) <img src={buttonarrow1} alt="" /></button>
            </div>

            <div className="h-[497px] absolute top-[12rem] right-[6rem]">
                <img src={investment} alt="" className=" w-[743px] h-full " />
            </div>
            
        </div>
    );
}

export default Investment;
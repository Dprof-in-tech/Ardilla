import React, { useState } from "react";
import buttonarrow1 from "../assets/buttonarrow1.svg";
import buttonarrow2 from "../assets/buttonarrow.svg"; // Assuming you have a second image for hover state
import investment from "../assets/investment.svg";

const Investment = () => {
    const [buttonImage, setButtonImage] = useState(buttonarrow1);

    return (
        <div className="flex flex-col max-w-8xl mx-auto px-4 md:px-16 py-8 relative w-full h-[fit-content] md:h-[690px]">
            <div className="flex flex-col md:flex-row text-[2rem] md:text-[4rem] gap-2 font-bold self-start items-start text-[#3D0072]">
                <span>Unlimited</span>
                <h1 className="text-[#0D9488]">Investment</h1>
            </div>
            <h1 className="text-[#0D9488] mt-2 self-start text-[2rem] md:text-[4rem] font-bold">
                Opportunities
            </h1>
            <p className="max-w-full md:max-w-[50%] text-[1rem] md:text-[1.5rem] text-start font-serif text-[#3D0072] mt-5">
                Plan towards your future by investing with Ardilla. Grow your money confidently and securely with the available investment opportunities.
            </p>
            <div className="flex self-start mt-4">
                <button
                    className="flex items-center text-[#3D0072] gap-2 border-[#3D0072] border rounded-full px-4 md:px-8 py-2 md:py-4 hover:bg-[#8807F7] hover:text-gray-200"
                    onMouseEnter={() => setButtonImage(buttonarrow2)}
                    onMouseLeave={() => setButtonImage(buttonarrow1)}
                >
                    Invest with Ardilla (Coming Soon) <img src={buttonImage} alt="button arrow" />
                </button>
            </div>

            <div className="h-[300px] md:h-[497px] md:absolute md:top-[12rem] md:right-[6rem] mt-8 md:mt-0 flex justify-center">
                <img src={investment} alt="investment" className="w-[90%] md:w-[743px] h-full" />
            </div>
        </div>
    );
}

export default Investment;

import React from "react";
import side from "../assets/side.svg";

const InterestBreakdown = () => {
    return (
        <div className="max-w-8xl mx-auto px-4 lg:px-[4rem] py-8 lg:py-[6rem]">
            <h1 className="text-[2rem] lg:text-[3rem] text-[#3D0072] font-bold text-start">Interest Breakdown</h1>
            <div className="flex flex-col lg:flex-row gap-8 mt-8 items-center justify-start px-2 lg:px-8">
                <div className="flex flex-row w-full lg:w-[48%] items-start justify-start gap-4">
                  <img src={side} alt="side" /> 
                    <div className=" flex flex-col w-full lg:w-[85%]">
                        <div>
                            <h2 className="text-[#3D0072] font-bold text-[1.2rem] lg:text-[1.5rem]">More Interest</h2>
                            <p className="text-[#3D0072] text-[0.95rem] lg:text-[1rem]">Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan.</p>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-[#3D0072] font-bold text-[1.2rem] lg:text-[1.5rem]">Transparency</h2>
                            <p className="text-[#3D0072] text-[0.95rem] lg:text-[1rem]">No hidden charges and no vague deductions. Save with Ardilla and get your full interests.</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row w-full lg:w-[48%] items-start justify-start gap-4">
                   <img src={side} alt="side" />
                    <div className="flex flex-col w-full lg:w-[85%]">
                        <div>
                            <h2 className="text-[#3D0072] font-bold text-[1.2rem] lg:text-[1.5rem]">Values</h2>
                            <p className="text-[#3D0072] text-[0.95rem] lg:text-[1rem]">Your values matter to us and we are 100% committed to upholding those. Whether it is with Halal or the Ardilla saving plans.</p>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-[#3D0072] font-bold text-[1.2rem] lg:text-[1.5rem]">Complete Withdraws </h2>
                            <p className="text-[#3D0072] text-[0.95rem] lg:text-[1rem]">Withdraw your entire savings+ interest upon maturity. No minimum balance.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default InterestBreakdown;

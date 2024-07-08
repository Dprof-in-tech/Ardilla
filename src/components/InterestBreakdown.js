import React from "react";
import side from "../assets/side.svg";

const InterestBreakdown = () => {
    return (
        <div className="max-w-8xl mx-auto px-[4rem] py-[6rem]">
                <h1 className="text-[3rem] text-[#3D0072] font-bold text-start">Interest Breakdown</h1>
            <div className="flex w-[40%] items-start justify-start gap-4">
                <img src={side} alt="side" className=" object-cover border border-red-500" />
                <div className="w-[85%]">
                    <div>
                        <h2 className="text-[#3D0072] font-bold text-[1.5rem]">What is interest?</h2>
                        <p className="text-[#3D0072] text-[1rem]">Interest is the cost of borrowing money, where the borrower pays a fee to the lender for the loan. The interest is typically calculated as a percentage of the principal balance of the loan.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InterestBreakdown;
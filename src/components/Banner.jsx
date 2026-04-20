"use client";

import { FiUserPlus } from "react-icons/fi";

export default function Banner() {
    return (
        <div className ="bg-[#F8FAFC] py-12 px-4 text-center">
            <h1 className = "lg:text-5xl md:text-5xl font-bold ">Friends to keep close in your life</h1>

            <p className = "text-[#64748B] font-normal text-[16px] mt-3 text-center">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.
            </p>

            <div className ="mt-6">
                <button className ="btn bg-[#244D3F] text-white px-5 py-2 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#1B3A2E] transition duration-200 cursor-pointer font-semibold active:scale-96 shadow-md hover:shadow-lg">
                    <FiUserPlus size ={18}  />
                    Add a Friend
                </button>
            </div>

            <div className ="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto ">

                <div className = "bg-white p-6 rounded-md shadow-sm text-center transition duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl">

                    <h2 className = "text-[32px] font-semibold text-[#244D3F]">
                        10
                    </h2>
                    <p className = "text-[#64748B] font-normal text-[18px] mt-2">
                        Total Friends
                    </p>
                </div>
                <div className = "bg-white p-6 rounded-md shadow-sm text-center transition duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl">

                    <h2 className = "text-[32px] font-semibold text-[#244D3F]">
                        3
                    </h2>
                    <p className = "text-[#64748B] font-normal text-[18px] mt-2">
                        On Track 
                    </p>
                </div>
                <div className = "bg-white p-6 rounded-md shadow-sm text-center transition duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl ">

                    <h2 className = "text-[32px] font-semibold text-[#244D3F]">
                        6
                    </h2>
                    <p className = "text-[#64748B] font-normal text-[18px] mt-2">
                        Need Attention
                    </p>
                </div>
                <div className = "bg-white p-6 rounded-md shadow-sm text-center transition duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl ">

                    <h2 className = "text-[32px] font-semibold text-[#244D3F]">
                        12
                    </h2>
                    <p className = "text-[#64748B] font-normal text-[18px] mt-2">
                        Interactions This Month
                    </p>
                </div>

            </div>
        </div>

    )
}
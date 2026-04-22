"use client";

import Link from "next/link";

export default function FriendCard({ friend }) {

    const statusStyle = {
        "On-Track": "bg-[#244D3F] text-white",
        "Almost Due": "bg-[#EFAD44] text-white",
        "Overdue": "bg-[#EF4444] text-white",
    };

    return (
        <Link href={`/friend/${friend.id}`}>

            <div className = "bg-white p-6 rounded-md shadow-sm text-center transform transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl">

                <img src={friend.picture} className="w-16 h-16 rounded-full mx-auto object-cover"/>

                <h2 className ="text-center text-[20px] font-semibold mt-3 text-black">
                    {friend.name}
                </h2>

                <p className="text-center text-[#64748B] mt-2 text-xs">
                    {friend.days_since_contact}d ago
                </p>

                <div className="flex justify-center gap-1 mt-2 flex-wrap">
                    {friend.tags.map((tag, i) => (
                    <span key={i} className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-[#CBFADB] text-[#244D3F]">
                        {tag}
                    </span>
                    ))}
                </div>

                <div className="flex justify-center mt-3">

                    <span className={`text-[12px] px-3 py-1 rounded-full font-medium ${statusStyle[friend.status]}`}>
                        {friend.status}
                    </span>

                </div>

            </div>
        </Link>
    );
}
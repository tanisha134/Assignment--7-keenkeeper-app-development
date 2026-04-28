"use client"

import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import friends from "../app/data/friends.json"
import FriendCard from "../components/FriendCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className = "bg-[#F8FAFC] min-h-screen">
      <Banner />

      <div className="max-w-6xl mx-auto px-6 pb-10">

        <h2 className="text-[24px] font-semibold mb-4 text-black">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {loading ? (
            <div className="col-span-full flex justify-center items-start p-2">
              <span className="loading loading-spinner loading-lg text-[#244D3F]">
              </span>
            </div>    
          ) : (  
       

          friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend}/>
          ))
          )}

        </div>

      </div>
    </div>

  );
};
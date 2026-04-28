"use client";

import { useEffect,useState } from "react";
import Image from "next/image";
import call from "../../assets/img/call.png";
import text from "../../assets/img/text.png";
import video from "../../assets/img/video.png";

export default function TimelinePage(){

  const [data,setData] = useState([]);
  const[filter, SetFilter] = useState("All");

  const filteredData = 
  filter === "All" ? data : data.filter((item) => item.type === filter);

  useEffect(() => {
    const loadData = () => {
      const stored = JSON.parse(sessionStorage.getItem("timeline")) || [];
      setData(stored);
    };
    
    loadData();

    window.addEventListener("timeUpdated", loadData);
    const clearOnReload = () => {
      sessionStorage.removeItem("timeline");
    };

    window.addEventListener("beforeunload", clearOnReload);

    return () => {
      
      window.removeEventListener("timeUpdated", loadData);
      window.removeEventListener("beforeunload", clearOnReload);
    };
  }, []);

  const getIcon = (type) => {
    if(type === "Call")
      return <Image src={call} alt="call" width={20} height={20}/>

    if(type === "Text")
      return <Image src={text} alt="text" width={20} height={20}/>

    if(type === "Video")
      return <Image src={video} alt="video" width={20} height={20}/>
  };
  return(

    <div className="bg-[#F8FAFC]  p-6">
      <h1 className="text-5xl font-bold mb-4">
        Timeline
      </h1>

      {data.length > 0 && (
        <select onChange={(e) => SetFilter(e.target.value)} className="select mb-4">

          <option value="All">Filter Timeline</option>

          <option value="Call">Call</option>

          <option value="Text">Text</option>

          <option value="Video">Video</option>
        </select>
      )}

      {data.length === 0 && (
        <div className="flex justify-center mt-10">
          <p className="text-gray-600 text-3xl font-semibold">
            No interactions yet. Start connecting
          </p>
        </div>
      )}

      <div className="space-y-3">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow flex gap-3 items-center">
            <div className="p-3 rounded-xl flex items-center justify-center">
              {getIcon(item.type)}
            </div>

            <div>
              <p className="font-medium text-[20px]">{item.title}</p>
              <p className="text-[#64748B] font-medium text-[16px]">{new Date(item.date).toDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
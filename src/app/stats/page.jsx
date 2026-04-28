"use client"

import { useEffect, useState } from "react";
import { PieChart, Cell, Tooltip, Legend, Pie, } from "recharts";
export default function StatsPage(){
  const[data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const stored = JSON.parse(sessionStorage.getItem("timeline")) || [];
    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    stored.forEach((item) => {
      if(counts[item.type] !== undefined) {
        counts[item.type]++;
      }
    });
    const chartData = [
      { name: "Call", value:counts.Call },
      { name: "Text", value:counts.Text },
      { name: "Video", value:counts.Video },
    ];
    setData(chartData);
    setLoading(false)
  }, []);

  const COLORS = ["#244D3F", "#7C3AED", "#22C55E"];
  return (
    <div className="bg-[#F8FAFC] p-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Friendship Analytics
        </h1>

        <div className="bg-white p-12 rounded-xl shadow max-w-5xl mx-auto">

          <p className="text-[#244D3F] text-[20px] font-medium mb-4 text-left">
            By Interaction Type
            </p>
            {loading ? (
              <p className="text-gray-400 text-lg text-center">
                Loading...
              </p>
            ) : data.every((item) => item.value === 0) ? (
              <p className="text-gray-700 text-5xl text-center font-semibold">
                No Data Found Yet
              </p> 
            ) : (

              <div className="flex justify-center items-center">
                <PieChart width={350} height={350}>
                  <Pie 
                  data = {data} 
                  cx = "50%" 
                  cy = "50%" 
                  innerRadius = {80} 
                  outerRadius = {120}
                  paddingAngle = {6}
                  cornerRadius = {10}
                  dataKey = "value"
                  >
                    {data.map((entry, index) => (
                      <Cell key = {index} fill = {COLORS[index]}/>
                    ))}
                  </Pie>
                  <Tooltip/>
                  <Legend iconType="circle"/>
                </PieChart>
              </div>
            )}
        </div>
    </div>
  );
}
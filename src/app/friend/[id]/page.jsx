"use client";

import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import {FiClock, FiArchive, FiTrash2, FiPhone, FiMessageSquare, FiVideo,} from "react-icons/fi";
import friends from "../../data/friends.json";
import Link from "next/link";

export default function FriendDetails() {
    const params = useParams();
    const id = Number(params.id);
    const friend = friends.find((f) => f.id === id);
    const addTimeline = (type) => {

    const existing = JSON.parse(sessionStorage.getItem("timeline")) || [];

    const newEntry = {
        id:Date.now(),
        type,
        title: `${type} with ${friend?.name}`,
        date: new Date().toISOString(),
    };
    sessionStorage.setItem(
        "timeline",
        JSON.stringify([newEntry, ...existing])
    );

    window.dispatchEvent(new Event("timelineUpdate"));
    toast.success(`${type} with ${friend?.name} added!`);
    };

    if (!friend) {
        return(
            <div className="text-center flex flex-col items-center justify-center min-h-screen bg-pink-100 gap-4">
                <h1 className="font-bold text-5xl text-[#244D3F]">
                    The friend you are looking for is not found
                </h1>
                <Link href="/">
                <button className="btn btn-primary mt-5 font-semibold">Go Home</button>
                </Link>
            </div>
        );
    }

    const statusColor = {
        "On-Track": "bg-[#244D3F]",
        "Almost Due": "bg-[#EFAD44]",
        "Overdue": "bg-[#EF4444]",
    };
    return (
        <div className="bg-[#F8FAFC] min-h-full p-8">
            <div className="max-w-6xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                    {/* Left side */}
                    <div className="space-y-4">
                        {/* Card */}

                        <div className="bg-white p-6 rounded-xl shadow text-center space-y-4">

                            <img src={friend.picture} className="w-24 h-24 rounded-full mx-auto"/>

                            <h2 className="font-semibold text-[20px]">
                                {friend.name}
                            </h2>

                            <span className={`text-white px-3 py-1 text-xs rounded-full font-medium ${statusColor[friend.status]}`}>
                                {friend.status}
                            </span>

                            <div className="mt-2 flex justify-center flex-wrap gap-2">
                                {friend.tags.map((tag, i) => (
                                    <span key={i} className="bg-[#CBFADB] text-[#244D3F] text-xs font-medium px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-[#64748B] text-[16px] font-medium italic">
                                "{friend.bio}"
                            </p>

                            <p className="text-[#64748B] text-[14px] font-normal">
                                Preferred: {friend.email}
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-3">
                                <button className="btn w-full bg-white p-3 rounded shadow flex justify-center gap-2 items-center active:scale-95 transition">
                                    <FiClock /> Snooze 2 weeks
                                </button>

                                <button className="btn w-full bg-white p-3 rounded shadow flex justify-center gap-2 items-center active:scale-95 transition">
                                    <FiArchive /> Archive
                                </button>

                                <button className="btn w-full bg-white p-3 rounded shadow flex justify-center gap-2 items-center active:scale-95 transition text-[#EF4444]">
                                    <FiTrash2 className="text-[#EF4444]" /> Delete
                                </button>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="space-y-6">
                        {/* Stats */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow text-center">
                                <h2 className="text-[#244D3F] text-[30px] font-semibold">
                                    {friend.days_since_contact}
                                </h2>

                                <p className="text-[#64748B] text-[18px]"> Days Since Contact</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl shadow text-center">
                                <h2 className="text-[#244D3F] text-[30px] font-semibold">
                                    {friend.goal}
                                </h2>

                                <p className="text-[#64748B] text-[18px]">
                                    Goal ({friend.goal} days)
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow text-center">
                                <h2 className="text-[#244D3F] text-[30px] font-semibold">
                                    {friend.next_due_date}
                                </h2>

                                <p className="text-[#64748B] text-[18px]">
                                    Next Due
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow">
                            <div className="justify-between flex items-center">
                                <p className="text-[#244D3F] text-[20px] font-semibold">
                                    Relationship Goal
                                </p>
                                <button className="btn btn-sm">Edit
                                </button>
                            </div>

                            <p className="text-[16px] text-[#64748B] mt-1">
                                Connect every{" "}
                                <span className="font-bold text-black">
                                    {friend.goal} days
                                </span>
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow">
                            <p className="text-[#244D3F] text-[18px] font-semibold mb-3">
                                Quick Check-In
                            </p>

                            <div className="grid grid-cols-3 gap-4">
                                <button onClick={() => addTimeline("Call")} className="bg-[#F8FAFC] rounded-lg flex flex-col items-center p-4 gap-1 hover:bg-gray-100 active:scale-95 transition duration-300 cursor-pointer">
                                    <FiPhone />Call
                                </button>

                                <button onClick={() => addTimeline("Text")} className="bg-[#F8FAFC] rounded-lg flex flex-col items-center p-4 gap-1 hover:bg-gray-100 active:scale-95 transition duration-300 cursor-pointer">
                                    <FiMessageSquare/>
                                    Text
                                </button>

                                <button onClick={() => addTimeline("Video")} className="bg-[#F8FAFC] rounded-lg flex flex-col items-center p-4 gap-1 hover:bg-gray-100 active:scale-95 transition duration-300 cursor-pointer">
                                    <FiVideo />Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
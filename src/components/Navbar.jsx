"use client";

import logo from "../assets/img/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiClock, FiBarChart2 } from "react-icons/fi";

export default function Navbar() {
    const pathname = usePathname();

    const linkClass = (path) => `flex items-center gap-2 px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition ${pathname === path ? "bg-[#244D3F] text-white" : "text-gray-500 hover:bg-gray-100"
    }`;

    return (
        <div className="w-full bg-white px-2 py-4 flex justify-between items-center">

            <div className="flex items-center gap-2 ">
                <img src={logo.src} alt="logo" className="h-10 w-auto object-contain"/>
            </div>

            <div className="flex gap-1">
                <Link href ="/" className={linkClass("/")}>
                <FiHome size={16} />
                Home
                </Link>

                <Link href ="/timeline" className={linkClass("/timeline")}>
                <FiClock size={16} />
                Timeline
                </Link>

                <Link href ="/stats" className={linkClass("/stats")}>
                <FiBarChart2 size={16} />
                Stats
                </Link>

            </div>

        </div>
    )

    };

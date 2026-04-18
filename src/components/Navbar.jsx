"use client";

import logo from "../assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiClock, FiBarChart2 } from "react-icons/fi";

export default function Navbar() {
    const pathname = usePathname();

    const linkClass = (path) => `flex items-center ga-2 px-4 py-2 rounded-lg text-sm font-medium transition ${pathname === path ? "bg-[#244D3F] text-white" : "text-gray-500 hover:bg-gray-100"
    }`;

    return (
        <div className="w-full border-b bg-white px-6 py-4 flex justify-between items-center">

            <div className="flex items-center gap-2">
                <Image src={logo} alt="logo" width={140} height={40}/>
            </div>

            <div className="flex gap-3">
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

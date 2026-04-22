import logo from "../assets/img/logo-xl.png";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twitter.png";
import Image from "next/image";

export default function Footer() {
    return(
        <footer className = "bg-[#244D3F] text-white">

            <div className = "max-w-5xl mx-auto px-6 py-12 text-center">

                <Image src={logo} alt="logo" className="mx-auto w-90"/>

                <p className = "text-[16px] font-normal mt-5">
                   Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <p className = "mt-6 text-[20px] font-medium">
                    Social Links
                </p>

                <div className = "flex justify-center gap-4 mt-4">

                    <Image src = {instagram} alt="Instagram" className="w-10 h-10 cursor-pointer hover:scale-110 transition"/>

                    <Image src = {facebook} alt="Facebook" className="w-10 h-10 cursor-pointer hover:scale-110 transition"/>

                    <Image src = {twitter} alt="Twitter" className="w-10 h-10 cursor-pointer hover:scale-110 transition"/>

                </div>
            </div>
                <hr className="w-[90%] mx-auto border-t border-white/30" />

            <div className = "max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-[#FAFAFA] text-[16px] gap-3">

                <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

                <div className="flex gap-6">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p> 
                    <p>Cookies</p>
                </div>

            </div>
        </footer>
    )
}
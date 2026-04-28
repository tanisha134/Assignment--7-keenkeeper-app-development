import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        {children}
        <ToastContainer position="top-center"/>
        <Footer />
      </body>
    </html>
  );
}
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const iconClass =
  "p-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-300 text-white";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">✦ DigiCommerce</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Your premium destination for quality products and exceptional shopping experience.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className={iconClass}>
                <FacebookIcon fontSize="small" />
              </a>

              <a href="#" className={iconClass}>
                <TwitterIcon fontSize="small" />
              </a>

              <a href="#" className={iconClass}>
                <InstagramIcon fontSize="small" />
              </a>

              <a href="#" className={iconClass}>
                <LinkedInIcon fontSize="small" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Home</Link>
              <Link href="/shop" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Shop</Link>
              <Link href="/about" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">About Us</Link>
              <Link href="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Contact</Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white">Customer Service</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Help Center</a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Shipping Info</a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Returns</a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">FAQ</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-400" />
                <a href="mailto:info@digicommerce.com" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">info@digicommerce.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">+1 (234) 567-890</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">123 Commerce Street, NY 10001, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright © {currentYear} <span className="font-semibold text-indigo-400">DigiCommerce</span>. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Facebook, Twitter, Instagram, Github, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const iconStyle = "flex items-center justify-center rounded-full border border-1 border-yellow-400 w-10 h-10 text-yellow-400 hover:border-cyan-500 hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300";
  
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-2xl mb-6">
            <span className="mr-2">Start a project</span>
            <span className="inline-block animate-bounce">🚀</span>
          </h2>
          
          <p className="text-gray-400 mb-8">
            Interested in making waves together? Let's connect and create something amazing.
          </p>
          
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-10"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://www.facebook.com/raptomiofw"
              className={iconStyle}
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com/heyrapto"
              className={iconStyle}
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/caleb.kale"
              className={iconStyle}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.github.com/heycalebszn"
              className={iconStyle}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://wa.me/+2347064019926" 
              className={iconStyle}
              aria-label="WhatsApp"
            >
              <Phone size={18} />
            </a>
            <a
              href="mailto:raptomiofw@gmail.com"
              className={iconStyle}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-sm">
            <p>&copy; {year} · Designed & Built with ❤️</p>
            <p className="mt-1 text-gray-500">Inspired by Treasure</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
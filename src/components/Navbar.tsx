import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Menu, Play } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  onPricingClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPricingClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 px-6 py-4 flex items-center justify-between ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center gap-8">
        <div className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
          <div className="bg-purple-600 p-1 rounded-sm">
            <Play className="fill-white w-4 h-4" />
          </div>
          CINEMA<span className="text-purple-500">PRO</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Movies</a>
          <a href="#" className="hover:text-white transition-colors">TV Shows</a>
          <a href="#" className="hover:text-white transition-colors">New & Popular</a>
          <a href="#" className="hover:text-white transition-colors">My List</a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center bg-white/10 rounded-full px-3 py-1 border border-white/10">
          <Search className="w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:outline-none text-sm px-2 text-white w-32 lg:w-48"
          />
        </div>
        
        <button onClick={onPricingClick} className="hidden sm:block text-xs font-bold uppercase tracking-wider text-purple-400 hover:text-purple-300 transition-colors">
          Upgrade
        </button>

        <Bell className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer">
          <User className="w-4 h-4 text-white" />
        </div>
        <Menu className="md:hidden w-6 h-6 text-white" />
      </div>
    </nav>
  );
};
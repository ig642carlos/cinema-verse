import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Play } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
        <div className="col-span-2 lg:col-span-1">
          <div className="text-xl font-black tracking-tighter text-white flex items-center gap-2 mb-6">
            <div className="bg-purple-600 p-1 rounded-sm">
              <Play className="fill-white w-4 h-4" />
            </div>
            CINEMA<span className="text-purple-500">PRO</span>
          </div>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            The world's premier streaming platform for both free and premium content. Discover cinematic masterpieces from across the globe.
          </p>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
            <Youtube className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Platform</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-white cursor-pointer">Movies</li>
            <li className="hover:text-white cursor-pointer">TV Shows</li>
            <li className="hover:text-white cursor-pointer">Live TV</li>
            <li className="hover:text-white cursor-pointer">Rentals</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Account</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Devices</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Cookie Settings</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <h4 className="text-white font-bold mb-6">Download Our App</h4>
          <div className="space-y-3">
            <div className="bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-lg p-3 flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">A</div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase leading-none">Download on the</div>
                <div className="text-sm font-bold text-white">App Store</div>
              </div>
            </div>
            <div className="bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-lg p-3 flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">G</div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase leading-none">Get it on</div>
                <div className="text-sm font-bold text-white">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>&copy; 2024 CinemaPro Interactive. All rights reserved.</p>
        <p>Made with &hearts; for movie lovers.</p>
      </div>
    </footer>
  );
};
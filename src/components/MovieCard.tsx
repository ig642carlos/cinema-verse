import React from 'react';
import { Movie } from '../types/movie';
import { Play, Plus, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative flex-shrink-0 w-[160px] md:w-[220px] aspect-[2/3] group cursor-pointer"
      onClick={() => onClick(movie)}
    >
      <img 
        src={movie.posterUrl} 
        alt={movie.title} 
        className="w-full h-full object-cover rounded-md shadow-lg"
      />
      
      {/* Badges */}
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {movie.isPremium ? (
          <Badge className="bg-purple-600 text-white border-none text-[10px] md:text-xs font-bold px-2 py-0.5">
            PREMIUM
          </Badge>
        ) : (
          <Badge className="bg-cyan-600 text-white border-none text-[10px] md:text-xs font-bold px-2 py-0.5">
            FREE
          </Badge>
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md p-4 flex flex-col justify-end">
        <div className="flex gap-2 mb-3">
          <div className="bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors">
            <Play className="w-4 h-4 fill-current" />
          </div>
          <div className="bg-gray-800/80 rounded-full p-2 text-white hover:bg-gray-700 transition-colors">
            <Plus className="w-4 h-4" />
          </div>
        </div>
        
        <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-1">{movie.title}</h3>
        
        <div className="flex items-center gap-2 text-[10px] md:text-xs">
          <div className="flex items-center text-yellow-500">
            <Star className="w-3 h-3 fill-current mr-0.5" />
            {movie.rating}
          </div>
          <span className="text-gray-400">{movie.year}</span>
          <span className="text-gray-400">{movie.duration}</span>
        </div>
      </div>
    </motion.div>
  );
};
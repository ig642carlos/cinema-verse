import React from 'react';
import { Play, Info, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Movie } from '../types/movie';
import { Badge } from './ui/badge';

interface HeroProps {
  movie: Movie;
  onInfoClick: (movie: Movie) => void;
  onPlayClick: (movie: Movie) => void;
}

export const Hero: React.FC<HeroProps> = ({ movie, onInfoClick, onPlayClick }) => {
  return (
    <div className="relative w-full h-[85vh] flex items-center px-6 md:px-16 overflow-hidden">
      {/* Background Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mt-20">
        <div className="flex items-center gap-3 mb-4">
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 font-bold px-3 py-1">
            FEATURED
          </Badge>
          <div className="flex items-center gap-1 text-yellow-500 font-bold">
            <Star className="w-4 h-4 fill-current" />
            <span>{movie.rating}</span>
          </div>
          <span className="text-gray-400 font-medium">{movie.year}</span>
          <span className="text-gray-400 font-medium">{movie.duration}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight uppercase">
          {movie.title}
        </h1>
        
        <p className="text-lg text-gray-300 mb-8 line-clamp-3 md:line-clamp-none max-w-xl">
          {movie.description}
        </p>

        <div className="flex flex-wrap gap-4">
          <Button 
            onClick={() => onPlayClick(movie)}
            className="bg-white text-black hover:bg-gray-200 h-12 px-8 font-bold text-lg rounded-md"
          >
            <Play className="w-5 h-5 fill-current mr-2" />
            Watch Now
          </Button>
          <Button 
            onClick={() => onInfoClick(movie)}
            variant="secondary"
            className="bg-gray-500/30 text-white hover:bg-gray-500/50 backdrop-blur-md h-12 px-8 font-bold text-lg rounded-md border-none"
          >
            <Info className="w-5 h-5 mr-2" />
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};
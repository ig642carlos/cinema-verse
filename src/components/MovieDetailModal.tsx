import React from 'react';
import { Movie } from '../types/movie';
import { Dialog, DialogContent } from './ui/dialog';
import { Play, Plus, ThumbsUp, X, Clock, Calendar, Star, Crown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface MovieDetailModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
  userSubscription: 'Free' | 'Premium';
}

export const MovieDetailModal: React.FC<MovieDetailModalProps> = ({ 
  movie, 
  isOpen, 
  onClose, 
  onSubscribe,
  userSubscription 
}) => {
  if (!movie) return null;

  const canWatch = !movie.isPremium || userSubscription === 'Premium';

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-[#181818] border-none text-white shadow-2xl">
        <div className="relative aspect-video w-full">
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-8 left-8 right-8">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">{movie.title}</h2>
            <div className="flex items-center gap-4">
              {canWatch ? (
                <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8 h-12 rounded-md">
                  <Play className="w-5 h-5 fill-current mr-2" />
                  Play
                </Button>
              ) : (
                <Button 
                  onClick={onSubscribe}
                  className="bg-purple-600 text-white hover:bg-purple-700 font-bold px-8 h-12 rounded-md"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Unlock with Premium
                </Button>
              )}
              <div className="bg-gray-800/80 rounded-full p-3 text-white hover:bg-gray-700 cursor-pointer">
                <Plus className="w-5 h-5" />
              </div>
              <div className="bg-gray-800/80 rounded-full p-3 text-white hover:bg-gray-700 cursor-pointer">
                <ThumbsUp className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4 text-sm font-semibold">
              <span className="text-green-500">98% Match</span>
              <span className="text-gray-400 flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {movie.year}
              </span>
              <span className="text-gray-400 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {movie.duration}
              </span>
              <Badge className={movie.isPremium ? "bg-purple-600/20 text-purple-400 border-purple-500/30" : "bg-cyan-600/20 text-cyan-400 border-cyan-500/30"}>
                {movie.isPremium ? 'PREMIUM' : 'FREE'}
              </Badge>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {movie.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <div>
              <span className="text-gray-500 block mb-1">Director:</span>
              <span className="text-gray-200">{movie.director}</span>
            </div>
            <div>
              <span className="text-gray-500 block mb-1">Cast:</span>
              <span className="text-gray-200">{movie.cast.join(', ')}</span>
            </div>
            <div>
              <span className="text-gray-500 block mb-1">Genres:</span>
              <span className="text-gray-200">{movie.genre}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
               <Star className="w-4 h-4 text-yellow-500 fill-current" />
               <span className="text-xl font-bold">{movie.rating}</span>
               <span className="text-gray-500">/ 5.0</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
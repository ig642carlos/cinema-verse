import { useState } from 'react';
import { MOVIES } from './data/movies';
import { Movie } from './types/movie';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovieRow } from './components/MovieRow';
import { MovieDetailModal } from './components/MovieDetailModal';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [userSubscription, setUserSubscription] = useState<'Free' | 'Premium'>('Free');

  const heroMovie = MOVIES[0];
  const freeMovies = MOVIES.filter(m => !m.isPremium);
  const premiumMovies = MOVIES.filter(m => m.isPremium);
  const trendingMovies = [...MOVIES].sort((a, b) => b.rating - a.rating);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsDetailOpen(true);
  };

  const handlePricingOpen = () => {
    setIsPricingOpen(true);
  };

  const handleSubscribe = (plan: string) => {
    if (plan === 'Free') return;
    
    // Simulate payment
    toast.loading('Processing payment...', { duration: 1500 });
    
    setTimeout(() => {
      setUserSubscription('Premium');
      setIsPricingOpen(false);
      toast.success(`Welcome to ${plan}! Premium features unlocked.`);
    }, 2000);
  };

  const handlePlayClick = (movie: Movie) => {
    if (movie.isPremium && userSubscription !== 'Premium') {
      setIsPricingOpen(true);
      toast.info('Premium subscription required to watch this content.');
    } else {
      toast.success(`Playing "${movie.title}"...`, {
        description: 'Quality: Ultra HD 4K',
        icon: '🎬'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar onPricingClick={handlePricingOpen} />
      
      <main className="pb-20">
        <Hero 
          movie={heroMovie} 
          onInfoClick={handleMovieClick} 
          onPlayClick={handlePlayClick}
        />

        <div className="relative -mt-32 md:-mt-48 z-20 space-y-4">
          <MovieRow 
            title="Trending Now" 
            movies={trendingMovies} 
            onMovieClick={handleMovieClick} 
          />
          <MovieRow 
            title="Premium Originals" 
            movies={premiumMovies} 
            onMovieClick={handleMovieClick} 
          />
          <MovieRow 
            title="Free to Watch" 
            movies={freeMovies} 
            onMovieClick={handleMovieClick} 
          />
          <MovieRow 
            title="Action Packed" 
            movies={MOVIES.filter(m => m.genre === 'Action')} 
            onMovieClick={handleMovieClick} 
          />
           <MovieRow 
            title="Sci-Fi Adventures" 
            movies={MOVIES.filter(m => m.genre === 'Sci-Fi')} 
            onMovieClick={handleMovieClick} 
          />
        </div>
      </main>

      <Footer />

      <MovieDetailModal 
        movie={selectedMovie}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onSubscribe={handlePricingOpen}
        userSubscription={userSubscription}
      />

      <Pricing 
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onSubscribe={handleSubscribe}
      />

      <Toaster position="top-center" theme="dark" richColors />
    </div>
  );
}

export default App;
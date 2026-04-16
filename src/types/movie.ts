export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string;
  posterUrl: string;
  isPremium: boolean;
  rating: number;
  year: number;
  duration: string;
  director: string;
  cast: string[];
}

export type SubscriptionPlan = 'Free' | 'Basic' | 'Premium';
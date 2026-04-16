# MovieStream - Free & Premium Streaming Platform

Build a modern, responsive movie streaming platform where users can browse free content and subscribe to access premium movies.

## 1. Visual Design
- **Theme**: Dark Mode (OLED) with deep charcoal backgrounds (#000000 to #121212).
- **Primary Color**: Electric Purple (#7C3AED) for Premium branding.
- **Secondary Color**: Vibrant Cyan (#0891B2) for Free content highlights.
- **Typography**: Inter (Sans-serif) for high readability.
- **Style**: Glassmorphism for overlays and modern flat design for cards.

## 2. Components
### Layout & Navigation
- `Navbar`: Sticky transparent header that blurs on scroll. Includes logo, search bar, navigation links, and profile.
- `Footer`: Clean links and social media icons.

### Landing Page
- `Hero`: Full-width featured movie with auto-playing background (simulated), title, description, and "Watch Now" / "More Info" buttons.
- `MovieRow`: Horizontal scrolling list of movies categorized by genre (Trending, Free Movies, Premium Originals, Action, etc.).
- `MovieCard`: Poster image with a subtle hover effect (zoom + overlay with metadata). Badges for "FREE" and "PREMIUM".

### Interaction
- `MovieDetailModal`: Detailed view of a movie when clicked. Shows trailer placeholder, description, cast, and call-to-action (Play for Free, or Subscribe for Premium).
- `PricingSection`: Simple toggle or grid showing "Free" vs "Premium" benefits.
- `AuthModal`: Simple login/signup mock for subscription flow.

## 3. Data Mocking
- Array of movie objects with: `id`, `title`, `description`, `genre`, `posterUrl`, `isPremium`, `rating`, `year`.

## 4. Implementation Steps
1. Create project structure and constants.
2. Generate high-quality movie posters using `generate_images_bulk`.
3. Implement `Navbar` and `Footer`.
4. Build `MovieCard` and `MovieRow` components.
5. Create the `Hero` section.
6. Implement `MovieDetailModal` with state management for selected movie.
7. Add `Pricing` and "Subscription" simulation.
8. Final polish, responsiveness, and animations (framer-motion).

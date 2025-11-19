
import { Camera, Users, Calendar, Video } from 'lucide-react';

// IMPORTANT: In a real deployment, replace these URL strings with the actual paths to the user's images.
// Since we are in a code-gen environment, we use placeholders or generic instructions.
// User should place their 'owner.jpg' and 'logo.png' in a public folder or import them.

export const OWNER_IMAGE_URL = "Images/owner.jpg";
// Points to the uploaded owner image (Relative to index.html)

export const LOGO_IMAGE_URL = "https://placehold.co/400x150/000000/FF0000?text=NIDHI+STUDIO"; // Placeholder for Logo
// Note: User should replace the above with the actual Nidhi Studio logo if available.

export const CONTACT_EMAIL = "nikunj7943@gmail.com";

// FOR LOCAL DEVELOPMENT:
// If you are running this locally and the chatbot isn't working, paste your Gemini API Key here.
// You can get a key from https://aistudio.google.com/app/apikey
export const GOOGLE_API_KEY = ""; 

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  // AI Planner removed as per request
  { name: 'Contact', href: '#contact' },
];

export const CATEGORIES = ['All', 'Wedding', 'Portrait', 'Event', 'Nature'];

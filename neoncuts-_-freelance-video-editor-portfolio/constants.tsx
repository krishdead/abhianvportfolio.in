
import React from 'react';
import { 
  Video, 
  Film, 
  Scissors, 
  Layers, 
  Monitor, 
  Zap,
  Instagram,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';
import { Project, Skill } from './types';

/**
 * CUSTOMIZE EVERYTHING HERE
 * This is the only file you need to edit to change your content.
 */

export const USER_DATA = {
  name: "NEON",
  lastName: "CUTS",
  fullName: "Neon Cuts",
  role: "Freelance Video Editor",
  experienceLevel: "Fresh Graduate / Freelancer",
  bio: "I don't just cut clips; I find the heartbeat of your story. I specialize in high-energy edits and atmospheric color grading for brands and creators who want to stand out.",
  email: "hello@neoncuts.com",
  location: "Digital Nomad / Remote",
  availability: "Available for Projects"
};

export const THEME = {
  primary: "#a855f7", // Purple
  secondary: "#ec4899", // Pink
  accent: "#3b82f6", // Blue
  background: "#050505",
  glassBackground: "rgba(255, 255, 255, 0.03)"
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cyberpunk Aesthetic Reel',
    category: 'Motion Graphics',
    thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
    videoUrl: '#'
  },
  {
    id: '2',
    title: 'Brand Story: Echo Tech',
    category: 'Commercial',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    videoUrl: '#'
  },
  {
    id: '3',
    title: 'Urban Street Odyssey',
    category: 'Cinematic Vlog',
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
    videoUrl: '#'
  },
  {
    id: '4',
    title: 'The Silent Forest',
    category: 'Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
    videoUrl: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Adobe Premiere Pro', icon: 'Scissors', level: 95 },
  { name: 'After Effects', icon: 'Layers', level: 80 },
  { name: 'DaVinci Resolve', icon: 'Film', level: 85 },
  { name: 'Color Grading', icon: 'Monitor', level: 90 },
  { name: 'Sound Design', icon: 'Zap', level: 75 },
  { name: 'Motion Graphics', icon: 'Video', level: 70 }
];

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'AI Concept', href: '#ai' },
  { label: 'Contact', href: '#contact' }
];

export const SOCIALS = [
  { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com' },
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com' }
];

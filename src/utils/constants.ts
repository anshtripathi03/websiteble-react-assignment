import type { NavItem, Feature, Testimonial } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQs', href: '#faqs' },
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    icon: 'collaborative',
    title: 'Collaborative & partnership',
    description: 'We believe in the power of working together to achieve greatness.',
    color: 'yellow',
  },
  {
    id: '2',
    icon: 'weight',
    title: 'We talk about our weight',
    description: 'Transparency and honesty are at the core of our communication.',
    color: 'pink',
  },
  {
    id: '3',
    icon: 'digital',
    title: 'Piloting digital competence',
    description: 'Empowering your team with the latest digital skills and tools.',
    color: 'mint',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Wood',
    role: 'CEO',
    company: 'InnovateX',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    content: 'The team at Elementum truly understands the nuance of modern digital transformation. Their approach is both visionary and practical.',
    rating: 5,
  },
];

export const TEAM_AVATARS = [
  'https://i.pravatar.cc/100?u=1',
  'https://i.pravatar.cc/100?u=2',
  'https://i.pravatar.cc/100?u=3',
  'https://i.pravatar.cc/100?u=4',
];

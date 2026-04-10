export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: string;
}

export interface LoadingState {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

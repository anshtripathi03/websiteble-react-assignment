import { motion } from 'framer-motion';
import type { ButtonProps } from '../../types';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variantClasses: Record<string, string> = {
    primary:
      'bg-primary text-white hover:bg-black/90 hover:shadow-lg shadow-black/10 hover:-translate-y-0.5',
    secondary:
      'bg-[#D1FFD7] text-primary hover:bg-[#BFFFD0] shadow-sm', // Mint highlight variant
    ghost: 
      'bg-transparent text-primary hover:bg-black/5',
    outline:
      'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5',
  };

  const sizeClasses: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {content}
    </motion.button>
  );
}

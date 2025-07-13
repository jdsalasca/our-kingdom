import { motion } from 'framer-motion';

// Cloud Sprite Component
export const Cloud = ({
  className = '',
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`cloud-sprite ${className}`}
    animate={{
      x: [0, 50, 0],
      opacity: [0.7, 1, 0.7],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
);

// Character Sprite Component
export const Character = ({
  type = 'player1',
  className = '',
  direction = 'right',
}: {
  type?: 'player1' | 'player2' | 'npc';
  className?: string;
  direction?: 'left' | 'right';
}) => (
  <motion.div
    className={`character-sprite character-${type} ${className}`}
    style={{
      transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  />
);

// Heart Sprite Component
export const Heart = ({
  className = '',
  size = 'medium',
}: {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}) => (
  <motion.div
    className={`heart-sprite heart-${size} ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// Star Sprite Component
export const Star = ({
  className = '',
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`star-sprite ${className}`}
    animate={{
      rotate: [0, 360],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
);

// Tree Sprite Component
export const Tree = ({
  className = '',
  type = 'normal',
}: {
  className?: string;
  type?: 'normal' | 'fruit' | 'magic';
}) => <div className={`tree-sprite tree-${type} ${className}`} />;

// Flower Sprite Component
export const Flower = ({
  className = '',
  color = 'pink',
}: {
  className?: string;
  color?: 'pink' | 'yellow' | 'purple' | 'red';
}) => (
  <motion.div
    className={`flower-sprite flower-${color} ${className}`}
    animate={{
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// Castle Sprite Component
export const Castle = ({ className = '' }: { className?: string }) => (
  <div className={`castle-sprite ${className}`} />
);

// Floating Elements Container
export const FloatingElements = () => (
  <div className='fixed inset-0 pointer-events-none overflow-hidden'>
    {/* Clouds */}
    <Cloud className='absolute top-10 left-10' delay={0} />
    <Cloud className='absolute top-20 right-20' delay={2} />
    <Cloud className='absolute top-40 left-1/4' delay={4} />

    {/* Stars */}
    <Star className='absolute top-20 left-1/3' delay={1} />
    <Star className='absolute top-60 right-1/4' delay={3} />
    <Star className='absolute bottom-40 left-1/2' delay={5} />

    {/* Hearts */}
    <Heart className='absolute top-1/4 right-10' size='small' />
    <Heart className='absolute bottom-1/4 left-10' size='medium' />
    <Heart className='absolute top-1/2 left-1/4' size='large' />
  </div>
);

export default {
  Cloud,
  Character,
  Heart,
  Star,
  Tree,
  Flower,
  Castle,
  FloatingElements,
};

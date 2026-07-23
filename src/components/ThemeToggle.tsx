import { Sun, Moon, Star } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={cn(
        'theme-toggle relative inline-flex h-10 w-10 items-center justify-center rounded-full',
        'transition-colors duration-500 overflow-hidden',
        'border border-narrator-purple/30 hover:border-narrator-purple',
        isDark ? 'bg-narrator-darkGray' : 'bg-narrator-cream'
      )}
    >
      {/* Ripple burst on click */}
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 rounded-full bg-narrator-purple/30',
          'scale-0 opacity-0 transition-all duration-700 ease-out',
          'active:opacity-100'
        )}
      />

      {/* Twinkling star, only shown in dark mode */}
      <Star
        aria-hidden
        size={8}
        fill="currentColor"
        className={cn(
          'absolute text-narrator-purple transition-all duration-700',
          'top-1.5 right-1.5',
          isDark
            ? 'opacity-100 scale-100 rotate-0 animate-pulse'
            : 'opacity-0 scale-0 -rotate-90'
        )}
      />
      <Star
        aria-hidden
        size={6}
        fill="currentColor"
        className={cn(
          'absolute text-narrator-purple transition-all duration-700 delay-100',
          'bottom-2 left-2',
          isDark
            ? 'opacity-80 scale-100 rotate-0 animate-pulse'
            : 'opacity-0 scale-0 rotate-90'
        )}
      />

      {/* Sun */}
      <Sun
        aria-hidden
        size={18}
        className={cn(
          'absolute text-narrator-purple transition-all duration-500 ease-out',
          isDark
            ? 'rotate-180 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        )}
      />

      {/* Moon */}
      <Moon
        aria-hidden
        size={18}
        className={cn(
          'absolute text-narrator-purple transition-all duration-500 ease-out',
          isDark
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-180 scale-0 opacity-0'
        )}
      />
    </button>
  );
};

export default ThemeToggle;

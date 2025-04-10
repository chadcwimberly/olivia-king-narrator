
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Books', href: '#books' },
    { name: 'Demos', href: '#demos' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Studio', href: '#studio' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <a href="#hero" className="font-playfair text-xl md:text-2xl font-bold text-narrator-darkGray">
          Olivia<span className="text-narrator-purple">King</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-narrator-darkGray hover:text-narrator-purple transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md pt-2 pb-4 px-6 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block py-2 text-narrator-darkGray hover:text-narrator-purple transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;

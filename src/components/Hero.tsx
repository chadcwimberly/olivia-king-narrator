
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import oliviakinglogo from '@/media/olivia-king-logo-vertical.png';

const Hero = () => {
  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-narrator-cream to-narrator-beige flex items-center justify-center px-6">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/bea9acfc-fc85-48d6-9f4c-dd26ac8d5b06.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-narrow text-center z-10">
          <img
            src={oliviakinglogo}
            alt="Olivia King Logo"
            className="hero-logo"
          />
        <h1 className="font-raleway font-thin text-4xl md:text-5xl lg:text-6xl mb-6 text-black">
          Bringing <span className="font-bold">Stories</span> to Life
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-narrator-darkGray/80">
          Professional audiobook narration with a voice that captivates, engages, and transports listeners into the heart of every story.
        </p>
        <Button 
          onClick={handleScrollDown}
          className="bg-narrator-purple hover:bg-narrator-purple/80 text-white group"
        >
          Discover My Work
          <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
        </Button>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={handleScrollDown}
          className="rounded-full border border-narrator-purple/20 bg-white"
          aria-label="Scroll down"
        >
          <ArrowDown className="text-narrator-purple" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;

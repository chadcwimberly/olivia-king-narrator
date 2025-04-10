
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      role: "Author of 'The Lost Key'",
      quote: "Olivia brought my characters to life in ways I never imagined possible. Her narration added depth and emotion that enhanced the entire story. Working with her was a pleasure, and I couldn't be happier with the final audiobook.",
    },
    {
      id: 2,
      name: "Jennifer Lee",
      role: "Publisher, Horizon Audio",
      quote: "Professional, punctual, and incredibly talented. Olivia consistently delivers high-quality narration that receives excellent reviews from listeners. She's our go-to narrator for fiction titles that require emotional range and engaging storytelling.",
    },
    {
      id: 3,
      name: "Robert Chen",
      role: "Author of 'Beyond the Veil'",
      quote: "The way Olivia captured the essence of my fantasy world was remarkable. Each character had a distinct voice that matched my vision perfectly. The audiobook has received countless compliments specifically about the narration.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section bg-narrator-beige/40">
      <div className="container-narrow">
        <h2 className="section-title">What People Say</h2>

        <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
          <Quote className="text-narrator-purple/20 absolute top-6 left-6" size={60} />
          
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={cn(
                  "transition-all duration-500 absolute w-full",
                  index === activeIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
                style={{ position: index === activeIndex ? 'relative' : 'absolute' }}
              >
                <div className="flex flex-col items-center text-center">
                  <p className="italic text-narrator-darkGray/80 mb-6 max-w-2xl">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <h4 className="font-playfair font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-narrator-lightGray">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="border-narrator-purple/30 text-narrator-purple hover:bg-narrator-purple/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    index === activeIndex 
                      ? "bg-narrator-purple" 
                      : "bg-narrator-purple/20 hover:bg-narrator-purple/40"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="border-narrator-purple/30 text-narrator-purple hover:bg-narrator-purple/10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

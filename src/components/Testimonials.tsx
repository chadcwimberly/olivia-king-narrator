
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "IonyWinter",
      quote: "Olivia King?! Phenomenal! Give her a Grammy! She has an impressive range and reads with the perfect amount of emotion. She’s not reading us this book, she's acting it out. I'm so happy she narrated this! She really went above and beyond.",
      role: ""
    },
    {
      id: 2,
      name: "Sarah C",
      quote: "Olivia King is incredible!! Omgosh She brings SO much emotion and life to an already amazing story. She is very talented and you can tell she loves what she does. Highly recommend anything by her! 💙💙",
      role: ""
    },
    {
      id: 3,
      name: "Stephanie L",
      quote: "I loved hearing the different characters (and accents!) come to life in this beautiful production!",
      role: ""
    },
    {
      id: 4,
      name: "A. Justus",
      quote: "From the beginning until the very end I could hardly stop listening.",
      role: ""
    },
    {
      id: 5,
      name: "Stone",
      quote: "Narrator is fantastic as always. in fact, I only stumbled upon this series looking for more book she's read!",
      role: ""
    },
    {
      id: 6,
      name: "Brooke F",
      quote: "Olivia is such a good narrator! This story is great, but she added to it with her narration!",
      role: ""
    },
    {
      id: 7,
      name: "Colleen K",
      quote: "[Olivia] is the best female narrator I have ever listened to on audible. Her voice range and accents are nothing short of superb.",
      role: ""
    },
    {
      id: 8,
      name: "",
      quote: "Olivia king was incredible and perfectly suited for the heroine voice! I did not want to stop, not even to sleep. Will be listening to more from this author and narrator! Loved!!!!!",
      role: ""
    },
    {
      id: 9,
      name: "Dupree F",
      quote: "Probably the best narration I've ever listen to.",
      role: ""
    },
    {
      id: 10,
      name: "Dee Z",
      quote: "Olivia King's narration is perfection.",
      role: ""
    }
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

        <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12 overflow-hidden">
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
                  <div>
                    <h4 className="font-playfair font-light text-lg">{testimonial.quote}</h4>
                  </div>
                  <p className="font-bold text-narrator-darkGray/80 mb-6 max-w-2xl">
                    "{testimonial.name}"
                  </p>
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

import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white animate-fade-in">
      <div className="container-narrow">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-narrator-cream rounded-lg shadow-lg p-12">
            <h3 className="font-playfair text-2xl font-bold mb-6 text-narrator-darkGray">
              Ready to bring your story to life?
            </h3>
            
            <p className="text-narrator-lightGray mb-8 text-lg leading-relaxed">
              I'd love to help you create an unforgettable audiobook experience.
            </p>
            
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
            >
              <a href="mailto:contact@oliviaking.com" className="inline-flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
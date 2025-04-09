
import { useState } from 'react';
import { Mail, Phone, MessageSquare, SendHorizontal, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message received!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-narrator-beige/40">
      <div className="container-narrow">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-narrator-purple p-8 text-white">
              <h3 className="font-playfair text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="mr-3" size={20} />
                  <div>
                    <p className="text-sm opacity-80">Email</p>
                    <a href="mailto:emma@voiceartistry.com" className="hover:underline">
                      emma@voiceartistry.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="mr-3" size={20} />
                  <div>
                    <p className="text-sm opacity-80">Phone</p>
                    <a href="tel:+15551234567" className="hover:underline">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MessageSquare className="mr-3" size={20} />
                  <div>
                    <p className="text-sm opacity-80">Response Time</p>
                    <p>Within 24-48 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="font-playfair text-xl mb-4">Ready to bring your story to life?</p>
                <p className="opacity-80 text-sm">
                  Contact me for rates, availability, or to request a custom demo tailored to your project.
                </p>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8">
              <h3 className="font-playfair text-xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm text-narrator-lightGray">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm text-narrator-lightGray">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm text-narrator-lightGray">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm text-narrator-lightGray">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-narrator-purple hover:bg-narrator-purple/80 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendHorizontal className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

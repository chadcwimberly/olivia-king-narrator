
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Books from '@/components/Books';
import AudioDemos from '@/components/AudioDemos';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  // Handle fade-in effect for sections
  useEffect(() => {
    const fadeInSections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    
    fadeInSections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      fadeInSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Books />
      <AudioDemos />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

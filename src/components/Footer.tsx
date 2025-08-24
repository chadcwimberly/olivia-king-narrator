
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import oliviakinglogo from '@/media/olivia-king-logo-horizontal.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-narrator-darkGray text-white py-10 px-6">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="font-playfair text-xl font-bold">
              <img
                src={oliviakinglogo}
                alt="Olivia King Logo"
                className="footer-logo"
              />
            </a>
            <p className="text-sm text-white/60 mt-2">Professional Audiobook Narration</p>
          </div>
          
          {/* <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-narrator-purple transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-narrator-purple transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-narrator-purple transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-narrator-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div> */}
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm text-white/60">
              © {currentYear} Olivia King. All rights reserved.
            </p>
            
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                Sitemap
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

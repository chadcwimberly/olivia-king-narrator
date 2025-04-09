
import { Headphones, Mic, Music, Volume2 } from 'lucide-react';

const Studio = () => {
  const equipment = [
    {
      icon: <Mic className="text-narrator-purple mb-3" size={28} />,
      title: "Neumann TLM 103",
      description: "Professional large-diaphragm condenser microphone for crystal-clear voice capture"
    },
    {
      icon: <Headphones className="text-narrator-purple mb-3" size={28} />,
      title: "Sound-treated Space",
      description: "Custom-built recording booth with professional acoustic treatment for clean audio"
    },
    {
      icon: <Music className="text-narrator-purple mb-3" size={28} />,
      title: "Pro Tools Suite",
      description: "Industry-standard editing software for optimal audio quality and processing"
    },
    {
      icon: <Volume2 className="text-narrator-purple mb-3" size={28} />,
      title: "UA Apollo Interface",
      description: "High-end audio interface providing superior audio conversion and preamps"
    }
  ];

  return (
    <section id="studio" className="section bg-white">
      <div className="container-wide">
        <h2 className="section-title">My Studio</h2>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <p className="text-narrator-darkGray/80 mb-6">
              I record in a professional home studio designed specifically for audiobook narration. With industry-standard equipment and meticulous attention to acoustic details, I deliver pristine audio that meets or exceeds publisher requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipment.map((item, index) => (
                <div 
                  key={index}
                  className="bg-narrator-cream rounded-lg p-5 shadow-sm"
                >
                  {item.icon}
                  <h3 className="font-playfair font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-narrator-lightGray">{item.description}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-narrator-darkGray/80">
              Each project undergoes thorough quality control to ensure consistent tone, pacing, and production standards. I can deliver final files in any format required by publishers and distributors.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&q=80" 
                  alt="Studio microphone setup" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1621678505823-0270cd6775d1?w=500&q=80" 
                  alt="Audio interface and equipment" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1580152111976-21eb248056df?w=500&q=80" 
                  alt="Recording booth" 
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=500&q=80" 
                  alt="Studio headphones" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;

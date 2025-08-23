
import { useState } from 'react';
import { Play, Pause, Volume2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

const AudioDemos = () => {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const demos = [
    { id: 1, title: "Narration Demo Reel", genre: "", duration: "1:38" }
  ];

  const handleDemoClick = (id: number) => {
    if (activeDemo === id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveDemo(id);
      setIsPlaying(true);
    }
  };

  return (
    <section id="demos" className="section bg-white">
      <div className="container-narrow">
        <h2 className="section-title">Audio Demos</h2>
        
        <p className="text-narrator-darkGray/80 mb-10 max-w-2xl">
          Listen to samples of my narration across different genres. Each demo showcases my versatility and ability to bring characters and stories to life.
        </p>
        
        <div className="space-y-6">
          {demos.map((demo) => (
            <div 
              key={demo.id}
              className={cn(
                "p-5 rounded-lg transition-all",
                activeDemo === demo.id 
                  ? "bg-narrator-purple/10 border border-narrator-purple" 
                  : "bg-narrator-cream hover:bg-narrator-beige cursor-pointer"
              )}
              onClick={() => handleDemoClick(demo.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className={cn(
                      "mr-4 h-10 w-10 rounded-full border-2",
                      activeDemo === demo.id && isPlaying
                        ? "border-narrator-purple text-narrator-purple"
                        : "border-narrator-darkGray/30 text-narrator-darkGray/70"
                    )}
                  >
                    {activeDemo === demo.id && isPlaying ? (
                      <Pause size={18} />
                    ) : (
                      <Play size={18} className="ml-0.5" />
                    )}
                  </Button>
                  
                  <div>
                    <h3 className="font-playfair font-bold">{demo.title}</h3>
                    <div className="flex items-center text-sm text-narrator-lightGray">
                      <BookOpen size={14} className="mr-1" />
                      {/* <span>{demo.genre}</span> */}
                      <span className="mx-2">•</span>
                      <span>{demo.duration}</span>
                    </div>
                  </div>
                </div>
                
                {activeDemo === demo.id && (
                  <div className="hidden md:flex items-center w-1/3">
                    <Volume2 size={16} className="text-narrator-lightGray mr-2" />
                    <Slider
                      defaultValue={[70]}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
              
              {activeDemo === demo.id && (
                <div className="mt-4">
                  <div className="bg-narrator-beige/50 h-2 rounded-full w-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full bg-narrator-purple rounded-full",
                        isPlaying ? "animate-[progress_10s_linear]" : ""
                      )}
                      style={{ width: '30%' }}
                    ></div>
                  </div>
                  
                  <div className="mt-2 text-xs text-narrator-lightGray flex justify-between">
                    <span>0:38</span>
                    <span>{demo.duration}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* <div className="mt-10 text-center">
          <Button className="bg-narrator-purple hover:bg-narrator-purple/80 text-white">
            Request Custom Demo
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default AudioDemos;

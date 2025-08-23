
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import demoAudio from '@/media/olivia-king-demo-reel-aug-23-2025.mp3';

const AudioDemos = () => {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const demos = [
    { id: 1, title: "Narration Demo Reel", genre: "", duration: "1:38", audioSrc: demoAudio }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100;
  }, [volume]);

  const handleDemoClick = (id: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (activeDemo === id) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    } else {
      setActiveDemo(id);
      audio.currentTime = 0;
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const newTime = (value[0] / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="demos" className="section bg-white">
      <div className="container-narrow">
        <h2 className="section-title">Audio Demos</h2>
        
        <p className="text-narrator-darkGray/80 mb-10 max-w-2xl">
          Listen to samples of my narration across different genres. Each demo showcases my versatility and ability to bring characters and stories to life.
        </p>
        
        <audio ref={audioRef} src={demoAudio} preload="metadata" />
        
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
                      value={[volume]}
                      onValueChange={handleVolumeChange}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
              
              {activeDemo === demo.id && (
                <div className="mt-4">
                  <div className="bg-narrator-beige/50 h-2 rounded-full w-full overflow-hidden cursor-pointer"
                       onClick={(e) => {
                         const rect = e.currentTarget.getBoundingClientRect();
                         const x = e.clientX - rect.left;
                         const percentage = (x / rect.width) * 100;
                         handleProgressChange([percentage]);
                       }}>
                    <div 
                      className="h-full bg-narrator-purple rounded-full transition-all"
                      style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
                    ></div>
                  </div>
                  
                  <div className="mt-2 text-xs text-narrator-lightGray flex justify-between">
                    <span>{formatTime(currentTime)}</span>
                    <span>{duration ? formatTime(duration) : demo.duration}</span>
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

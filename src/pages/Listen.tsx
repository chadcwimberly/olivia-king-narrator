import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Import audio samples
import heartbeatsAndRosesSample from '@/media/olivia-king-heartbeats-and-roses-sample.mp3';
import kingdomOfCrowsSample from '@/media/olivia-king-kingdom-of-crows-sample.mp3';
import moonlightBelladonnaSample from '@/media/olivia-king-moonlight-and-belladonna-sample.mp3';
import peachesAndHoneySample from '@/media/olivia-king-peaches-and-honey-sample.mp3';
import rowanSample from '@/media/olivia-king-rowan-sample.mp3';

// Import book covers
import heartbeatsAndRosesCover from '@/media/audiobook-cover-heartbeats-and-roses.jpg';
import moonlightBelladonnaCover from '@/media/audiobook-cover-moonlight-and-belladonna.jpg';
import rowanCover from '@/media/audiobook-cover-rowan.jpg';
import kingdomOfCrowsCover from '@/media/audiobook-cover-house-of-beating-wings.jpg';
import theseImmortalTruthsCover from '@/media/audiobook-cover-these-immortal-truths.jpg';

// Import logo
import oliviaKingLogo from '@/media/olivia-king-logo-horizontal.png';

const Listen = () => {
  const [activeBook, setActiveBook] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});
  
  const books = [
    {
      id: 1,
      title: "Rowan",
      author: "Various",
      genre: "Romantasy",
      duration: "Sample",
      audioSrc: rowanSample,
      coverImage: rowanCover,
      description: "A reckless princess, captured by her enemy, must navigate dangerous politics and a forbidden love she never wanted in order to survive.",
    },
    {
      id: 2,
      title: "Peaches and Honey – These Immortal Truths",
      author: "Various", 
      genre: "Historical Fantasy",
      duration: "Sample",
      audioSrc: peachesAndHoneySample,
      coverImage: theseImmortalTruthsCover,
      description: "Both epic and intimate, These Immortal Truths is a powerful and romantic historical fantasy that explores not only what it means to live forever, but what it means to live fully.",
    },
    {
      id: 3,
      title: "Kingdom of Crows – House of Beating Wings",
      author: "Various",
      genre: "Romantasy",
      duration: "Sample", 
      audioSrc: kingdomOfCrowsSample,
      coverImage: kingdomOfCrowsCover,
      description: "A magicless halfling beloved by the prince but hated by the court is sent on an adventure by an oracle that releases a winged demon into the world. Is it really a demon, or is it her salvation?",
    },
    {
      id: 4,
      title: "Moonlight and Belladonna",
      author: "Various",
      genre: "Romance",
      duration: "Sample",
      audioSrc: moonlightBelladonnaSample,
      coverImage: moonlightBelladonnaCover,
      description: "Will a high school music teacher and an indie rock star find their harmony in this small-town holiday romance?",
    },
    {
      id: 5,
      title: "Heartbeats and Roses",
      author: "Charlotte",
      genre: "Romance",
      duration: "Sample",
      audioSrc: heartbeatsAndRosesSample,
      coverImage: heartbeatsAndRosesCover,
      description: "Will old high school crushes find a second chance at love in this small-town holiday romance?",
    },
  ];

  useEffect(() => {
    // Set up event listeners for all audio elements
    books.forEach((book) => {
      const audio = audioRefs.current[book.id];
      if (!audio) return;

      const updateTime = () => {
        if (activeBook === book.id) {
          setCurrentTime(audio.currentTime);
        }
      };
      
      const updateDuration = () => {
        if (activeBook === book.id) {
          setDuration(audio.duration);
        }
      };
      
      const handleEnded = () => {
        if (activeBook === book.id) {
          setIsPlaying(false);
          setCurrentTime(0);
        }
      };

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', handleEnded);
      };
    });
  }, [activeBook]);

  useEffect(() => {
    // Update volume for active audio
    const activeAudio = activeBook ? audioRefs.current[activeBook] : null;
    if (activeAudio) {
      activeAudio.volume = volume / 100;
    }
  }, [volume, activeBook]);

  const pauseAllOtherAudios = (exceptId: number) => {
    books.forEach((book) => {
      if (book.id !== exceptId) {
        const audio = audioRefs.current[book.id];
        if (audio && !audio.paused) {
          audio.pause();
        }
      }
    });
  };

  const handleBookClick = (id: number) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (activeBook === id) {
      // Same book - toggle play/pause
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    } else {
      // Different book - pause all others and start this one
      pauseAllOtherAudios(id);
      setActiveBook(id);
      audio.currentTime = 0;
      setCurrentTime(0);
      setDuration(audio.duration || 0);
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (value: number[]) => {
    const audio = activeBook ? audioRefs.current[activeBook] : null;
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
    <div className="min-h-screen bg-narrator-cream">
      {/* <Navigation /> */}
      
      <main className="">
        <section className="section bg-narrator-cream">
          <div className="container-narrow">
            {/* Header */}
            <div className="text-center mb-12">
              <img
                src={oliviaKingLogo}
                alt="Olivia King Logo"
                className="h-16 mx-auto mb-6"
              />
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-narrator-darkGray mb-4">
                Listen to Olivia King
              </h1>
              <p className="text-narrator-darkGray/80 text-lg max-w-2xl mx-auto">
                Experience the captivating narration that brings stories to life. 
                Listen to audio samples from various audiobooks I've narrated.
              </p>
            </div>

            {/* Audio Players */}
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {books.map((book) => (
                <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Book Cover */}
                    <div className="md:w-48 h-48 md:h-auto flex-shrink-0">
                      <img
                        src={book.coverImage}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Audio Player Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-playfair font-bold text-narrator-darkGray mb-1">
                            {book.title}
                          </h3>
                          <span className="px-2 py-1 bg-narrator-purple/10 text-narrator-purple text-xs rounded">
                            {book.genre}
                          </span>
                          <p className="text-narrator-lightGray text-sm mb-2">
                            {book.description}
                          </p>
                        </div>
                        
                        <Button
                          onClick={() => handleBookClick(book.id)}
                          variant="outline"
                          size="icon"
                          className={cn(
                            "h-12 w-12 rounded-full border-2 flex-shrink-0",
                            activeBook === book.id && isPlaying
                              ? "border-narrator-purple text-narrator-purple"
                              : "border-narrator-darkGray/30 text-narrator-darkGray/70 hover:border-narrator-purple hover:text-narrator-purple"
                          )}
                        >
                          {activeBook === book.id && isPlaying ? (
                            <Pause size={20} />
                          ) : (
                            <Play size={20} className="ml-0.5" />
                          )}
                        </Button>
                      </div>
                      
                      {/* Progress Bar */}
                      {activeBook === book.id && (
                        <div className="mb-4">
                          <div 
                            className="bg-narrator-beige/50 h-2 rounded-full w-full overflow-hidden cursor-pointer"
                            onClick={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const x = e.clientX - rect.left;
                              const percentage = (x / rect.width) * 100;
                              handleProgressChange([percentage]);
                            }}
                          >
                            <div 
                              className="h-full bg-narrator-purple rounded-full transition-all"
                              style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
                            />
                          </div>
                          
                          <div className="mt-2 text-xs text-narrator-lightGray flex justify-between">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration || 0)}</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Volume Control */}
                      {activeBook === book.id && (
                        <div className="flex items-center">
                          <Volume2 size={16} className="text-narrator-lightGray mr-3" />
                          <Slider
                            value={[volume]}
                            onValueChange={handleVolumeChange}
                            max={100}
                            step={1}
                            className="flex-1 max-w-32"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Hidden audio elements */}
                  <audio
                    ref={(el) => (audioRefs.current[book.id] = el)}
                    src={book.audioSrc}
                    preload="metadata"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Listen;

import { Mic, BookOpen, Headphones, Music } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <BookOpen className="text-narrator-purple mb-2" size={32} />, value: '65+', label: 'Books Narrated' },
    { icon: <Headphones className="text-narrator-purple mb-2" size={32} />, value: '5+', label: 'Years Experience' },
    // { icon: <Music className="text-narrator-purple mb-2" size={32} />, value: '4.9', label: 'Avg. Rating' },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-narrow">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-narrator-purple rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=800&q=80" 
                alt="Professional narrator in studio" 
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="flex items-center gap-2 mb-4">
              <Mic className="text-narrator-purple" />
              <h3 className="font-playfair text-xl">Olivia King</h3>
            </div>
            
            <p className="mb-6 text-narrator-darkGray/90">
              With over a decade of experience bringing stories to life, I've developed a passion for translating the written word into captivating audio experiences. My journey began in theater, providing me with a strong foundation in character development and emotional storytelling.
            </p>
            
            <p className="mb-8 text-narrator-darkGray/90">
              I specialize in fiction across multiple genres, from heartwarming romance to immersive urban fantasy worlds. My voice has been described as versatile, and engaging – allowing me to adapt to the unique needs of each story and bring the characters to life.
            </p>
            
            <p className="mb-8 text-narrator-darkGray/90">
              Readers and authors love the breadth of accents I bring to my narration. Some of the accents I've done include: American English, Standard British English, Received Pronounciation, Scottish English, Welsh English, Cockney, Brummie, West Country, Northern Irish, Australian, Russian, German, French, Norwegian, South African, and more.
            </p>
            
            <div className="grid grid-cols-3 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 bg-narrator-cream rounded-lg">
                  {stat.icon}
                  <p className="text-2xl font-bold text-narrator-darkGray">{stat.value}</p>
                  <p className="text-sm text-narrator-lightGray">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

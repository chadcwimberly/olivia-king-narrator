
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Bookmark, ExternalLink } from 'lucide-react';

// Import book cover images
import charlotteCover from '@/media/audiobook-cover-charlotte.jpg';
import houseOfBeatingWingsCover from '@/media/audiobook-cover-house-of-beating-wings.jpg';
import lochlannDeceptionCover from '@/media/audiobook-cover-lochlann-deception.jpg';
import moonlightBelladonnaCover from '@/media/audiobook-cover-moonlight-and-belladonna.jpg';
import mythicalAllianceCover from '@/media/audiobook-cover-mythical-alliance.jpg';
import ofDreamsAndShadowsCover from '@/media/audiobook-cover-of-dreams-and-shadows.jpg';
import queensOfTheFaeCover from '@/media/audiobook-cover-queens-of-the-fae.jpg';
import rowanCover from '@/media/audiobook-cover-rowan.jpg';
import shadowsOfACrownCover from '@/media/audiobook-cover-shadows-of-a-crown.jpg';
import sleepAndSpiritCover from '@/media/audiobook-cover-sleep-and-spirit.jpg';
import theseImmortalTruthsCover from '@/media/audiobook-cover-these-immortal-truths.jpg';

const Books = () => {
  const booksList = [
    {
      id: 1,
      title: "These Immortal Truths",
      author: "R. Raeta",
      genre: "Historical Fantasy",
      coverImage: theseImmortalTruthsCover,
      description: "Both epic and intimate, These Immortal Truths is a powerful and romantic historical fantasy that explores not only what it means to live forever, but what it means to live fully.",
      ref: "https://www.audible.com/pd/These-Immortal-Truths-Audiobook/B0DZD8KTBR"
    },
    {
      id: 2,
      title: "Rowan",
      author: "Robin D. Mahle and Elle Madison",
      genre: "Romantasy",
      coverImage: rowanCover,
      description: "A reckless princess, captured by her enemy, must navigate dangerous politics and a forbidden love she never wanted in order to survive.",
      ref: "https://www.audible.com/pd/Rowan-Audiobook/B0BS1VBBV8"
    },
    {
      id: 3,
      title: "House of Beating Wings",
      author: "Olivia Wildenstein",
      genre: "Romantasy",
      coverImage: houseOfBeatingWingsCover,
      description: "A magicless halfling beloved by the prince but hated by the court is sent on an adventure by an oracle that releases a winged demon into the world. Is it really a demon, or is it her salvation?",
      ref: "https://www.audible.com/pd/House-of-Beating-Wings-Audiobook/B0BTG9HH35"
    },
    {
      id: 4,
      title: "Shadows of a Crown",
      author: "M. Lynn and Melissa A. Craven",
      genre: "Fantasy",
      coverImage: shadowsOfACrownCover,
      description: "A princess and her guards, and an orphan and her best friend, who are all unaware of their key roles in an ancient prophecy, must embark on a dangerous journey to save their world from destruction.",
      ref: "https://www.audible.com/pd/Shadows-of-a-Crown-Audiobook/B0FG5HBPF2"
    },
    {
      id: 5,
    title: "Charlotte",
    author: "Robin D. Mahle and Elle Madison",
      genre: "Romantasy",
      coverImage: charlotteCover,
      description: "Princess Charlotte's entire life had been planned. Right up until the moment her fiancé is kidnapped on her wedding day, sending the entire kingdom hurtling toward disaster.",
      ref: "https://www.audible.com/pd/The-Lochlann-Treaty-Complete-Series-Audiobook/B0B4V9QRSZ"
    },
    {
      id: 6,
      title: "Sleep and Spirit",
      author: "Courtney Thorne",
      genre: "Romantasy",
      coverImage: sleepAndSpiritCover,
      description: "Gifted with the elements of all five kingdoms, Aurelia had never known a minute of peace. No Virium was ever meant to hold all five elements, and now they war inside her, keeping her from rest.",
      ref: "https://www.audible.com/pd/Sleep-and-Spirit-Audiobook/B0CPH24LRF"
    },
    {
      id: 7,
      title: "Queens of the Fae",
      author: "M. Lynn and Melissa A. Craven",
      genre: "Romantasy",
      coverImage: queensOfTheFaeCover,
      description: "A human girl with a troubled past. A fae prince from a stolen kingdom. When he whisks her away to the fae realm, there is no going back to her old life.",
      ref: "https://www.audible.com/pd/Queens-of-the-Fae-Books-1-3-Audiobook/B09D4NGKDF"
    },
    {
      id: 8,
      title: "Moonlight and Belladonna",
      author: "Jae Dawson",
      genre: "Romance",
      coverImage: moonlightBelladonnaCover,
      description: "Will a high school music teacher and an indie rock star find their harmony in this small-town holiday romance?",
      ref: "https://www.audible.com/pd/Moonlight-and-Belladonna-Audiobook/B09DM8HWFW"
    },
    {
      id: 9,
      title: "Lochlann Deception",
      author: "Robin D. Mahle and Elle Madison",
      genre: "Romantasy",
      coverImage: lochlannDeceptionCover,
      description: "Galina has been looking for a way out. So when she has the chance to break free of her kingdom and the man who wants to own her, she has no choice but to see it through.",
      ref: "https://www.audible.com/pd/The-Lochlann-Deception-Complete-Series-Audiobook/B0D96V61ZK"
    },
    {
      id: 10,
      title: "Of Dreams and Shadows",
      author: "Jesikah Sundin",
      genre: "Romantasy",
      coverImage: ofDreamsAndShadowsCover,
      description: "Princess Æroreh Rosen was faerie blessed before her birth. To promote the New Dawn Era, the Queen coded her daughter with every feminine perfection.",
      ref: "https://www.audible.com/pd/Of-Dreams-and-Shadows-Audiobook/B08JTWDYX9"
    },
    {
      id: 11,
      title: "Mythical Alliance",
      author: "Claire Luana",
      genre: "Urban Fantasy",
      coverImage: mythicalAllianceCover,
      description: "An unsolved murder. A shadowy nemesis. A team of supernatural heroes determined to find the truth.",
      ref: "https://www.audible.com/pd/Mythical-Alliance-Phoenix-Team-Audiobook/B09YWM1PLH"
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleBooks = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;

  const nextBooks = () => {
    setStartIndex((prev) => (prev + visibleBooks >= booksList.length ? 0 : prev + visibleBooks));
  };

  const prevBooks = () => {
    setStartIndex((prev) => (prev - visibleBooks < 0 ? Math.max(0, booksList.length - visibleBooks) : prev - visibleBooks));
  };

  return (
    <section id="books" className="section bg-narrator-beige/40">
      <div className="container-wide">
        <h2 className="section-title">Books I've Narrated</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (100 / visibleBooks)}%)` }}
            >
              {booksList.map((book) => (
                <div 
                  key={book.id} 
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 mb-6"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={book.coverImage} 
                        alt={book.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-playfair font-bold text-xl">{book.title}</h3>
                        <span className="px-2 py-1 bg-narrator-purple/10 text-narrator-purple text-xs rounded">
                          {book.genre}
                        </span>
                      </div>
                      <p className="text-sm text-narrator-lightGray mb-3">By {book.author}</p>
                      <p className="text-narrator-darkGray/80 text-sm mb-4">{book.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-narrator-purple">
                          <Bookmark size={16} className="mr-2" />
                          <span className="text-sm">Available on Audible</span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="ml-2"
                          onClick={() => window.open(book.ref, '_blank')}
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Listen
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md"
            onClick={prevBooks}
            aria-label="Previous books"
          >
            <ChevronLeft />
          </Button>
          
          <Button 
            variant="secondary" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md"
            onClick={nextBooks}
            aria-label="Next books"
          >
            <ChevronRight />
          </Button>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            className="bg-narrator-purple hover:bg-narrator-purple/80 text-white"
            onClick={() => window.open('https://www.audible.com/search?ref=a_search_c3_lNarrator_1_5_1&searchNarrator=Olivia+King&page=1', '_blank')}
          >
            View My Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Books;

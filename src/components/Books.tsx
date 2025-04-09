
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';

const Books = () => {
  const booksList = [
    {
      id: 1,
      title: "The Silent Echo",
      author: "Maria Winters",
      genre: "Mystery",
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80",
      description: "A gripping thriller about a detective uncovering secrets in a small coastal town."
    },
    {
      id: 2,
      title: "Beyond the Horizon",
      author: "Thomas Reed",
      genre: "Science Fiction",
      coverImage: "https://images.unsplash.com/photo-1531501410720-c8d437636169?w=600&q=80",
      description: "An epic journey through space and time, exploring the boundaries of human existence."
    },
    {
      id: 3,
      title: "Whispers in the Wind",
      author: "Eleanor James",
      genre: "Romance",
      coverImage: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=600&q=80",
      description: "A heartwarming tale of love lost and found against the backdrop of the Irish countryside."
    },
    {
      id: 4,
      title: "Shadow's Edge",
      author: "Jonathan Blake",
      genre: "Fantasy",
      coverImage: "https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?w=600&q=80",
      description: "In a world of magic and intrigue, a young apprentice discovers her true powers."
    },
    {
      id: 5,
      title: "The Forgotten Path",
      author: "Sarah Chen",
      genre: "Historical Fiction",
      coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80",
      description: "Set in 19th century China, a tale of family secrets spanning generations."
    },
    {
      id: 6,
      title: "Morning Light",
      author: "David Wilson",
      genre: "Contemporary Fiction",
      coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&q=80",
      description: "A poignant story about second chances and finding purpose in unexpected places."
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
                      <div className="flex items-center text-narrator-purple">
                        <Bookmark size={16} className="mr-2" />
                        <span className="text-sm">Available on Audible</span>
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
          <Button className="bg-narrator-purple hover:bg-narrator-purple/80 text-white">
            View My Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Books;

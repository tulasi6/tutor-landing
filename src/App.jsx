import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, User, Users, MapPin, Heart, List, Bot, Contact, Image, Waves, Signal, User2, Wifi, Battery } from 'lucide-react'; // ✅ Added Bot here

const SpeakTutorLanding = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const lastScrollTime = useRef(Date.now());

  const pages = [
    // Page 01 //
    {
      id: 'stay-motivated',
      content: (
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4">
          <div> 
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
              Stay motivated and<br />reach your goals
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed pt-24">
              Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.
            </p>
          </div>
          <div className="relative pb-5">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mb-5">
                <Bot className="w-5 h-5 text-blue-900" /> 
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white transform hover:scale-[1.05] transition-transform duration-300">
                  <Heart className="w-8 h-8 mb-3" />
                  <p className="text-sm font-medium leading-relaxed">
                    You're interested in traveling, and exploring new cultures.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white transform hover:scale-[1.05] transition-transform duration-300">
                  <List className="w-8 h-8 mb-3" />
                  <p className="text-sm font-medium leading-relaxed">
                    We've created unique lessons and conversations based on those goals.
                  </p>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )
    },

    // Page 02 //
    {
      id: 'talk-anything',
      content: (
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4">
          <div className="order-2 md:order-1">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-xl">
              <div className="text-sm text-gray-800 mb-6 text-center">Create your own</div>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 flex items-center gap-3 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-black-600" />
                  </div>
                  <span className="font-medium text-gray-900">Tourist</span>
                </div>
                <div className="bg-white rounded-2xl p-4 flex items-center gap-3 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white-100 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-black-600" />
                  </div>
                  <span className="font-medium text-gray-900">New friend</span>
                </div>
                <div className="bg-white rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer mb-10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white-100 flex items-center justify-center flex-shrink-0">
                      <Image className="w-5 h-5 text-black-900" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Talking about the best places to grab</div>
                      <div className="font-medium text-gray-900">dinner in San Francisco.</div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02]">
                Start chatting
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-24">
              Talk about anything,<br />anytime, anywhere
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Speak Tutor is your on-the-go conversational partner.
              Practice speaking on any topic, anytime, 
              no matter how niche.
            </p>
          </div>
        </div>
      )
    },

    // Page 03 //
    {
      id: 'build-relationship',
      content: (
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-24">
              Build a relationship<br />with your tutor
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-18">
              Speak Tutor designs a personalized curriculum as unique as you are by getting to know you on a surprisingly deep level.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl p-6 shadow-2xl">
              <h1 className="text-left text-gray-900 ml-5 mb-3">9:41</h1>
              <Signal className="w-5 h-5 text-gray-900 absolute top-4 right-16 mb-3"/>
              <Wifi className="w-5 h-5 text-gray-900 absolute top-4 right-9 mb-3"/>
              <Battery className="w-5 h-5 text-gray-900 absolute top-4 right-3 mb-3"/>




              <div className="bg-white rounded-2xl p-4 mb-4">
                
                <div className="flex items-center gap-3 mb-3">
                  <Waves className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-sm">Speak</div>
                    <div className="text-xs text-gray-500"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 ml-17">
                  Hey Audrey, your trip to Mexico is in 6 days! Let's practice some vocabulary for your trip!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-white/50 rounded-xl h-20"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },

    // ✅ Page 4
    {
      id: 'hero',
      content: (

        <div className="max-w-6xl w-full px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm text-gray-600">Jessica Park</span>
          </div>
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-semibold text-black-100">
            "The first time I used Speak Tutor, I couldn't believe it wasn't a real person. It feels like it understands my motivation deeply."
          </h1>
        </div>
      )
    }
  ];

  const handlePageChange = (direction) => {
    if (isTransitioning) return;
    const newPage = currentPage + direction;
    if (newPage >= 0 && newPage < pages.length) {
      setIsTransitioning(true);
      setCurrentPage(newPage);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  // ✅ Scrolling + keyboard + touch
  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return;
      lastScrollTime.current = now;
      e.deltaY > 0 ? handlePageChange(1) : handlePageChange(-1);
    };

    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        handlePageChange(1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        handlePageChange(-1);
      }
    };

    const handleTouchStart = (e) => (touchStartY.current = e.touches[0].clientY);
    const handleTouchEnd = (e) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) handlePageChange(diff > 0 ? 1 : -1);
    };

    container?.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    container?.addEventListener('touchstart', handleTouchStart);
    container?.addEventListener('touchend', handleTouchEnd);

    return () => {
      container?.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      container?.removeEventListener('touchstart', handleTouchStart);
      container?.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, isTransitioning]);

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden bg-white relative perspective-1000">
      {/* Page Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => !isTransitioning && setCurrentPage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentPage ? 'bg-blue-600 h-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Pages */}
      <div className="relative h-full w-full">
        {pages.map((page, index) => {
          const isActive = index === currentPage;
          const isPrev = index < currentPage;
          const isNext = index > currentPage;

          let transform = 'translateX(0%) rotateY(0deg)';
          let opacity = 1;
          let zIndex = 1;

          if (isPrev) {
            transform = 'translateY(-100%) rotateX(90deg)';
            opacity = 0;
            zIndex = 0;
          } else if (isNext) {
            transform = 'translateY(100%) rotateX(-90deg)';
            opacity = 0;
            zIndex = 0;
          } else if (isActive) {
            zIndex = 10;
          }

          return (
            <div
              key={page.id}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform,
                opacity,
                zIndex,
                transformOrigin: 'center bottom',
                transition: 'all 1s cubic-bezier(0.77, 0, 0.175, 1)',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="w-full h-full flex items-center justify-center">{page.content}</div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 text-sm text-gray-400">
        {currentPage > 0 && (
          <button onClick={() => handlePageChange(-1)} className="hover:text-gray-600 transition-colors">
            ↑ Previous
          </button>
        )}
        <span className="text-gray-300">|</span>
        <span>{currentPage + 1} / {pages.length}</span>
        <span className="text-gray-300">|</span>
        {currentPage < pages.length - 1 && (
          <button onClick={() => handlePageChange(1)} className="hover:text-gray-600 transition-colors">
            Next ↓
          </button>
        )}
      </div>

      {/* Footer */}
      {currentPage === pages.length - 1 && (
        <div className="fixed bottom-0 left-0 right-0 py-8 px-4 bg-gradient-to-t from-gray-50 to-transparent">
          <div className="max-w-6xl mx-auto text-center mt-8">
            
            
          </div>
        </div>
      )}

      <style jsx>{`
        .perspective-1000 {
          perspective: 1200px;
        }
      `}</style>
    </div>
  );
};

export default SpeakTutorLanding;

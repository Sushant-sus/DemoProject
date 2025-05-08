import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { homepageData } from '../../data';
import HeaderV2 from '../header/HeaderV2';
import Footer from '../footer/Footer';

const MainBody = () => {
  const [services, setServices] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  // Random image selector for services
  const getRandomImage = (serviceImages) => {
    const randomIndex = Math.floor(Math.random() * serviceImages.length);
    return serviceImages[randomIndex];
  };

  useEffect(() => {
    // Simulate API fetch with dummy data
    setServices(homepageData.services);
  }, []);

  useEffect(() => {
    // Update arrow visibility on mount and when services change
    updateArrowVisibility();
    // Add resize listener to update visibility on window resize
    window.addEventListener('resize', updateArrowVisibility);
    // Add scroll listener to update visibility on scroll
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateArrowVisibility);
    }
    return () => {
      window.removeEventListener('resize', updateArrowVisibility);
      if (container) {
        container.removeEventListener('scroll', updateArrowVisibility);
      }
    };
  }, [services]);

  const updateArrowVisibility = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    // Check if there are more items than can fit in the viewport
    const canScroll = scrollWidth > clientWidth;
    setShowLeftArrow(canScroll && scrollLeft > 0);
    setShowRightArrow(canScroll && scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleEvent = (layoutId) => {
    navigate(`/layout/item/list/${layoutId}`);
    navigate(`/layout/item/${layoutId}`);
  };

  const handleSeeMore = () => {
    navigate('/layout');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderV2 />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${homepageData.hero.image})` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex w-full max-w-md">
              <input
                type="text"
                placeholder="Search for food..."
                className="flex-grow px-4 py-2 rounded-l-full border-none focus:outline-none"
              />
              <button className="bg-yellow-400 text-white px-6 py-2 rounded-r-full hover:bg-yellow-500 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800">{homepageData.promotionalBanner.title}</h2>
            <p className="text-gray-600 mt-2">{homepageData.promotionalBanner.description}</p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src={homepageData.promotionalBanner.bannerImage}
              alt="Promotional Banner"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="flex items-center">
            {showLeftArrow && (
              <button
                onClick={scrollLeft}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition mr-4 flex-shrink-0"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div
              id="services-scroll"
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-4 pb-4 flex-grow"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {services.map((item, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-64 h-64 relative bg-cover bg-center rounded-lg shadow-md cursor-pointer overflow-hidden group"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${getRandomImage(item.images)})`,
                  }}
                  onClick={() => handleEvent(item.layoutId)}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold group-hover:scale-105 transition">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
            {showRightArrow && (
              <button
                onClick={scrollRight}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition ml-4 flex-shrink-0"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
          <div className="flex justify-end mt-8">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={handleSeeMore}
            >
              See More
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{homepageData.aboutUs.title}</h2>
          <div className="max-w-2xl mx-auto text-center">
            {homepageData.aboutUs.description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
            ))}
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              {homepageData.aboutUs.cta}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainBody;
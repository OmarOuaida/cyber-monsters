import React, { useEffect } from "react";

const Carousel = ({ videos, carouselId = "carouselExampleCaptions" }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window?.te?.Carousel) {
      window.te.Carousel.init();
    }
  }, []);

  return (
    <div
      id={carouselId}
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      {/* Indicators */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        {videos.map((_, i) => (
          <button
            key={i}
            type="button"
            data-twe-target={`#${carouselId}`}
            data-twe-slide-to={i}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
              i === 0 ? "opacity-100" : ""
            }`}
            aria-label={`Slide ${i + 1}`}
            {...(i === 0 ? { "aria-current": "true", "data-twe-carousel-active": true } : {})}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {videos.map((video, i) => (
          <div
            key={i}
            className={`relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none`}
            data-twe-carousel-fade
            data-twe-carousel-item
            {...(i === 0 ? { "data-twe-carousel-active": true } : {})}
          >
            <video className="w-full" autoPlay loop muted>
              <source src={video.src} type="video/mp4" />
            </video>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">{video.title}</h5>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center text-white opacity-50 hover:opacity-90"
        type="button"
        data-twe-target={`#${carouselId}`}
        data-twe-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center text-white opacity-50 hover:opacity-90"
        type="button"
        data-twe-target={`#${carouselId}`}
        data-twe-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
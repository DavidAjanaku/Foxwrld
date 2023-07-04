import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';

const MainPageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videos = [
    {
      title: 'The Holiday Edit',
      videoUrl: video1,
      text: 'Men',
      text1: 'Women',
    },
    {
      title: 'The Holiday Edit',
      videoUrl: video2,
      text: 'Men',
      text1: 'Women',
    },
  ];


  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      video.play().catch(error => {
        // Autoplay was prevented, handle the error
        console.log('Autoplay prevented:', error);
      });
    };

    // Start playing the video when it's loaded
    video.addEventListener('loadedmetadata', playVideo);

    // Clean up event listener
    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
    };
  }, []);

  useEffect(() => {
    const slideShowTimeout = setTimeout(changeSlide, 5000);

    return () => {
      clearTimeout(slideShowTimeout);
    };
  }, [currentSlide]);

  const changeSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
  };

  const handleVideoEnded = () => {
    changeSlide();
  };

  const currentVideo = videos[currentSlide];

  return (
    <div className="main-page-slider w-full relative left-0 right-0 top-0">
      <video
       className="w-full relative video-element"
       src={currentVideo.videoUrl}
       ref={videoRef}
       autoPlay
       loop
       muted
       controls={false}
       onEnded={handleVideoEnded}
       style={{ outline: 'none' }}
       controlsList="nodownload"
      >
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay absolute bottom-12 left-0 right-0 text-center text-white">
        <h2 className="text-white">{currentVideo.title}</h2>
        <div className="flex justify-center">
          <Link to="/" className="underline underline-offset-8">
            <p className="text-white m-2">{currentVideo.text}</p>
          </Link>
          <Link to="/" className="underline underline-offset-8">
            <p className="text-white m-2">{currentVideo.text1}</p>
          </Link>
        </div>
      </div>
      <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
    </div>
  );
};

export default MainPageSlider;

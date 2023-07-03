import React, { useEffect, useState } from 'react';

import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videos = [
   video1,
   video2,
  ];

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
    <div className="video-slider">
      <video
        className="video-element"
        src={currentVideo}
        autoPlay
        loop
        muted
        onEnded={handleVideoEnded}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSlider;

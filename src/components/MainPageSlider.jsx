import React, { useEffect, useRef } from 'react';
import video2 from '../assets/videos/video2.mp4';

export default function MainPageSlider() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className='main'>
      <div className="overlay"></div>
      <video ref={videoRef} src={video2} autoPlay muted loop playsInline />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  );
}

import React from 'react';
import video2 from '../assets/videos/video2.mp4';


export default function MainPageSlider() {
  return (
    <div className="video-container">
     <video src={video2} autoPlay loop muted />
      <div className="content">
        {/* Place your content (e.g., text, buttons) on top of the video */}
        <h1>Welcome to the website</h1>
        <p>Some description about the page</p>
      </div>
    </div>
  );
}

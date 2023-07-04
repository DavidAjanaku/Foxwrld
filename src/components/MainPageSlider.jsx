import React from 'react';
import video2 from '../assets/videos/video2.mp4';


export default function MainPageSlider() {
  return (
    <div className="video-container">
      <video className="video-bg" autoPlay muted loop>
        <source src={video2} type="video/mp4" />
        {/* Add additional <source> tags for different video formats (e.g., WebM, Ogg) */}
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {/* Place your content (e.g., text, buttons) on top of the video */}
        <h1>Welcome to the website</h1>
        <p>Some description about the page</p>
      </div>
    </div>
  );
}

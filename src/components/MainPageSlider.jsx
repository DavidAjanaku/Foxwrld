import React from 'react';
import video2 from '../assets/videos/video2.mp4';


export default function MainPageSlider() {
  return (
    <div className='main'>
    <div className="overlay"></div>
    <video src={video2} autoPlay loop  />
    <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
    </div>
</div>
  );
}

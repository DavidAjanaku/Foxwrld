import React, { useEffect, useRef } from "react";
import video2 from "../assets/videos/backgroundVideo.webm";
import video1 from "../assets/videos/video2.mp4";

export default function MainPageSlider() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="main relative">
      <div className="overlay absolute inset-0 bg-black opacity-50"></div>{" "}
      <video
        className="video-bg object-cover h-[70vh] min-w-full"
        autoPlay
        muted
        loop
        playsInline // Add playsInline attribute
        ref={videoRef}
      >
        <source src={video1} type="video/mp4" />
      </video>
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center  text-white">
        <h1>Welcome to</h1>
        <p className="text-4xl font-extrabold font-sans">FOXWRLD</p>
      </div>
    </div>
  );
}

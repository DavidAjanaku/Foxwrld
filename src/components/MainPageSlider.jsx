import React, { useEffect, useRef } from "react";
import video2 from "../assets/videos/backgroundVideo.webm";

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
        playsInline
        ref={videoRef}
      >
        <source src={video2} type="video/webm" />
      </video>
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center  text-white">
        <h1>Welcome to</h1>
        <p className="text-4xl font-extrabold font-sans"> FOXWRLD</p>
      </div>
    </div>
  );
}

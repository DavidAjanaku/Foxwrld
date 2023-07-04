import React, { useEffect, useRef } from "react";
import video2 from "../assets/videos/backgroundVideo.webm";
import video1 from "../assets/videos/video2.mp4";

export default function MainPageSlider() {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      videoRef.current.play().catch(error => {
        // Autoplay was prevented. Handle or ignore the error.
        // For example, you can show a play button and let the user manually start the video.
      });
    };

    // Add event listener for user interaction to start the video
    const handleInteraction = () => {
      playVideo();
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };

    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
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
        <source src={video1} type="video/mp4" />
      </video>
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center  text-white">
        <h1>Welcome to</h1>
        <p className="text-4xl font-extrabold font-sans">FOXWRLD</p>
      </div>
    </div>
  );
}

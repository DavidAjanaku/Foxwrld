import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';

class MainPageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
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
      ],
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.startSlideShow();
  }

  componentWillUnmount() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideShowInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentSlide: (prevState.currentSlide + 1) % prevState.videos.length,
      }));
    }, 5000); // Change slide every 5 seconds (adjust as needed)
  }

  stopSlideShow() {
    clearInterval(this.slideShowInterval);
  }

  render() {
    const { videos, currentSlide } = this.state;
    const currentVideo = videos[currentSlide];

    return (
      <div className="main-page-slider w-full relative left-0 right-0 top-0">
        <LazyLoad>
          <video className="w-full relative" src={currentVideo.videoUrl} autoPlay loop muted controls={false}>
            Your browser does not support the video tag.
          </video>
        </LazyLoad>
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
  }
}

export default MainPageSlider;

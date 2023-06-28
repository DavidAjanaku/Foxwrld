import React from 'react';
import video1 from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'

class MainPageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          title: 'Men Video',
          videoUrl: video1,
          text: 'This is a video for men.',
        },
        {
          title: 'Women Video',
          videoUrl: video2,
          text: 'This is a video for women.',
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
      <div className="main-page-slider w-full relative left-0  right-0 top-0">
        <video className='w-full relative' src={currentVideo.videoUrl} autoPlay loop  muted>
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay absolute bottom-0 left-[40%] text-center">
          <h2>{currentVideo.title}</h2>
          <p>{currentVideo.text}</p>
        </div>
      </div>
    );
  }
}

export default MainPageSlider;

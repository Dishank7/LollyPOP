

import React, { useState, useRef, useEffect } from 'react';
import thumbnailImage from '../images/lollypop_video_thumbnail-1.png';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const VideoLink = "https://lollypop.academy/wp-content/themes/lollypop-academy/assets/video/Lollypop_Academy_LollypopDesign.mp4";

  // useEffect(() => {
  //   // Add loaded class for animation on page load
  //   setTimeout(() => {
  //     containerRef.current.classList.add('loaded');
  //   }, 100);
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            containerRef.current.classList.add('loaded');
            observer.unobserve(containerRef.current); // Stop observing after the first trigger
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);


  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-container" ref={containerRef}>
      <video
        ref={videoRef}
        className="video-element"
        src={VideoLink}
        poster={thumbnailImage}
        onPause={handlePause}
        onPlay={handlePlay}
        onClick={handlePlayPause}
      />
      {!isPlaying && (
        <div className="play-icon" onClick={handlePlayPause}>
          ►
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
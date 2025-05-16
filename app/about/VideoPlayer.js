"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function AboutPageVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="about-page-video-container" onClick={handlePlay}>
      {!isPlaying && (
        <Image
          src="/images/video_play_btn_blue.svg"
          alt="Play video"
          width={85}
          height={85}
          className="about-page-play-button"
        />
      )}
      <video
        src="/images/sample-video.mp4" // About page specific video
        poster="/images/video_poster.png" // About page specific poster
        preload="none"
        controls={isPlaying}
        ref={videoRef}
        className="about-page-video"
      />
    </div>
  );
}

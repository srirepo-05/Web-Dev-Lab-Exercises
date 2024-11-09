import React, { useRef, useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    // Update video duration once loaded
    video.addEventListener('loadedmetadata', () => {
      setDuration(video.duration);
    });

    // Update current time while the video is playing
    video.addEventListener('timeupdate', () => {
      setCurrentTime(video.currentTime);
    });

    return () => {
      video.removeEventListener('loadedmetadata', null);
      video.removeEventListener('timeupdate', null);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleSeekChange = (e) => {
    const seekTime = e.target.value;
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="video-player-container">
      <video ref={videoRef} className="video" width="100%">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="controls">
        <button onClick={togglePlayPause} className="play-pause-btn">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeekChange}
          className="seek-bar"
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
    </div>
  );
}
export default VideoPlayer;

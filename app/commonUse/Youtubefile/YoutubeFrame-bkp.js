"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaCirclePlay } from "react-icons/fa6";

const YoutubeFrame = ({ vid }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
      }
    });

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className="relative">
      {!playVideo ? (
        <div
          className="relative cursor-pointer group"
          onClick={() => setPlayVideo(true)}
        >
          <img
            src={`https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/336ac859-d5c1-4e2f-80c0-f9ded3a88500/public`}
            className="!w-[100%] !mx-auto h-[205px] md:h-[370px] rounded-lg object-cover"
            alt="Video thumbnail"
            loading="lazy"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity group-hover:bg-black/30">
            <FaCirclePlay className="w-12 h-16 text-red-600 transition-transform group-hover:scale-110" />
          </div>
        </div>
      ) : (
        <iframe
          className="!w-[100%] !mx-auto h-[205px] md:h-[370px] rounded-lg"
          src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default YoutubeFrame;

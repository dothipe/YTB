
import React from 'react';
import { VideoInfo } from '../types';

interface VideoDetailsProps {
  videoId: string;
  videoInfo: VideoInfo;
}

export const VideoDetails: React.FC<VideoDetailsProps> = ({ videoId, videoInfo }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-md"
        ></iframe>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-gray-100 line-clamp-2">{videoInfo.title}</h2>
        <p className="text-gray-400">{videoInfo.author}</p>
        <p className="text-sm text-gray-500">Duration: {videoInfo.duration}</p>
      </div>
    </div>
  );
};

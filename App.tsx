
import React, { useState, useCallback } from 'react';
import { UrlInputForm } from './components/UrlInputForm';
import { VideoDetails } from './components/VideoDetails';
import { DownloadPanel } from './components/DownloadPanel';
import { VideoInfo, DownloadFormat } from './types';
import { VIDEO_QUALITIES, AUDIO_QUALITIES } from './constants';
import { GitHubIcon } from './components/icons/GitHubIcon';

const App: React.FC = () => {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState<string | null>(null);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedFormat, setSelectedFormat] = useState<DownloadFormat>(DownloadFormat.VIDEO);
  const [selectedVideoQuality, setSelectedVideoQuality] = useState(VIDEO_QUALITIES[0].value);
  const [selectedAudioQuality, setSelectedAudioQuality] = useState(AUDIO_QUALITIES[0].value);

  const extractVideoId = (inputUrl: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = inputUrl.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleFetchVideoInfo = useCallback(() => {
    setError(null);
    const id = extractVideoId(url);

    if (!id) {
      setError('Invalid YouTube URL. Please check and try again.');
      setVideoId(null);
      setVideoInfo(null);
      return;
    }
    
    setIsLoading(true);
    setVideoId(id);

    // Simulate API call to fetch video details
    setTimeout(() => {
      setVideoInfo({
        title: 'Video Title Placeholder - Demonstration Only',
        author: 'Channel Name',
        duration: '12:34',
        thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      });
      setIsLoading(false);
    }, 1000);
  }, [url]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
            YouTube Downloader
          </h1>
          <p className="text-gray-400 mt-2">
            Paste a YouTube link to preview and select download options.
          </p>
        </header>

        <main>
          <UrlInputForm
            url={url}
            setUrl={setUrl}
            onSubmit={handleFetchVideoInfo}
            isLoading={isLoading}
          />

          {error && <p className="text-center text-red-400 mt-4">{error}</p>}
          
          {isLoading && (
            <div className="flex justify-center items-center mt-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
            </div>
          )}

          {videoId && videoInfo && !isLoading && (
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <VideoDetails videoId={videoId} videoInfo={videoInfo} />
              <DownloadPanel
                selectedFormat={selectedFormat}
                setSelectedFormat={setSelectedFormat}
                selectedVideoQuality={selectedVideoQuality}
                setSelectedVideoQuality={setSelectedVideoQuality}
                selectedAudioQuality={selectedAudioQuality}
                setSelectedAudioQuality={setSelectedAudioQuality}
              />
            </div>
          )}
        </main>
      </div>
      <footer className="w-full max-w-4xl mx-auto text-center text-gray-500 mt-12 py-4 border-t border-gray-700">
        <p>This is a UI/UX demonstration. No files are actually downloaded from YouTube.</p>
        <div className="flex justify-center items-center space-x-2 mt-2">
            <GitHubIcon />
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                View on GitHub
            </a>
        </div>
      </footer>
    </div>
  );
};

export default App;

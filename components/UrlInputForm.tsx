
import React from 'react';
import { YouTubeIcon } from './icons/YouTubeIcon';

interface UrlInputFormProps {
  url: string;
  setUrl: (url: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const UrlInputForm: React.FC<UrlInputFormProps> = ({ url, setUrl, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex items-center bg-gray-800 border-2 border-gray-700 rounded-lg shadow-lg overflow-hidden focus-within:border-red-500 transition-colors">
        <div className="pl-4 text-gray-500">
          <YouTubeIcon />
        </div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=..."
          className="w-full p-4 bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 transition-colors disabled:bg-red-800 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Fetch'}
        </button>
      </div>
    </form>
  );
};

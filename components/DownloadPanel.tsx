
import React from 'react';
import { DownloadFormat, QualityOption } from '../types';
import { VIDEO_QUALITIES, AUDIO_QUALITIES } from '../constants';
import { DownloadIcon } from './icons/DownloadIcon';

interface DownloadPanelProps {
  selectedFormat: DownloadFormat;
  setSelectedFormat: (format: DownloadFormat) => void;
  selectedVideoQuality: string;
  setSelectedVideoQuality: (quality: string) => void;
  selectedAudioQuality: string;
  setSelectedAudioQuality: (quality: string) => void;
}

const QualitySelector: React.FC<{
    options: QualityOption[];
    selectedValue: string;
    onChange: (value: string) => void;
}> = ({ options, selectedValue, onChange }) => (
    <div className="flex flex-wrap gap-2">
        {options.map((option) => (
            <button
                key={option.value}
                onClick={() => onChange(option.value)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    selectedValue === option.value
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-600 hover:bg-gray-500 text-gray-200'
                }`}
            >
                {option.label}
            </button>
        ))}
    </div>
);

export const DownloadPanel: React.FC<DownloadPanelProps> = ({
  selectedFormat,
  setSelectedFormat,
  selectedVideoQuality,
  setSelectedVideoQuality,
  selectedAudioQuality,
  setSelectedAudioQuality,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex border-b border-gray-700 mb-6">
          <button
            onClick={() => setSelectedFormat(DownloadFormat.VIDEO)}
            className={`flex-1 py-3 text-center font-semibold transition-colors ${
              selectedFormat === DownloadFormat.VIDEO
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Video (MP4)
          </button>
          <button
            onClick={() => setSelectedFormat(DownloadFormat.AUDIO)}
            className={`flex-1 py-3 text-center font-semibold transition-colors ${
              selectedFormat === DownloadFormat.AUDIO
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Audio (MP3)
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-3">Select Quality</h3>
          {selectedFormat === DownloadFormat.VIDEO ? (
            <QualitySelector 
                options={VIDEO_QUALITIES} 
                selectedValue={selectedVideoQuality} 
                onChange={setSelectedVideoQuality} 
            />
          ) : (
            <QualitySelector 
                options={AUDIO_QUALITIES} 
                selectedValue={selectedAudioQuality} 
                onChange={setSelectedAudioQuality} 
            />
          )}
        </div>
      </div>
      
      <div className="mt-8">
        <div className="group relative w-full">
            <button
                disabled
                className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
                <DownloadIcon />
                <span>Download</span>
            </button>
            <div className="absolute bottom-full mb-2 w-full px-4 hidden group-hover:block">
                <div className="bg-gray-900 text-white text-sm text-center rounded-lg p-2 shadow-lg">
                    Direct downloading from YouTube is against their Terms of Service. This feature is for demonstration only.
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

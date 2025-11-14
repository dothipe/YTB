
export interface VideoInfo {
  title: string;
  author: string;
  duration: string;
  thumbnailUrl: string;
}

export enum DownloadFormat {
  VIDEO = 'Video',
  AUDIO = 'Audio',
}

export interface QualityOption {
  label: string;
  value: string;
}

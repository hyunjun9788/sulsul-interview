import { ForwardedRef, MediaHTMLAttributes, useEffect, useRef } from 'react';

import { useVideoStateStore } from '../../store/useVideoStateStore';
import { cn } from '../../utils/style';

export interface VideoProps extends MediaHTMLAttributes<HTMLVideoElement> {
  videoRef?: ForwardedRef<HTMLVideoElement>;
  hero?: boolean;
}

export const Video = ({ className, videoRef, hero, ...props }: VideoProps) => {
  const { videoPlaying } = useVideoStateStore();
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (ref.current) {
      videoPlaying ? ref.current.play() : ref.current.pause();
    }
  }, [videoPlaying]);
  return (
    <video
      ref={hero ? ref : videoRef}
      width={hero ? '1160px' : '588px'}
      id="videoPlayer"
      webkit-playsinline="true"
      playsInline={true}
      className={cn(className)}
      {...props}
    />
  );
};

import { forwardRef, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

import { VideoProps } from '@/shared/ui/videos';
import { cn } from '@/shared/utils/style';

const Video = dynamic(
  () => import('../../shared/ui/videos').then((mod) => mod.Video),
  {
    ssr: false,
  }
);

const videoSteps = [
  '../../../videos/step-1.mp4',
  '../../../videos/step-2.mp4',
  '../../../videos/step-3.mp4',
];

interface StepVideosProps {
  videoState: 'paused' | 'play';
  activeStep: number;
}
export const StepVideos = ({ videoState, activeStep }: StepVideosProps) => {
  const refs = useRef<(HTMLVideoElement | null)[]>([null, null, null]);
  useEffect(() => {
    refs.current.forEach((video, index) => {
      if (videoState === 'paused' || activeStep !== index) {
        video?.pause();
      } else {
        video?.play();
      }
    });
  }, [activeStep, videoState]);
  return videoSteps.map((v, i) => (
    <ForwardedRefVideo
      ref={(el) => {
        refs.current[i] = el;
      }}
      key={i}
      className={cn('hidden z-0 mt-[30px] rounded-[30px] drop-shadow-hero', {
        'inline-block z-50': activeStep === i,
      })}
      muted
      loop
      autoPlay
      playsInline
      controls={false}
      src={v}
    ></ForwardedRefVideo>
  ));
};
const ForwardedRefVideo = forwardRef<HTMLVideoElement, VideoProps>(
  (props, ref) => <Video videoRef={ref} {...props} />
);
ForwardedRefVideo.displayName = 'ForwardedRefVideo';

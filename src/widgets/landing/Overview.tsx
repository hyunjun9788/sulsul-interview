'use client';
import { useRef, useState } from 'react';

import { gsap, ScrollTrigger, useGSAP } from '../../shared/utils/gsap';
import { StepList } from './StepList';
import { StepVideos } from './StepVideos';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Overview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [videoState, setVideoState] = useState<'paused' | 'play'>('paused');

  useGSAP(
    () => {
      if (!containerRef.current) return;
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: '0px 100px',
        end: '2100px 10px',
        pin: true,
        pinSpacing: true,
        onEnter: () => {
          setVideoState('play');
        },
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress < 0.3) {
            setStep(0);
          }
          if (progress >= 0.3 && progress < 0.7) {
            setStep(1);
          }
          if (progress >= 0.7) {
            setStep(2);
          }
        },
        onLeave: () => {
          setVideoState('paused');
        },
        onLeaveBack: () => {
          setVideoState('paused');
        },
        onEnterBack: () => {
          setVideoState('play');
        },
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div className="">
      <div className="my-[100px] flex flex-col items-center" ref={containerRef}>
        <h1 className="text-center text-6xl font-bold">
          술술과 함께하는
          <br />
          면접 완성 프로젝트
        </h1>
        <div className="sticky mt-[80px] flex items-center gap-[40px]">
          <div className="relative">
            <StepVideos videoState={videoState} activeStep={step} />
          </div>
          <div className="flex flex-col gap-[30px] px-[86px] py-[64px]">
            <StepList activeStep={step} />
          </div>
        </div>
      </div>
    </div>
  );
};

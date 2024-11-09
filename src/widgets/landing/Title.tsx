'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Video = dynamic(
  () => import('../../shared/ui/videos').then((mod) => mod.Video),
  {
    ssr: false,
  }
);

export const Title = () => {
  return (
    <div className="relative flex h-[1270px] justify-center">
      <div className="absolute top-0 h-[935px] w-full">
        <Image src="/images/hero.png" priority fill alt="배경 이미지" />
      </div>
      <div className="z-[99] mt-[120px] flex h-[935px] flex-col items-center gap-2">
        <h1 className="text-center text-[42px] font-bold leading-[52px] text-white">
          자소서는 다 썼는데,
          <br />
          면접 준비가 막막하다면?
        </h1>
        <p className="text-[17px] font-medium text-white">
          내 자기소개서 기반 면접질문 예측부터 면접 단골 기출문제까지!
        </p>
        <button className="mt-8 rounded-[30px] bg-gray-800 px-[41.5px] py-[13px] text-[16px] font-bold text-white transition-colors hover:bg-gray-700">
          내 면접질문 예측하기
        </button>
        <Video
          hero={true}
          className="z-[999] mb-[100px] mt-[30px] rounded-[30px] drop-shadow-hero"
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

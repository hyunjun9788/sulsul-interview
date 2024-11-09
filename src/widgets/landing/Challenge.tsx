'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Lv_IMAGE = [
  { color: '/images/Lv.2-color.svg', gray: '/images/Lv.2-gray.svg' },
  { color: '/images/Lv.2-gray.svg', gray: '/images/Lv.3-gray.svg' },
  { color: '/images/Lv.5-color.svg', gray: '/images/Lv.5-gray.svg' },
  { color: '/images/Lv.6-color.svg', gray: '/images/Lv.6-gray.svg' },
];

export const Challenge = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 1200);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative flex h-[874px] flex-col items-center bg-blue-100">
      <div className="mt-[100px] flex flex-col items-center ">
        <h1 className="text-center text-6xl font-bold text-blue-500">
          백문백답 챌린지로
        </h1>
        <h1 className="text-center text-6xl font-bold text-blue-500">
          단골 기출문제 완벽 대비
        </h1>
        <Link href={'/exam'}>
          <button className="mt-8 h-[52px] w-[215px] rounded-[30px] bg-blue-500 text-[15px] font-semibold text-white transition-colors hover:bg-blue-300">
            면접 기출문제 풀기
          </button>
        </Link>
      </div>
      <Image
        className="absolute bottom-0 z-[99]"
        width={580}
        height={522}
        src="/images/challenge-section.png"
        alt="백문백답 섹션 이미지"
      />
      <div className="absolute top-[594px] z-50 flex gap-[524px]">
        <div className="flex gap-[18px]">
          {Lv_IMAGE.slice(0, 2).map((v, i) => (
            <Image
              key={i}
              src={i === activeIndex ? v.color : v.gray}
              width={160}
              height={160}
              alt="lv 이미지"
            />
          ))}
        </div>
        <div className="flex gap-[18px]">
          {Lv_IMAGE.slice(2, 4).map((v, i) => (
            <Image
              key={i + 2}
              src={i + 2 === activeIndex ? v.color : v.gray}
              width={160}
              height={160}
              alt="lv 이미지"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

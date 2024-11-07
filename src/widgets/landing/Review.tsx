'use client';

import { useRef } from 'react';
import Image from 'next/image';

import Review1 from '../../../public/images/comment-1.svg';
import Review2 from '../../../public/images/comment-2.svg';
import Review3 from '../../../public/images/comment-3.svg';
import { gsap, ScrollTrigger, useGSAP } from '../../shared/utils/gsap';

const REVIEW_IMAGE = [Review1, Review2, Review3];

export const Review = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: '0 60%',
        end: 'bottom 60%',
        animation: gsap.from(imageRefs.current, {
          opacity: 0,
          y: -50,
          stagger: 0.2,
        }),
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex h-[757px] flex-col items-center justify-center gap-[80px] bg-[#F6F7FB]"
    >
      <div className="text-center text-[42px] font-bold">
        <h1>취뽀생들이</h1>
        <h1>술술을 선택한 이유</h1>
      </div>
      <div className="flex gap-6">
        {REVIEW_IMAGE.map((v, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement) => {
              imageRefs.current[i] = el;
            }}
          >
            <Image
              key={i}
              width={384}
              height={369}
              src={v}
              alt={'리뷰' + i + 1}
            />{' '}
          </div>
        ))}
      </div>
    </div>
  );
};

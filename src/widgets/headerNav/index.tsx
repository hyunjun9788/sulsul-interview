'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import HeaderLoginDialog from '../../../public/images/header-login-dialog.svg';
import Logo from '../../../public/images/sul-logo.png';
import { gsap, ScrollTrigger, useGSAP } from '../../shared/utils/gsap';

export const HeaderNav = () => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (pathname === '/') {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: '0 start',
        end: 'bottom start',
        animation: gsap.to(containerRef.current, {
          backgroundColor: 'rgb(255,255,255)',
        }),
        toggleActions: 'play none none reverse',
      });
    }
  }, [pathname]);
  return (
    <div
      className="fixed top-0 z-[999] flex h-[60px] w-full justify-center bg-transparent"
      ref={containerRef}
    >
      <div className="container relative">
        <nav className="flex h-full items-center justify-between">
          <div className="flex items-center gap-[46px]">
            <Link href={'/'} className="relative h-[22px] w-[92px]">
              <Image fill src={Logo} alt="로고" />
            </Link>
            <div className="flex items-center gap-[40px] font-medium">
              <Link href="/question" className="">
                면접질문 예측
              </Link>
              <Link href="">기출문제</Link>
              <Link href="">실전연습</Link>
              <Link href="">아카이브</Link>
            </div>
          </div>
          <button className="rounded-[30px] bg-blue-500 px-4 py-[11px] text-[15px] font-semibold text-white transition-colors hover:bg-blue-300">
            지금 시작하기
          </button>
          <Image
            className="absolute right-1 top-14 animate-custom-bounce"
            width={143}
            height={44}
            src={HeaderLoginDialog}
            alt="로그인 아이콘"
          />
        </nav>
      </div>
    </div>
  );
};

'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Modal } from '@/shared/ui/modal';

import { gsap, ScrollTrigger, useGSAP } from '../../shared/utils/gsap';

export const HeaderNav = () => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  useGSAP(() => {
    if (pathname === '/' && containerRef.current) {
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
              <Image fill src="/images/sul-logo.png" alt="로고" />
            </Link>
            <div className="flex items-center gap-[40px] font-medium">
              <Link href="/question">면접질문 예측</Link>
              <Link href="">기출문제</Link>
              <Link href="">실전연습</Link>
              <Link href="">아카이브</Link>
            </div>
          </div>
          <button
            className="rounded-[30px] bg-blue-500 px-4 py-[11px] text-[15px] font-semibold text-white transition-colors hover:bg-blue-300"
            onClick={() => setOpen(true)}
          >
            지금 시작하기
          </button>
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <>
              <button
                className="absolute right-8 top-8"
                onClick={() => setOpen(false)}
              >
                <Image
                  width={24}
                  height={24}
                  src="/icons/icon-close-L.svg"
                  alt="닫기 버튼"
                />
              </button>
              <div className="mt-[36px] flex flex-col items-center">
                <div className="text-center text-4xl font-bold leading-8">
                  <h1 className="">간편하게 로그인하고</h1>
                  <h1>체계적인 면접준비를 시작하세요!</h1>
                </div>
                <div className="mt-[34px]">
                  <Image
                    width={170}
                    height={148}
                    src="/icons/character-login.svg"
                    alt="캐릭터"
                  />
                </div>
                <div className="mt-[30px] flex flex-col gap-2">
                  <button className="flex h-[52px] w-[340px] items-center justify-center gap-4 rounded-[26px] bg-[#fee500] font-bold hover:bg-[#fee500]/70 active:bg-[#fee500]/80">
                    <Image
                      width={24}
                      height={24}
                      src="/icons/kakao.svg"
                      alt="카카오 아이콘"
                    />
                    <p>카카오로 3초만에 시작하기</p>
                  </button>
                  <button className="flex h-[52px] w-[340px] items-center justify-center gap-4 rounded-[26px] border border-gray-300 bg-white font-bold hover:bg-gray-100 active:bg-gray-50">
                    <Image
                      width={24}
                      height={24}
                      src="/icons/google.png"
                      alt="구글 아이콘"
                    />
                    <p>구글로 3초만에 시작하기</p>
                  </button>
                </div>
                <div className="mt-3 text-center text-[12px] font-medium text-gray-500">
                  <p className="">
                    로그인 시,{' '}
                    <span className="text-blue-500">개인정보처리방침</span> 및
                    <span className="text-blue-500"> 서비스 약관을</span>
                  </p>
                  <p>준수하고 동의하는 것으로 간주합니다.</p>
                </div>
              </div>
            </>
          </Modal>
          <Image
            className="absolute right-1 top-14 z-50 animate-custom-bounce"
            width={143}
            height={44}
            src="images/header-login-dialog.svg"
            alt="로그인 아이콘"
          />
        </nav>
      </div>
    </div>
  );
};

'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Modal } from '@/shared/ui/modal';
import { SignInModal } from '@/shared/ui/modal/SignInModal';

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
            <SignInModal onClose={() => setOpen(false)} />
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

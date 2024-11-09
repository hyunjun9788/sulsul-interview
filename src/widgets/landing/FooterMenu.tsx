import Image from 'next/image';
import Link from 'next/link';

import LogoGray from '../../../public/images/logo-gray.png';
const MENU_LIST = [
  {
    href: '/question',
    menu: '면접질문 예측',
  },
  {
    href: '/exam',
    menu: '기출문제',
  },
  {
    href: '/practice',
    menu: '실전연습',
  },
  {
    href: '/archive',
    menu: '아카이브',
  },
];
export const FooterMenu = () => {
  return (
    <>
      <div className="container flex justify-center border-b">
        <nav className="flex h-[90px] items-center gap-[40px] font-semibold">
          {MENU_LIST.map((v, i) => (
            <Link
              key={i}
              href={v.href}
              className="text-gray-700 transition-colors hover:text-blue-500"
            >
              {v.menu}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container flex h-[78px] items-center justify-between px-0">
        <Image width={92} height={22} src={LogoGray} alt="로고 이미지" />
        <p className="font-medium text-gray-700 opacity-50">
          © 2024 Sulsul. All rights reserved.
        </p>
      </div>
    </>
  );
};

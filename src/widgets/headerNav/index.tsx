import Image from 'next/image';
import Logo from '../../../public/sul-logo.png';
import Link from 'next/link';

export const HeaderNav = () => {
  return (
    <div className="fixed flex h-[60px] justify-center bg-transparent">
      <nav className="flex gap-[46px] items-center">
        <Image width={92} height={22} src={Logo} alt="로고" />
        <div className="flex items-center gap-[40px] font-medium">
          <Link href="/question" className="">
            면접질문 예측
          </Link>
          <Link href="">기출문제</Link>
          <Link href="">실전연습</Link>
          <Link href="">아카이브</Link>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

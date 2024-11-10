import Image from 'next/image';
import { getSession, signIn, signOut } from 'next-auth/react';

interface SignInProps {
  onClose: () => void;
}

export const SignInModal = ({ onClose }: SignInProps) => {
  return (
    <>
      <button className="absolute right-8 top-8" onClick={onClose}>
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
          <button
            className="flex h-[52px] w-[340px] items-center justify-center gap-4 rounded-[26px] bg-[#fee500] font-bold hover:bg-[#fee500]/70 active:bg-[#fee500]/80"
            onClick={() => signIn('kakao', { callbackUrl: '/' })}
          >
            <Image
              width={24}
              height={24}
              src="/icons/kakao.svg"
              alt="카카오 아이콘"
            />
            <p>카카오로 3초만에 시작하기</p>
          </button>
          <button
            className="flex h-[52px] w-[340px] items-center justify-center gap-4 rounded-[26px] border border-gray-300 bg-white font-bold hover:bg-gray-100 active:bg-gray-50"
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
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
            로그인 시, <span className="text-blue-500">개인정보처리방침</span>{' '}
            및<span className="text-blue-500"> 서비스 약관을</span>
          </p>
          <p>준수하고 동의하는 것으로 간주합니다.</p>
        </div>
      </div>
    </>
  );
};

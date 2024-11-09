import Image from 'next/image';
import Link from 'next/link';

import QuestionImage from '../../../public/images/action.svg';
export const Question = () => {
  return (
    <div className="container relative flex h-[500px] items-center">
      <div className="flex flex-col ">
        <div className="text-[42px] font-bold leading-[54px]">
          <h1>최종면접 합격률</h1>
          <h1>딱 5배 높이는 방법</h1>
        </div>
        <div className="mt-3 font-medium text-gray-600">
          <p>술술과 함께 체계적인 면접준비로 나만의</p>
          <p>면접 데이터를 정리하고 쌓아가세요.</p>
        </div>
        <Link href={'/question'}>
          <button className="mt-20 h-[52px] w-[215px] rounded-[30px] bg-gray-800 text-[16px] font-bold text-white transition-colors hover:bg-gray-700">
            내 면접질문 예측하기
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0 right-[-30px]">
        <Image
          className=""
          width={638}
          height={400}
          src={QuestionImage}
          alt="예상 면접질문 이미지"
        />
      </div>
    </div>
  );
};

import Image from 'next/image';
import Link from 'next/link';

import ArrowIcon from '../../../public/icons/icon-arrow_up_right.svg';
import FeedbackImage from '../../../public/images/feedback-desktop.png';

export const Feedback = () => {
  return (
    <div className="relative h-[296px] w-full">
      <Link
        className=""
        href="https://forms.gle/NjyUxkFDokq2Gtus5"
        target="_blank"
      >
        <Image
          fill
          objectFit="cover"
          objectPosition="center"
          src={FeedbackImage}
          alt="피드백 하러가기"
        />
        <div className="relative flex flex-col items-center justify-center gap-4">
          <h1 className="mt-24 text-[42px] font-bold text-white">
            술술, 이용해보셨나요?
          </h1>
          <h4 className="flex text-[20px] font-bold text-white">
            피드백 남기고 커피 쿠폰 받기{' '}
            <Image alt="icon" src={ArrowIcon} width={20} height={20} />
          </h4>
        </div>
      </Link>
    </div>
  );
};

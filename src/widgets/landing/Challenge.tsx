import Image from 'next/image';

import ChallengeSection from '../../../public/images/challenge-section.png';
import Lv2Color from '../../../public/images/Lv.2-color.svg';
import Lv2Gray from '../../../public/images/Lv.2-gray.svg';
import Lv3Color from '../../../public/images/Lv.3-color.svg';
import Lv3Gray from '../../../public/images/Lv.3-gray.svg';
import Lv5Color from '../../../public/images/Lv.5-color.svg';
import Lv5Gray from '../../../public/images/Lv.5-gray.svg';
import Lv6Color from '../../../public/images/Lv.6-color.svg';
import Lv6Gray from '../../../public/images/Lv.6-gray.svg';

const LeftLvImage = [
  // Lv2Color,
  Lv2Gray,
  // Lv3Color,
  Lv3Gray,
];
const RightLvImage = [
  // Lv5Color,
  Lv5Gray,
  // Lv6Color,
  Lv6Gray,
];
export const Challenge = () => {
  return (
    <div className="relative flex h-[874px] flex-col items-center bg-blue-100">
      <div className="mt-[100px] flex flex-col items-center ">
        <h1 className="text-center text-6xl font-bold text-blue-500">
          백문백답 챌린지로
        </h1>
        <h1 className="text-center text-6xl font-bold text-blue-500">
          단골 기출문제 완벽 대비
        </h1>
        <button className="mt-8 h-[52px] w-[215px] rounded-[30px] bg-blue-500 text-[15px] font-semibold text-white transition-colors hover:bg-blue-300">
          면접 기출문제 풀기
        </button>
      </div>
      <Image
        className="absolute bottom-0"
        width={580}
        height={522}
        src={ChallengeSection}
        alt="백문백답 섹션 이미지"
      />
      <div className="absolute top-[594px] flex gap-[524px]">
        <div className="flex">
          {LeftLvImage.map((v, i) => (
            <Image key={i} src={v} width={160} alt="lv 이미지" />
          ))}
        </div>
        <div className="flex">
          {RightLvImage.map((v, i) => (
            <Image key={i} src={v} width={160} alt="lv 이미지" />
          ))}
        </div>
      </div>
    </div>
  );
};

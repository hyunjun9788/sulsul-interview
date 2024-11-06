const STEP_LIST = [
  {
    order: 'STEP 01',
    title: '면접질문 예측하기',
    content: [
      '면접은 지원자가 제출한 서류를 바탕으로 이루어진다는 사실!',
      '내가 쓴 자소서를 입력하면 나를 위한면접 예상질문이 생성돼요.',
    ],
  },
  {
    order: 'STEP 02',
    title: '나만의 답변 정리하기',
    content: [
      '질문에 대한 답변을 작성하고 키워드 노트로 핵심 키워드를',
      '정리해보세요. 작성한 답변에 대한 피드백 또한 받을 수 있답니다.',
    ],
  },
  {
    order: 'STEP 03',
    title: '실전 연습하기',
    content: [
      '잘 답변할 수 있는 면접질문과 그렇지 못한 질문을 구분하고',
      '스스로 질문에 대한 답변을 해보며 실전에 대비하세요.',
    ],
  },
] as const;

export const OverView = () => {
  return (
    <div className="mt-[100px] flex flex-col items-center">
      <h1 className="text-center text-6xl font-bold">
        술술과 함께하는
        <br />
        면접 완성 프로젝트
      </h1>
      <div className="mt-[80px]">
        <div className="flex items-center gap-[40px]">
          <video
            className="z-[999] mt-[30px] rounded-[30px] drop-shadow-hero"
            width={588}
            height={560}
            muted
            loop
            autoPlay
            playsInline
            controls={false}
            src={require('../../../public/videos/step-1.mp4')}
          ></video>
          <div className="flex flex-col gap-[30px] px-[86px] py-[64px]">
            {STEP_LIST.map((v) => (
              <div key={v.order}>
                <h4 className="font-bold text-blue-500">{v.order}</h4>
                <h3 className="text-4xl font-bold">{v.title}</h3>
                <p className="mt-3 font-medium text-gray-600">
                  {v.content[0]}
                  <br />
                  {v.content[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

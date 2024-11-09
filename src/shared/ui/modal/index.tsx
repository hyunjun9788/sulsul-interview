import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}
export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      className="fixed left-0 top-0 z-[60] flex size-full items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[524px] w-[432px] rounded-md bg-white p-5"
      >
        <button className="absolute right-8 top-8">
          <Image
            width={24}
            height={24}
            src="/icons/icon-close-L.svg"
            alt="닫기 버튼"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

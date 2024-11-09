import { HTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/shared/utils/style';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  className?: React.ComponentProps<'div'>['className'];
  children: JSX.Element;
}

export const Modal = ({ isOpen, onClose, className, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      className="fixed left-0 top-0 z-[60] flex size-full items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'relative h-[524px] w-[432px] rounded-md bg-white p-5',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

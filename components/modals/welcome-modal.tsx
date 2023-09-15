'use client';

import { useModal } from '@/hooks/use-modal-store';
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';

function WelcomeModal() {
  const {
    onOpen, isOpen, type, onClose,
  } = useModal();
  const [mounted, setMounted] = useState(false);

  const isModalOpen = isOpen && type === 'welcome';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      onOpen('welcome');
    }, 3000);
  }, [onOpen]);

  if (!mounted) return null;
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-[25px]">
        <DialogHeader>
          <DialogTitle className="w-full text-center text-3xl font-medium">Hello,Welcome!</DialogTitle>
          <DialogDescription className='flex flex-col gap-4'>
            <span className="relative w-[150px] mx-auto h-[230px]">
              <Image priority src="/images/avatars/female-memoji-1.svg" alt="memoji" className='object-contain' fill/>
            </span>
            <span className='flex flex-col items-center text-center justify-center gap-3'>
              <span className='font-medium italic'>This is an interactive prototype</span>
              <span>Feel free to explore, ask questions, give feedback or discuss more.</span>
            </span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default WelcomeModal;

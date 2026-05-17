'use client'; // クライアントサイドでの実行を明示

import { respAcceptToggleAtom } from '@/store/RespAcceptToggleAtom';
import React from 'react';
import { useAtomValue } from 'jotai';

export const AnsswerMessage: React.FC = () => {
  const isAccepting = useAtomValue(respAcceptToggleAtom);
  if (!isAccepting) {
    return undefined;
  }
  return (
    <div className='flex justify-center items-center container mx-auto p-4 max-w-3xl text-gray-600  rounded-lg mb-4 bg-white shadow-md'>
      回答を受け付けています
    </div>
  );
};

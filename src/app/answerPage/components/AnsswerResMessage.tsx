import { respAcceptToggleAtom } from '@/store/RespAcceptToggleAtom';
import React from 'react';
import { useRecoilState } from 'recoil';

export const AnsswerMessage: React.FC = () => {
  const [isAccepting] = useRecoilState(respAcceptToggleAtom);

  return (
    <div
      className={`flex justify-center items-center container mx-auto p-4 max-w-3xl text-gray-600  rounded-lg   mb-4 ${
        isAccepting ? 'bg-white shadow-md' : ''
      }`}
    >
      {isAccepting ? '回答を受け付けています' : ''}
    </div>
  );
};

import { respAcceptToggleAtom } from '@/store/RespAcceptToggleAtom';
import React from 'react';
import { useRecoilState } from 'recoil';

export const AnsswerMessage: React.FC = () => {
  const [isAccepting] = useRecoilState(respAcceptToggleAtom);

  return (
    <div className='flex justify-center items-center container mx-auto p-4 max-w-3xl bg-white rounded-lg shadow-md  mb-4'>
      {isAccepting ? '回答を受け付けています' : ''}
    </div>
  );
};

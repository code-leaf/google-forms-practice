'use client'; // クライアントサイドでの実行を明示

import { AnsswerMessage } from '@/app/answerPage/components/AnsswerResMessage';
import { AnswerPageMain } from '@/app/answerPage/components/AnswerPageMain';
import { RecoilRoot } from 'recoil';

export const AnswerPage = () => {
  return (
    <div className='max-w-4xl mx-auto w-full'>
      <RecoilRoot>
        <AnswerPageMain />
        <AnsswerMessage />
      </RecoilRoot>
    </div>
  );
};

// このファイルをクライアントコンポーネントとして指定
'use client';

import { questionsAtom } from '@/store/questionsAtom';
import React from 'react';
import { useAtom } from 'jotai';
import FormHeader from './GoogleFormClone/FormHeader';
import { Transition } from './GoogleFormClone/Transition';

// フォームコンポーネント
const GoogleFormClone: React.FC = () => {
  // Jotaiの状態を使用
  const [questions, setQuestions] = useAtom(questionsAtom);

  return (
    <div className='p-4 '>
      <FormHeader />
      {/* 質問のリスト */}
      {questions.map((question) => (
        <Transition key={question.id} questionId={question.id} />
      ))}
    </div>
  );
};

export default GoogleFormClone;

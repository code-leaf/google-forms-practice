import { questionsAtom } from '@/store/questionsAtom';
import React from 'react';
import { useRecoilState } from 'recoil';
import FormHeader from './GoogleFormClone/FormHeader';
import { Transition } from './GoogleFormClone/Transition';

// フォームコンポーネント
const GoogleFormClone: React.FC = () => {
  // Recoilの状態を使用
  const [questions, setQuestions] = useRecoilState(questionsAtom);

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

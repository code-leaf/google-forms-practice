// 必要なコンポーネントとフックをインポート
import React, { useCallback } from 'react';
// Recoilのフックをインポート
import { useRecoilState } from 'recoil';
// 質問のatomをインポート
import { Question, questionsAtom } from '@/store/questionsAtom';
import FormHeader from './FormHeader';
import { Transition } from './Transition';

// フォームコンポーネント
const GoogleFormClone: React.FC = () => {
  // Recoilの状態を使用
  const [questions, setQuestions] = useRecoilState(questionsAtom);

  // 質問を削除する関数
  const removeQuestion = useCallback(
    (id: string) => {
      setQuestions(questions.filter((question) => question.id !== id));
    },
    [questions, setQuestions]
  );

  // 質問を更新する関数
  const updateQuestion = useCallback(
    (id: string, updates: Partial<Question>) => {
      setQuestions(
        questions.map((question) =>
          question.id === id ? { ...question, ...updates } : question
        )
      );
    },
    [questions, setQuestions]
  );

  return (
    <div className='p-4 '>
      <FormHeader />
      {/* 質問のリスト */}
      {questions.map((question) => (
        <Transition
          key={question.id}
          question={question}
          removeQuestion={removeQuestion}
          updateQuestion={updateQuestion}
        />
      ))}
    </div>
  );
};

export default GoogleFormClone;

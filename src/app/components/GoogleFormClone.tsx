// 必要なコンポーネントとフックをインポート
import React, { useCallback } from 'react';
// Recoilのフックをインポート
import { useRecoilState } from 'recoil';
// 質問のatomをインポート
import { Question, questionsAtom } from '@/store/QuestionsAtom';
import FormHeader from './FormHeader';
import { Transition } from './Transition';

// フォームコンポーネント
const GoogleFormClone: React.FC = () => {
  // Recoilの状態を使用
  const [questions, setQuestions] = useRecoilState(questionsAtom);

  // 質問を削除する関数
  const removeQuestion = useCallback(
    (id: string) => {
      setQuestions(questions.filter((q) => q.id !== id));
    },
    [questions, setQuestions]
  );

  // 質問を更新する関数
  const updateQuestion = useCallback(
    (id: string, updates: Partial<Question>) => {
      setQuestions(
        questions.map((q) => (q.id === id ? { ...q, ...updates } : q))
      );
    },
    [questions, setQuestions]
  );

  return (
    // フォーム全体のコンテナ - 中央寄せとmax-widthを設定
    <div className='container mx-auto p-4 max-w-3xl'>
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

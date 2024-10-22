import { TransitionProps } from '@/app/components/Transition';
import { Question, questionSelector } from '@/store/questionsAtom';
import { QuestionType } from '@/types/formTypes';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

type UseTransition = {
  question: Question | undefined;
  removeQuestion: (id: string) => void;
  updateQuestion: (updates: Partial<Question>) => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (value: string) => void;
  handleOptionChange: (index: number, value: string) => void;
  handleAddOption: () => void;
};

export const useTransition = ({
  questionId,
}: TransitionProps): UseTransition => {
  const [questions, setQuestions] = useRecoilState(questionSelector);
  const question = questions.find((q) => q.id === questionId);

  // 質問を削除する関数
  const removeQuestion = useCallback(
    (id: string) => {
      setQuestions(questions.filter((question) => question.id !== id));
    },
    [questions, setQuestions]
  );

  // 質問を更新する関数
  const updateQuestion = useCallback(
    // 関数は質問のIDと、更新したい属性（の一部）を受け取ります。
    (updates: Partial<Question>) => {
      setQuestions(
        questions.map((question) =>
          // 質問のIDが更新対象のIDと一致したら、updatesで指定された属性だけを上書きします。
          question.id === questionId ? { ...question, ...updates } : question
        )
      );
    },
    [questions, setQuestions, questionId]
  );

  // タイトル変更ハンドラ
  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateQuestion({ title: e.target.value });
    },
    [updateQuestion]
  );

  // タイプ変更ハンドラ
  const handleTypeChange = useCallback(
    (value: string) => {
      updateQuestion({ type: value as QuestionType });
    },
    [updateQuestion]
  );

  // オプション変更ハンドラ
  const handleOptionChange = useCallback(
    (index: number, value: string) => {
      const question = questions.find((q) => q.id === questionId);
      if (question) {
        const newOptions = [...(question.options || [])];
        newOptions[index] = value;
        updateQuestion({ options: newOptions });
      }
    },
    [questionId, questions, updateQuestion]
  );

  // 新しいオプション追加ハンドラ
  const handleAddOption = useCallback(() => {
    const question = questions.find((q) => q.id === questionId);
    if (question) {
      const newOptions = [...(question.options || []), ''];
      updateQuestion({ options: newOptions });
    }
  }, [questionId, questions, updateQuestion]);
  return {
    question,
    handleTitleChange,
    handleTypeChange,
    handleOptionChange,
    handleAddOption,
    removeQuestion,
    updateQuestion,
  };
};

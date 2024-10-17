import { TransitionProps } from '@/app/components/Transition';
import { QuestionType } from '@/types/formTypes';
import { useCallback } from 'react';

type UseTransition = {
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (value: string) => void;
  handleOptionChange: (index: number, value: string) => void;
  handleAddOption: () => void;
  handleRequiredChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveQuestion: () => void;
};

export const useTransition = ({
  question,
  removeQuestion,
  updateQuestion,
}: TransitionProps): UseTransition => {
  // タイトル変更ハンドラ
  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateQuestion(question.id, { title: e.target.value });
    },
    [question.id, updateQuestion]
  );

  // タイプ変更ハンドラ
  const handleTypeChange = useCallback(
    (value: string) => {
      updateQuestion(question.id, { type: value as QuestionType });
    },
    [question.id, updateQuestion]
  );

  // オプション変更ハンドラ
  const handleOptionChange = useCallback(
    (index: number, value: string) => {
      const newOptions = [...(question.options || [])];
      newOptions[index] = value;
      updateQuestion(question.id, { options: newOptions });
    },
    [question.id, question.options, updateQuestion]
  );

  // 新しいオプション追加ハンドラ
  const handleAddOption = useCallback(() => {
    const newOptions = [...(question.options || []), ''];
    updateQuestion(question.id, { options: newOptions });
  }, [question.id, question.options, updateQuestion]);

  // 必須設定変更ハンドラ
  const handleRequiredChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateQuestion(question.id, { required: e.target.checked });
    },
    [question.id, updateQuestion]
  );

  // 質問削除ハンドラ
  const handleRemoveQuestion = useCallback(() => {
    removeQuestion(question.id);
  }, [question.id, removeQuestion]);

  return {
    handleTitleChange,
    handleTypeChange,
    handleOptionChange,
    handleAddOption,
    handleRequiredChange,
    handleRemoveQuestion,
  };
};

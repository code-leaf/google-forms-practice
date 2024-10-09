import { TransitionProps } from '@/app/components/Transition';
import { QuestionType } from '@/store/questionsAtom';
import { useCallback, useMemo } from 'react';

type UseTransition = {
  questionTypes: {
    value: string;
    label: string;
  }[];
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
  // メモ化された質問タイプの選択肢
  const questionTypes = useMemo(
    () => [
      { value: 'shortAnswer', label: '短文回答' },
      { value: 'paragraph', label: '段落' },
      { value: 'multipleChoice', label: '単一選択' },
      { value: 'checkboxes', label: '複数選択' },
    ],
    []
  );

  // タイトル変更ハンドラ
  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateQuestion(question.id, { title: e.target.value });
    },
    [question.id, updateQuestion]
  );

  // タイプ変更ハンドラ
  const handleTypeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateQuestion(question.id, { type: e.target.value as QuestionType });
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
    questionTypes,
    handleTitleChange,
    handleTypeChange,
    handleOptionChange,
    handleAddOption,
    handleRequiredChange,
    handleRemoveQuestion,
  };
};

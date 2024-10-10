import { TransitionProps } from '@/app/components/Transition';
import { QuestionType } from '@/store/questionsAtom';
import { DropdownOption } from '@/types/formTypes';
import {
  faAlignLeft,
  faCalendarDays,
  faCaretDown,
  faCircleDot,
  faClock,
  faFileUpload,
  faParagraph,
  faSliders,
  faSquareCheck,
  faTableCellsLarge,
} from '@fortawesome/free-solid-svg-icons';
import { useCallback, useMemo } from 'react';

type UseTransition = {
  questionTypes: DropdownOption[];
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
  const questionTypes: DropdownOption[] = useMemo(
    () => [
      { value: 'shortAnswer', label: '記述式（短文）', icon: faAlignLeft },
      { value: 'paragraph', label: '段落', icon: faParagraph },
      { value: 'multipleChoice', label: 'ラジオボタン', icon: faCircleDot },
      { value: 'checkboxes', label: 'チェックボックス', icon: faSquareCheck },
      { value: 'dropdown', label: 'プルダウン', icon: faCaretDown },
      {
        value: 'fileUpload',
        label: 'ファイルのアップロード',
        icon: faFileUpload,
      },
      { value: 'linearScale', label: '均等目盛', icon: faSliders },
      {
        value: 'multipleChoiceGrid',
        label: '選択式（グリッド）',
        icon: faTableCellsLarge,
      },
      {
        value: 'checkboxGrid',
        label: 'チェックボックス（グリッド）',
        icon: faTableCellsLarge,
      },
      { value: 'date', label: '日付', icon: faCalendarDays },
      { value: 'time', label: '時刻', icon: faClock },
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

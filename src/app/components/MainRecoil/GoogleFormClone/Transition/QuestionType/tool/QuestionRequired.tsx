import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { useTransition } from '@/hooks/useTransition';
import { Question } from '@/store/questionsAtom';
import { useCallback } from 'react';

type QuestionRequiredProps = {
  questionId: string;
  updateQuestion: (updates: Partial<Question>) => void;
};

export const QuestionRequired = ({
  questionId,
  updateQuestion,
}: QuestionRequiredProps) => {
  const { question } = useTransition({ questionId });

  // 必須設定変更ハンドラ
  const handleRequiredChange = useCallback(() => {
    if (question) {
      updateQuestion({ required: !question.required });
    }
  }, [question?.required, updateQuestion]);

  if (!question) return null;

  return (
    <div className='flex justify-center items-center pl-2'>
      <p>必須</p>
      <ToggleButton
        isChecked={question.required}
        limitOneRespons={false}
        onChange={handleRequiredChange}
      />
    </div>
  );
};

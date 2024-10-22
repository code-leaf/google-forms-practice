import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { Question } from '@/store/questionsAtom';
import { useCallback, useState } from 'react';

type QuestionRequiredProps = {
  questionId: string;
  updateQuestion: (updates: Partial<Question>) => void;
};

export const QuestionRequired = ({
  questionId,
  updateQuestion,
}: QuestionRequiredProps) => {
  const [required, setRequired] = useState<boolean>(false);

  // 必須設定変更ハンドラ
  const handleRequiredChange = useCallback(() => {
    const newRequired = !required;
    updateQuestion({ required: newRequired });
    setRequired(newRequired);
  }, [required, updateQuestion]);

  return (
    <div className='flex justify-center items-center'>
      <p>必須</p>
      <ToggleButton
        isChecked={required}
        limitOneRespons={false}
        onChange={handleRequiredChange}
      />
    </div>
  );
};

import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { useState } from 'react';

type questionDefaultAccordionProps = {
  questionDefault: boolean;
};

export const QuestionDefault = ({
  questionDefault,
}: questionDefaultAccordionProps) => {
  const [questionRequired, setQuestionRequired] = useState<boolean>(false);
  return (
    <div>
      {questionDefault && (
        <div className='pl-6 mt-6 space-y-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg'>デフォルトで質問を必須項目にする</h2>
            <ToggleButton
              isChecked={questionRequired}
              onChange={() => setQuestionRequired((prev) => !prev)}
              limitOneRespons={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

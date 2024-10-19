import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { useState } from 'react';

type QuestionRequiredProps = {
  handleRequiredChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const QuestionRequired = ({
  handleRequiredChange,
}: QuestionRequiredProps) => {
  const [required, setRequired] = useState<boolean>(false);

  return (
    <div className='flex justify-center items-center'>
      <p>必須</p>
      <ToggleButton
        isChecked={required}
        limitOneRespons={false}
        onChange={() => {
          setRequired((prev) => !prev);
        }}
      />
    </div>
  );
};

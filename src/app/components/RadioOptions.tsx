import { useState } from 'react';

type RadioOptionProps = {
  handleOptionChange: (index: number, value: string) => void;
  handleAddOption: () => void;
  type: 'multipleChoice' | 'checkboxes';
};

export const RadioOptions = ({
  handleOptionChange,
  handleAddOption,
  type,
}: RadioOptionProps) => {
  const [options, setOptions] = useState<string[]>(['選択肢1']);
  const addOption = () => {
    setOptions([...options, `選択肢${options.length + 1}`]);
  };
  return <div>RadioOptions</div>;
};

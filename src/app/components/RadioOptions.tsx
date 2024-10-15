import { useState } from 'react';

type RadioOptionProps = {
  type: 'multipleChoice' | 'checkboxes';
};

export const RadioOptions = ({ type }: RadioOptionProps) => {
  const [options, setOptions] = useState<string[]>(['選択肢1']);
  const addOption = () => {
    setOptions([...options, `選択肢${options.length + 1}`]);
  };

  const updateOptionText = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };
  return (
    <div>
      {(options || []).map((option, index) => (
        <div key={index} className='flex items-center mb-2'>
          <input
            type={type === 'multipleChoice' ? 'radio' : 'checkbox'}
            id={`option-${index}`}
            disabled
            name='options'
            className='mr-2'
          />
          <input
            type='text'
            value={option}
            onChange={(e) => updateOptionText(index, e.target.value)}
            className='flex-grow w-full border-b border-b-white hover:border-b-gray-200 p-2 bg-white  focus:border-b-purple-500'
            placeholder={`選択肢 ${index + 1}`}
          />
        </div>
      ))}
      <div className='flex items-center mb-2'>
        <input
          type={type === 'multipleChoice' ? 'radio' : 'checkbox'}
          id={`option-${options.length + 1}`}
          disabled
          name='options'
          className='mr-2'
        />
        <button
          onClick={addOption}
          className='text-gray-400 hover:underline mr-2'
        >
          選択肢を追加
        </button>
      </div>
    </div>
  );
};

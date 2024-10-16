import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type RadioOptionProps = {
  type: 'multipleChoice' | 'checkboxes';
};

export const RadioOptions = ({ type }: RadioOptionProps) => {
  const [options, setOptions] = useState<string[]>(['']);

  const [isOther, setIsOther] = useState<boolean>(true);

  const addOption = () => {
    setOptions([...options, ``]);
  };

  const addOther = () => {
    setOptions([...options, `その他...`]);
    setIsOther(false);
  };

  const updateOptionText = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
    if (options[index] === `その他...`) {
      setIsOther(true);
    }
  };

  return (
    <div>
      {/* 選択肢の表示 */}
      {options.map((option, index) => (
        <div key={index} className='flex items-center mb-2 group'>
          <input
            type={type === 'multipleChoice' ? 'radio' : 'checkbox'}
            aria-label='チェックボックスの設定'
            id={`option-${index}`}
            disabled
            name='options'
            className='mr-2'
          />
          <div className='relative p-2 w-full flex-grow border-transparent bg-transparent transition-colors duration-200 focus-within:outline-none'>
            <input
              type='text'
              aria-label='選択肢の内容設定'
              value={option}
              onChange={(e) => updateOptionText(index, e.target.value)}
              className='w-full bg-transparent focus:outline-none'
              placeholder={`選択肢 ${index + 1}`}
            />
            <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 origin-center transform -translate-x-1/2 group-focus-within:w-full'></span>
          </div>
          {options.length > 1 && (
            <button
              className='ml-2 text-gray-400 '
              title='削除'
              onClick={() => removeOption(index)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          )}
        </div>
      ))}

      {/* 選択肢の追加フィールド */}
      <div className='flex items-center mb-2'>
        <input
          type={type === 'multipleChoice' ? 'radio' : 'checkbox'}
          aria-label='選択肢の内容設定'
          id={`option-${options.length + 1}`}
          disabled
          name='options'
          className='mr-2'
        />
        <button
          onClick={addOption}
          className='text-gray-400 border-b-2 border-b-white hover:border-b-gray-200 mr-2 p-2'
        >
          選択肢を追加
        </button>
        {/* その他が表示されていない場合のみ、設定できる */}
        {isOther && (
          <div className='flex'>
            <p>または</p>
            <button onClick={addOther} className='text-blue-400 mr-2'>
              「その他」を追加
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

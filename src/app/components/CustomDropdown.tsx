import { DropdownOption } from '@/types/formTypes';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type CustomDropdownProps = {
  options: DropdownOption[];
  value: string;
  classname?: string;
  onChange: (value: string) => void;
};

export const CustomDropdown = ({
  options,
  value,
  classname = '',
  onChange,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={`relative text-gray-600 ${classname}`}>
      {/* ボタン */}
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className='mb-4 p-2 border rounded focus:outline-none w-full text-left flex items-center justify-between'
        type='button'
      >
        <span className='flex items-center'>
          {selectedOption && (
            <div>
              <FontAwesomeIcon icon={selectedOption.icon} className='mr-2' />
              {selectedOption.label}
            </div>
          )}
        </span>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {/* 選択肢 */}
      {isOpen && (
        <div className='absolute z-10 w-full bg-white border rounded mt-1'>
          {options.map((option) => (
            <div
              className='p-2 hover:bg-gray-100 cursor-pointer flex items-center'
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <FontAwesomeIcon icon={option.icon} className='mr-2' />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

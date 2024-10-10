import { DropdownOption } from '@/types/formTypes';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type CustomDropdownProps = {
  options: DropdownOption[];
  value: string;
  classname?: string;
};

export const CustomDropdown = ({
  options,
  value,
  classname = '',
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
      <div className={`relative ${classname}`}>
          
          {/* ボタン */}
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className='mb-4 p-2 border rounded focus:outline-none  focus:ring-2 focus:ring-purple-500 w-full text-left flex items-center justify-between'
        type='button'
      >
        <span className='flex items-center'>
          {selectedOption && (
            <div className='space-x-2'>
              <FontAwesomeIcon icon={selectedOption.icon} />
              {selectedOption.label}
            </div>
          )}
        </span>
        <FontAwesomeIcon icon={faChevronDown} />
          </button>
          
          {/*  */}
          
    </div>
  );
};

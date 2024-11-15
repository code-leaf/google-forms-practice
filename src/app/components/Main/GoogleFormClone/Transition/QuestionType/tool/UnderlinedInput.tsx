'use client';
import { linearScaleLabelAtom } from '@/store/linearScaleLabelAtom';
import { useRecoilState } from 'recoil';

type UnderlinedInputProps = {
  value: number;
  className?: string;
};

export const UnderlinedInput = ({ value, className }: UnderlinedInputProps) => {
  const [labels, setLabels] = useRecoilState(linearScaleLabelAtom);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabels((prev) => ({
      ...prev,
      [value]: e.target.value,
    }));
  };

  return (
    <div
      className={`group flex items-center relative flex-grow border-transparent bg-transparent transition-colors duration-200 focus-within:outline-none ${className}`}
    >
      <span className='w-8'>{value}</span>
      <input
        type='text'
        placeholder='ラベル（省略可）'
        value={labels[value] || ''}
        onChange={handleInputChange}
        className='w-1/3 border-b border-b-gray-300 p-1 flex-grow  bg-transparent focus:outline-none'
      />
      <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 origin-center transform -translate-x-1/2 group-focus-within:w-full'></span>
    </div>
  );
};

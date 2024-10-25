type UnderlinedInputProps = {
  value: number;
};

export const UnderlinedInput = ({value}: UnderlinedInputProps) => {
  return (
    <div className='group flex items-center relative flex-grow border-transparent bg-transparent transition-colors duration-200 focus-within:outline-none'>
      <span className='w-8'>{value}</span>
      <input
        type='text'
        placeholder='ラベル（省略可）'
        className='w-1/3 border-b border-b-gray-300 p-1 flex-grow  bg-transparent focus:outline-none'
      />
      <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 origin-center transform -translate-x-1/2 group-focus-within:w-full'></span>
    </div>
  );
};

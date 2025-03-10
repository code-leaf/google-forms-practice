type PreviewInputProps = {
  placeholder: string;
  className?: string;
};

export const PreviewInput = ({ placeholder,className }: PreviewInputProps) => {
  return (
    <div
      className={`group flex items-center border-transparent bg-transparent transition-colors duration-200 focus-within:outline-none ${className}`}
    >
      <div className='relative flex-grow border-b border-b-gray-300'>
        <input
          type='text'
          placeholder={placeholder}
          className='p-1 flex-grow bg-transparent focus:outline-none'
        />
        <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 origin-center transform -translate-x-1/2 group-focus-within:w-full'></span>
      </div>
    </div>
  );
};

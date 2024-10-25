import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';

export const QuestionSettings = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className='rounded-full h-12 w-12 hover:bg-gray-100 focus-within:bg-gray-100'
          title='その他のオプション'
        >
          <FontAwesomeIcon icon={faEllipsisVertical} className='h-6 w-6' />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className='w-52 p-4 bg-white rounded-md shadow-xl'
        align='start'
      >
        <div className='px2 mb-2 text-sm'>表示</div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col space-y-4'>
            <p>説明</p>
            <p>回答の検証</p>
          </div>
        </div>
        <p className='text-sm'>※この機能は準備中です。</p>
      </PopoverContent>
    </Popover>
  );
};

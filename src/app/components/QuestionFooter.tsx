import { QuestionRequired } from '@/app/components/QuestionRequired';
import {
  faCopy,
  faEllipsisVertical,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type QuestionFooterProps = {
  handleRemoveQuestion: () => void;
  handleRequiredChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const QuestionFooter = ({
  handleRemoveQuestion,
  handleRequiredChange,
}: QuestionFooterProps) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex space-x-8'>
        <button title='コピーを作成'>
          <FontAwesomeIcon icon={faCopy} className='h-6 w-6' />
        </button>
        <button title='削除' onClick={handleRemoveQuestion}>
          <FontAwesomeIcon icon={faTrash} className='h-6 w-6' />
        </button>
        <div className='w-[1px] h-10 bg-gray-300'></div>
        <QuestionRequired handleRequiredChange={handleRequiredChange}/>
        <button title='その他のオプション'>
          <FontAwesomeIcon icon={faEllipsisVertical} className='h-6 w-6' />
        </button>
      </div>
    </div>
  );
};

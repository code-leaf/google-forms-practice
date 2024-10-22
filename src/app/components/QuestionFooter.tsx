import { QuestionRequired } from '@/app/components/QuestionRequired';
import { Question } from '@/store/questionsAtom';
import {
  faCopy,
  faEllipsisVertical,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';

type QuestionFooterProps = {
  questionId: string;
  removeQuestion: (id: string) => void;
  updateQuestion: (updates: Partial<Question>) => void;
};

export const QuestionFooter = ({
  questionId,removeQuestion,updateQuestion }: QuestionFooterProps) => {
  
    // 質問削除ハンドラ
    const handleRemoveQuestion = useCallback(() => {
      removeQuestion(questionId);
    }, [questionId, removeQuestion]);

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
          <QuestionRequired questionId={questionId} updateQuestion={updateQuestion}/>
          <button title='その他のオプション'>
            <FontAwesomeIcon icon={faEllipsisVertical} className='h-6 w-6' />
          </button>
        </div>
      </div>
    );
  };

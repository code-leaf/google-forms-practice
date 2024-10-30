import { QuestionRequired } from '@/app/components/Main/GoogleFormClone/Transition/QuestionType/tool/QuestionRequired';
import { QuestionSettings } from '@/app/components/Main/GoogleFormClone/Transition/QuestionType/tool/QuestionSettings';
import { Question } from '@/store/questionsAtom';
import { faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';

type QuestionFooterProps = {
  questionId: string;
  removeQuestion: (id: string) => void;
  duplicateQuestion: (id: string) => void;
  updateQuestion: (updates: Partial<Question>) => void;
};

export const QuestionFooter = ({
  questionId,
  removeQuestion,
  updateQuestion,
  duplicateQuestion,
}: QuestionFooterProps) => {
  // 質問削除ハンドラ
  const handleRemoveQuestion = useCallback(() => {
    removeQuestion(questionId);
  }, [questionId, removeQuestion]);

  // 質問コピーハンドラを追加
  const handleDuplicateQuestion = useCallback(() => {
    duplicateQuestion(questionId);
  }, [questionId, duplicateQuestion]);

  return (
    <div className='flex justify-between items-center'>
      <div className='flex space-x-1'>
        <button
          className='rounded-full h-12 w-12 hover:bg-gray-100'
          title='コピーを作成'
          onClick={handleDuplicateQuestion}
        >
          <FontAwesomeIcon icon={faCopy} className='h-6 w-6' />
        </button>

        <button
          className='rounded-full h-12 w-12 hover:bg-gray-100'
          title='削除'
          onClick={handleRemoveQuestion}
        >
          <FontAwesomeIcon icon={faTrash} className='h-6 w-6' />
        </button>

        {/* 仕切りの棒 */}
        <div className='w-[1px] h-10 bg-gray-300'></div>

        {/* 必須部分の設定コンポーネント */}
        <QuestionRequired
          questionId={questionId}
          updateQuestion={updateQuestion}
        />
        <QuestionSettings />
      </div>
    </div>
  );
};

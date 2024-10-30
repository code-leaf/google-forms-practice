import { PreviewQuestionType } from '@/app/formPreview/components/PreviewQuestionType';
import { useTransition } from '@/hooks/useTransition';

type PreviewAnswerProps = {
  questionId: string;
};

export const PreviewAnswer = ({ questionId }: PreviewAnswerProps) => {
  const { question } = useTransition({ questionId });

  if (!question) return null;

  return (
    <div className='bg-white rounded-lg shadow-md px-6 py-4 mb-4 text-gray-600 '>
      <PreviewQuestionType question={question} />
    </div>
  );
};

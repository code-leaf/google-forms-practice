import { Grid } from '@/app/components/Main/GoogleFormClone/Transition/QuestionType/tool/Grid';

type CheckboxGridProps = {
  questionType: 'multipleChoiceGrid' | 'checkboxGrid';
  questionId: string;
};

export const CheckboxGrid = ({
  questionType,
  questionId,
}: CheckboxGridProps) => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* 左側 */}
        <Grid value='行' questionId={questionId} />

        {/* 右側 */}
        <Grid questionType={questionType} value='列' questionId={questionId} />
      </div>
    </div>
  );
};

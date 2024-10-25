import { Grid } from '@/app/components/MainRecoil/GoogleFormClone/Transition/QuestionType/tool/Grid';

type CheckboxGridProps = {
  questionType: 'multipleChoiceGrid' | 'checkboxGrid';
};

export const CheckboxGrid = ({ questionType }: CheckboxGridProps) => {

  
  return (
    <div className='w-full'>
      <div className='flex space-x-4'>
        {/* 左側 */}
        <Grid value='行' />

        {/* 右側 */}
        <Grid questionType={questionType} value='列' />
      </div>
    </div>
  );
};

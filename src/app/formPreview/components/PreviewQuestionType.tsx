import { PreviewInput } from '@/app/formPreview/components/PreviewQuestionType/PreviewInput';
import { Question } from '@/store/questionsAtom';

type PreviewQuestionTypeProps = {
  question: Question;
};

export const PreviewQuestionType = ({ question }: PreviewQuestionTypeProps) => {
  switch (question.type) {
    case 'shortAnswer':
    case 'paragraph':
      return (
        <div className='text-gray-600 space-y-4'>
          <h2>{question.title}</h2>
          <PreviewInput
            className={question.type === 'shortAnswer' ? 'pr-80' : ''}
          />
        </div>
      );

    // case 'multipleChoice':
    // case 'checkboxes':
    // case 'dropdown':
    //   return <RadioOptions type={question.type} />;
    // case 'fileUpload':
    //   return <div className='flex justify-center items-center'>準備中</div>;
    // case 'linearScale':
    //   return <LinearScale />;
    // case 'multipleChoiceGrid':
    // case 'checkboxGrid':
    //   return <CheckboxGrid questionType={question.type} />;
    // case 'date':
    //   return <IconInput icon='date' value='年 月 日' faIcon={faCalendar} />;
    // case 'time':
    //   return <IconInput icon='time' value='時刻' faIcon={faClock} />;
    default:
      return null;
  }
};

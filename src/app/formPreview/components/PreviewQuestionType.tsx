import { PreviewInput } from '@/app/formPreview/components/PreviewQuestionType/PreviewInput';
import { Question } from '@/store/questionsAtom';

type PreviewQuestionTypeProps = {
  question: Question;
};

export const PreviewQuestionType = ({ question }: PreviewQuestionTypeProps) => {
  switch (question.type) {
    case 'shortAnswer':
      return <PreviewInput title={question.title} className='pr-80' />;
    case 'paragraph':
      return (
        <div className='pr-32'>
          <input
            placeholder='長文回答'
            className='w-full border-b-2 p-2 bg-white'
            disabled
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

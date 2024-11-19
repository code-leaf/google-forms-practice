import { PreviewDropdown } from '@/app/formPreview/components/PreviewQuestionType/PreviewDropdown';
import { PreviewInput } from '@/app/formPreview/components/PreviewQuestionType/PreviewInput';
import { PreviewLinearScale } from '@/app/formPreview/components/PreviewQuestionType/PreviewLinearScale';
import { PreviewRadioOptions } from '@/app/formPreview/components/PreviewQuestionType/PreviewRadioOptions';
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
            placeholder='回答を入力'
            className={question.type === 'shortAnswer' ? 'pr-80' : ''}
          />
        </div>
      );

    case 'multipleChoice':
    case 'checkboxes':
      return (
        <div className='text-gray-600 space-y-4'>
          <h2>{question.title}</h2>
          <PreviewRadioOptions type={question.type} questionId={question.id} />
        </div>
      );
    case 'dropdown':
      return (
        <div>
          <h2>{question.title}</h2>
          <PreviewDropdown questionId={question.id} />;
        </div>
      );
    case 'fileUpload':
      return <div className='flex justify-center items-center'>準備中</div>;
    case 'linearScale':
      return (
        <div>
          <h2>{question.title}</h2>
          <PreviewLinearScale questionId={question.id} />
        </div>
      );
    case 'multipleChoiceGrid':
    case 'checkboxGrid':
    // case 'date':
    //   return <IconInput icon='date' value='年 月 日' faIcon={faCalendar} />;
    // case 'time':
    //   return <IconInput icon='time' value='時刻' faIcon={faClock} />;
    default:
      return null;
  }
};

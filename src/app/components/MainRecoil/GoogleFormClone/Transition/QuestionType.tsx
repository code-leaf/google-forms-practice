import { LinearScale } from '@/app/components/MainRecoil/GoogleFormClone/Transition/QuestionType/LinearScale';
import { RadioOptions } from '@/app/components/MainRecoil/GoogleFormClone/Transition/QuestionType/RadioOptions';
import { Question } from '@/store/questionsAtom';
import React from 'react';

type QuestionType = {
  question: Question;
};

export const QuestionType: React.FC<QuestionType> = ({
  question,
}) => {
  switch (question.type) {
    case 'shortAnswer':
      return (
        <div className='md:pr-80'>
          <input
            type='text'
            placeholder='短文回答'
            className='w-full border-b-2 p-2 bg-white'
            disabled
          />
        </div>
      );
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
    case 'multipleChoice':
    case 'checkboxes':
    case 'dropdown':
      return <RadioOptions type={question.type} />;
    case 'fileUpload':
      return <div className='flex justify-center items-center'>準備中</div>;
    case 'linearScale':
      return <LinearScale />;
    case 'multipleChoiceGrid':
    case 'checkboxGrid':
      return <div></div>;
    case 'date':
      return (
        <input type='date' className='w-full p-2 border rounded' disabled />
      );
    case 'time':
      return (
        <input type='time' className='w-full p-2 border rounded' disabled />
      );
    default:
      return null;
  }
};

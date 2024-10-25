import { LinearScale } from '@/app/components/MainRecoil/GoogleFormClone/Transition/QuestionType/LinearScale';
import { RadioOptions } from '@/app/components/MainRecoil/GoogleFormClone/Transition/QuestionType/RadioOptions';
import { Question } from '@/store/questionsAtom';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type QuestionType = {
  question: Question;
  handleOptionChange: (index: number, value: string) => void;
  handleAddOption: () => void;
};

export const QuestionType: React.FC<QuestionType> = ({
  question,
  handleOptionChange,
  handleAddOption,
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
      return (
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead>
              <tr>
                <th></th>
                <th className='px-4 py-2'>列1</th>
                <th className='px-4 py-2'>列2</th>
                <th className='px-4 py-2'>列3</th>
              </tr>
            </thead>
            <tbody>
              {['行1', '行2', '行3'].map((row, index) => (
                <tr key={index}>
                  <td className='px-4 py-2'>{row}</td>
                  {[1, 2, 3].map((col) => (
                    <td key={col} className='px-4 py-2'>
                      <input
                        type={
                          question.type === 'multipleChoiceGrid'
                            ? 'radio'
                            : 'checkbox'
                        }
                        name={`row-${index}`}
                        disabled
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
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

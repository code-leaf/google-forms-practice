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
        <input
          type='text'
          placeholder='短文回答'
          className='border-b-2 p-2'
          disabled
        />
      );
    case 'paragraph':
      return (
        <input
          placeholder='長文回答'
          className='w-full border-b-2 p-2'
          disabled
        />
      );
    case 'multipleChoice':
    case 'checkboxes':
      return (
        <div>
          {(question.options || []).map((option, index) => (
            <div key={index} className='flex items-center mb-2'>
              <input
                type={question.type === 'multipleChoice' ? 'radio' : 'checkbox'}
                disabled
                className='mr-2'
              />
              <input
                type='text'
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className='flex-grow p-2 border rounded'
                placeholder={`選択肢 ${index + 1}`}
              />
            </div>
          ))}
          <button
            onClick={handleAddOption}
            className='mt-2 p-2 text-purple-600 hover:bg-purple-100 rounded transition duration-200'
          >
            選択肢を追加
          </button>
        </div>
      );
    case 'dropdown':
      return (
        <div>
          <select className='w-full p-2 border rounded' disabled>
            <option>選択してください</option>
            {(question.options || []).map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
          <div className='mt-2'>
            {(question.options || []).map((option, index) => (
              <input
                key={index}
                type='text'
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className='w-full p-2 border rounded mb-2'
                placeholder={`選択肢 ${index + 1}`}
              />
            ))}
            <button
              onClick={handleAddOption}
              className='mt-2 p-2 text-purple-600 hover:bg-purple-100 rounded transition duration-200'
            >
              選択肢を追加
            </button>
          </div>
        </div>
      );
    case 'fileUpload':
      return (
        <div className='border-dashed border-2 border-gray-300 p-4 text-center rounded'>
          <FontAwesomeIcon
            icon={faCloudArrowUp}
            className='text-4xl text-gray-400 mb-2'
          />
          <p>ファイルをドラッグ＆ドロップ</p>
          <p>または</p>
          <button className='mt-2 p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-200'>
            ファイルを選択
          </button>
        </div>
      );
    case 'linearScale':
      return (
        <div className='flex items-center space-x-4'>
          <span>1</span>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} className='flex items-center'>
              <input type='radio' name='scale' disabled className='mr-1' />
              {num}
            </label>
          ))}
          <span>5</span>
        </div>
      );
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

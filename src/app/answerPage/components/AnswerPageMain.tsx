import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Answer = { count: number; isAccepting: boolean };

export const AnswerPageMain: React.FC = () => {
  return (
    <main className='w-full text-gray-600 bg-gray-50 rounded-md p-6 pb-40 '>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold'>0 件の回答</h2>
        <button className='flex items-center  hover:bg-gray-400'>
          <FontAwesomeIcon
            icon={faFileExcel}
            className='h-10 w-10 text-green-700'
          />
          <span className='ml-2 text-blue-600'>スプレッドシートにリンク</span>
        </button>
      </div>
    </main>
  );
};

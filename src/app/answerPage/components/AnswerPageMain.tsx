import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Answer = { count: number; isAccepting: boolean };

export const AnswerPageMain: React.FC = () => {
  return (
    <main className='container mx-auto p-4 max-w-3xl'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold'>0件の回答</h2>
        <button className='flex items-center text-gray-700 hover:text-gray-800'>
          <FontAwesomeIcon icon={faFileExcel} size='lg' />
          <span className='ml-2'>スプレッドシートにリンク</span>
        </button>
      </div>

      <div className='flex items-center justify-between bg-white p-4 rounded-lg shadow mb-4'></div>
    </main>
  );
};

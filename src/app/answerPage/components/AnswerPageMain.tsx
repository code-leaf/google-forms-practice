'use client'; // クライアントサイドでの実行を明示

import { AnswerSummary } from '@/app/answerPage/components/AnswerSummary';
import { RespAcceptToggle } from '@/app/answerPage/components/RespAcceptToggle';
import { questionsAtom } from '@/store/questionsAtom';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

export const AnswerPageMain = () => {
  // Recoilを使用して質問のデータを取得
  const questions = useRecoilValue(questionsAtom);
  return (
    <div className='container mx-auto p-4 max-w-3xl text-gray-600 bg-gray-50 rounded-md  mb-4'>
      {/* 回答件数とスプレッドシートへのリンクを表示 */}
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold'>0 件の回答</h2>
        <Link href='spreadsheet'>
          <button className='flex items-center  hover:bg-gray-400'>
            <FontAwesomeIcon
              icon={faFileExcel}
              className='h-10 w-10 text-green-700'
            />
            <span className='ml-2 text-blue-600'>スプレッドシートにリンク</span>
          </button>
        </Link>
      </div>
      <RespAcceptToggle />
      <AnswerSummary questions={questions} />
    </div>
  );
};

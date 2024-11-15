'use client'; // クライアントサイドでの実行を明示

import { PreviewAnswer } from '@/app/formPreview/components/PreviewAnswer';
import { PreviewHeader } from '@/app/formPreview/components/PreviewHeader';
import { questionsAtom } from '@/store/questionsAtom';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

const FormPreview = () => {
  const questions = useRecoilValue(questionsAtom);

  return (
    <main className='min-h-screen bg-purple-100'>
      <div className='flex flex-col  items-center'>
        <div className='flex justify-center'>
          <div className='flex-col'>
            <PreviewHeader />
            {/* 質問のリスト */}
            {questions.map((question) => (
              <PreviewAnswer key={question.id} questionId={question.id} />
            ))}
            <div className='flex justify-between items-center'>
              <Link href='/test'>
                <button className='px-4 py-2 w-20 bg-purple-800 text-white rounded hover:bg-purple-700 transition'>
                  送信
                </button>
              </Link>

              <button className='px-4 py-2 text-purple-800 hover:bg-opacity-20 hover:bg-purple-200'>
                フォームをクリア
              </button>
            </div>
          </div>
        </div>
        <div className='text-gray-600 text-2xl mt-4'>Google Form練習</div>
      </div>
    </main>
  );
};

export default FormPreview;

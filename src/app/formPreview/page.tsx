'use client'; // クライアントサイドでの実行を明示

import { PreviewAnswer } from '@/app/formPreview/components/PreviewAnswer';
import { PreviewHeader } from '@/app/formPreview/components/PreviewHeader';
import { questionsAtom } from '@/store/questionsAtom';
import { useRecoilValue } from 'recoil';

const FormPreview = () => {
  const questions = useRecoilValue(questionsAtom);

  return (
    <main className='min-h-screen bg-purple-100'>
      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <PreviewHeader />
          {/* 質問のリスト */}
          {questions.map((question) => (
            <PreviewAnswer key={question.id} questionId={question.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FormPreview;

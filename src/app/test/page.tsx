'use client';

import { questionsAtom } from '@/store/questionsAtom';
import { useRecoilState } from 'recoil';

export default function Test() {
  const [questions, setQuestions] = useRecoilState(questionsAtom);

  // デバッグ用のログ追加
  console.log('Questions:', questions);

  // 質問が存在しない場合のハンドリング追加
  if (!questions || questions.length === 0) {
    return <div className='p-4'>質問がまだありません</div>;
  }

  return (
    <div className='p-4'>
      {questions.map((question) => (
        <div key={question.id} className='mb-4 p-2 border rounded'>
          <h3 className='font-bold mb-2'>{question.title}</h3>
          <p>選択された回答: {question.answer || '未回答'}</p>
          {/* デバッグ用に質問の全データを表示 */}
          <pre className='text-sm mt-2 bg-gray-100 p-2'>
            {JSON.stringify(question, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
}

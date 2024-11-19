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

  // 回答を表示用の文字列に変換する関数
  const formatAnswer = (answer: any) => {
    if (!answer) return '未回答';

    // オブジェクトの場合（グリッド形式の回答）
    if (typeof answer === 'object') {
      return `${answer.value}`;
    }

    // 文字列や数値の場合（通常の回答）
    return answer.toString();
  };

  return (
    <div className='p-4'>
      {questions.map((question) => (
        <div key={question.id} className='mb-4 p-2 border rounded'>
          <h3 className='font-bold mb-2'>{question.title}</h3>
          <p>選択された回答: {formatAnswer(question.answer)}</p>
          {/* デバッグ用に質問の全データを表示 */}
          <pre className='text-sm mt-2 bg-gray-100 p-2'>
            {JSON.stringify(question, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
}

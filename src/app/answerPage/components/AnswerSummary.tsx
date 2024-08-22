import { QuestionChart } from '@/app/answerPage/components/QuestionChart';
import { answersAtom } from '@/store/answersAtom';
import { Question } from '@/store/questionsAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';

type AnswerSummaryProps = { questions: Question[] };

export const AnswerSummary: React.FC<AnswerSummaryProps> = ({ questions }) => {
  // Recoil から回答データを取得
  const answers = useRecoilValue(answersAtom);

  // 回答がない場合は何も表示しない
  if (answers.length === 0) {
    return null;
  }

  // 回答データを集計する関数
  


  return (
    <div>
      {/* 質問リストをマップして各質問を表示 */}
      {questions.map((question) => (
        <div key={question.id} className='mb-4 bg-white p-4 rounded-lg shadow'>
          <h2 className='text-xl font-semibold mb-2'>{question.title}</h2>
          {/* 多肢選択または複数選択の質問の場合、グラフを表示 */}
          {(question.type === 'multipleChoice' ||
            question.type === 'checkboxes') && (
            <QuestionChart
              questionTitle={question.title}
              labels={question.options || []}
              // ダミーデータを生成（実際のアプリでは実際の回答データを使用）
              data={
                question.options?.map(() => Math.floor(Math.random() * 100)) ||
                []
              }
            ></QuestionChart>
          )}
        </div>
      ))}
    </div>
  );
};

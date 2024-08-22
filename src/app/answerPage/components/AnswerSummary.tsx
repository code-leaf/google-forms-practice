import { QuestionChart } from '@/app/answerPage/components/QuestionChart';
import { Question } from '@/store/questionsAtom';
import React from 'react';

type AnswerSummaryProps = { questions: Question[] };

export const AnswerSummary: React.FC<AnswerSummaryProps> = ({ questions }) => {
    return (
      <div>
        {/* 質問リストをマップして各質問を表示 */}
        {questions.map((question) => (
          <div
            key={question.id}
            className='mb-4 bg-white p-4 rounded-lg shadow'
          >
            <h2 className='text-xl font-semibold mb-2'>{question.title}</h2>
            {/* 多肢選択または複数選択の質問の場合、グラフを表示 */}
            {(question.type === 'multipleChoice' ||
              question.type === 'checkboxes') && (
              <QuestionChart
                questionTitle={question.title}
                labels={question.options || []}
                // ダミーデータを生成（実際のアプリでは実際の回答データを使用）
                data={
                  question.options?.map(() =>
                    Math.floor(Math.random() * 100)
                  ) || []
                }
              ></QuestionChart>
            )}
          </div>
        ))}
      </div>
    );
};

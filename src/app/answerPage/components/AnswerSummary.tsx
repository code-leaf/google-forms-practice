import { QuestionChart } from '@/app/answerPage/components/QuestionChart';
import { Answer, answersAtom } from '@/store/answersAtom';
import { Question } from '@/store/questionsAtom';
import React, { useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';

// AnswerSummaryPropsの型定義
type AnswerSummaryProps = { questions: Question[] };

// AnswerSummaryコンポーネントの定義
export const AnswerSummary: React.FC<AnswerSummaryProps> = ({ questions }) => {
  // Recoil から回答データを取得
  const answers = useRecoilValue(answersAtom);

  // 回答データを集計する関数
  const getAnswerCounts = useCallback(
    (questionId: string, options: string[] | undefined, answers: Answer[]) => {
      // 特定の質問に対する回答をフィルタリング
      const questionAnswers = answers.filter(
        (answer) => answer.qusetionId === questionId
      );

      // オプションごとの回答数をカウント
      const counts =
        options?.map((option) => {
          return questionAnswers.filter((answer) => {
            if (Array.isArray(answer.value)) {
              return answer.value.includes(option);
            } else {
              return answer.value === option;
            }
          }).length;
        }) || [];

      return counts;
    },
    []
  );

  // メモ化された回答サマリーデータを生成
  const answerSummaries = useMemo(() => {
    return questions.map((question) => {
      const counts = getAnswerCounts(question.id, question.options, answers);
      return {
        ...question,
        counts,
        hasAnswers: counts.some((count) => count > 0),
      };
    });
  }, [questions, answers, getAnswerCounts]);

  // 回答がない場合は何も表示しない
  if (answers.length === 0) {
    return undefined;
  }

  return (
    <div>
      {/* 質問リストをマップして各質問を表示 */}
      {answerSummaries.map((summary) => {
        // この質問に対する回答がない場合はスキップ
        if (!summary.hasAnswers) {
          return undefined;
        }

        return (
          <div key={summary.id} className='mb-4 bg-white p-4 rounded-lg shadow'>
            {/* 質問のタイトルを表示 */}
            <h2 className='text-xl font-semibold mb-2'>{summary.title}</h2>
            {/* 多肢選択または複数選択の質問の場合、グラフを表示 */}
            {(summary.type === 'multipleChoice' ||
              summary.type === 'checkboxes') && (
              <QuestionChart
                questionTitle={summary.title}
                labels={summary.options || []}
                data={summary.counts}
              />
            )}
            {/* 短答式と段落の質問の場合、回答リストを表示 */}
            {(summary.type === 'shortAnswer' ||
              summary.type === 'paragraph') && (
              <ul className='mt-4'>
                {answers
                  .filter((answer) => answer.qusetionId === summary.id)
                  .map((answer, index) => (
                    <li key={index} className='mb-2'>
                      {answer.value as string}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

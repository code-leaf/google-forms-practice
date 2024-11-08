import { TransitionProps } from '@/app/components/Main/GoogleFormClone/Transition';
import { Question, questionSelector } from '@/store/questionsAtom';
import { radioOptionsFamily } from '@/store/RadioOptionsFamily';
import { QuestionType } from '@/types/formTypes';
import { useCallback } from 'react';
import { useRecoilCallback, useRecoilState } from 'recoil';

type UseTransition = {
  question: Question | undefined;
  removeQuestion: (id: string) => void;
  updateQuestion: (updates: Partial<Question>) => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (value: string) => void;
  // handleOptionChange: (index: number, value: string) => void;
  // handleAddOption: () => void;
  duplicateQuestion: (id: string) => void;
};

export const useTransition = ({
  questionId,
}: TransitionProps): UseTransition => {
  const [questions, setQuestions] = useRecoilState(questionSelector);
  const question = questions.find((q) => q.id === questionId);

  // 質問を削除する関数
  const removeQuestion = useCallback(
    (id: string) => {
      setQuestions(questions.filter((question) => question.id !== id));
    },
    [questions, setQuestions]
  );

  // 質問を更新する関数
  const updateQuestion = useCallback(
    // 関数は質問のIDと、更新したい属性（の一部）を受け取ります。
    (updates: Partial<Question>) => {
      setQuestions(
        questions.map((question) =>
          // 質問のIDが更新対象のIDと一致したら、updatesで指定された属性だけを上書きします。
          question.id === questionId ? { ...question, ...updates } : question
        )
      );
    },
    [questions, setQuestions, questionId]
  );

  // タイトル変更ハンドラ
  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateQuestion({ title: e.target.value });
    },
    [updateQuestion]
  );

  // タイプ変更ハンドラ
  const handleTypeChange = useCallback(
    (value: string) => {
      updateQuestion({ type: value as QuestionType });
    },
    [updateQuestion]
  );

  // // オプション変更ハンドラ
  // const handleOptionChange = useCallback(
  //   (index: number, value: string) => {
  //     const question = questions.find((q) => q.id === questionId);
  //     if (question) {
  //       const newOptions = [...(question.options || [])];
  //       newOptions[index] = value;
  //       updateQuestion({ options: newOptions });
  //     }
  //   },
  //   [questionId, questions, updateQuestion]
  // );

  // // 新しいオプション追加ハンドラ
  // const handleAddOption = useCallback(() => {
  //   const question = questions.find((q) => q.id === questionId);
  //   if (question) {
  //     const newOptions = [...(question.options || []), ''];
  //     updateQuestion({ options: newOptions });
  //   }
  // }, [questionId, questions, updateQuestion]);

  /** Recoilの状態をコピーする関数
   * - useRecoilCallback: 複雑な状態管理を安全かつ効率的に行うための強力なツール
   * - async関数を返し、コピー元とコピー先のIDを引数に受け取る
   * - snapshotを使って、指定したoldIdのradioOptionsAtomの状態を取得
   * - 取得した状態を新しいID（newId）でユニークID付きの状態をセット
   * @property snapshot: 安全な状態の読み取り
   * @property set: 状態の更新
   */
  const copyRecoilState = useRecoilCallback(
    ({ snapshot, set }) =>
      async (oldId: string, newId: string) => {
        // snapshotを使って、指定したoldIdのradioOptionsAtomの状態を取得
        const sourceOptions = await snapshot.getPromise(
          radioOptionsFamily(oldId)
        );

        // 各オプションのIDをユニークにするために新しいIDを生成し直す
        const newOptions = sourceOptions.map((option) => ({
          ...option,
          id: `option_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        }));

        // 取得した状態を新しいID（newId）でradioOptionsAtomにセット
        set(radioOptionsFamily(newId), newOptions);
      }
  );

  /** 質問を複製する関数 */
  const duplicateQuestion = useCallback(
    (id: string) => {
      // 接頭辞・タイムスタンプ・ランダム文字列(乱数を36進数に変換して最後の9文字)を組み合わせて重複しないIDを生成
      const generateUniqueId = () => {
        return `question_${Date.now()}_${Math.random()
          .toString(36)
          .substr(2, 9)}`;
      };

      // 複製対象の質問をquestionsから検索
      const questionToCopy = questions.find((q) => q.id === id);

      // 質問が見つかった場合のみ処理を続行
      if (questionToCopy) {
        // 新しいユニークなIDを生成
        const newId = generateUniqueId();

        // 'multipleChoice' | 'checkboxes' | 'dropdown'の時のみRecoilの状態をコピー
        switch (questionToCopy.type) {
          case 'multipleChoice':
          case 'checkboxes':
          case 'dropdown':
            copyRecoilState(id, newId);
            break;
          default:
            break;
        }

        // コピー元の内容を継承しつつ、新しいIDとタイトルを持つ質問オブジェクトを作成
        const newQuestion: Question = {
          ...questionToCopy,
          id: newId,
          title: `${questionToCopy.title}`,
          required: questionToCopy.required,
        };

        // コピー元の質問が配列の何番目にあるかを探す
        const questionIndex = questions.findIndex((q) => q.id === id);

        // 現在の質問配列のコピーを作成（直接の変更を避けるため）
        const newQuestions = [...questions];

        // 元の質問の直後に新しい質問を追加（既存の要素は移動するだけで削除はしない）
        newQuestions.splice(questionIndex + 1, 0, newQuestion);
        setQuestions(newQuestions);
      }
    },
    [questions, setQuestions, copyRecoilState]
  );

  return {
    question,
    handleTitleChange,
    handleTypeChange,
    // handleOptionChange,
    // handleAddOption,
    removeQuestion,
    updateQuestion,
    duplicateQuestion,
  };
};

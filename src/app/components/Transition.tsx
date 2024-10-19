import { CustomDropdown } from '@/app/components/CustomDropdown';
import { QuestionFooter } from '@/app/components/QuestionFooter';
import { QuestionType } from '@/app/components/QuestionType';
import { useTransition } from '@/hooks/useTransition';
import { Question } from '@/store/questionsAtom';
import { questionTypes } from '@/types/formTypes';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition as HeadlessTransition } from '@headlessui/react';

// プロップスの型定義
export type TransitionProps = {
  question: Question;
  removeQuestion: (id: string) => void;
  updateQuestion: (id: string, updates: Partial<Question>) => void;
};

export const Transition = ({
  question,
  removeQuestion,
  updateQuestion,
}: TransitionProps) => {
  const {
    handleTitleChange,
    handleTypeChange,
    handleRequiredChange,
    handleRemoveQuestion,
    handleAddOption,
    handleOptionChange,
  } = useTransition({
    question,
    removeQuestion,
    updateQuestion,
  });

  return (
    <HeadlessTransition
      show={true} // アニメーションを常に表示する設定
      enter='transition-opacity duration-300' // フェードイン効果の設定：0.3秒かけて透明度が変化
      enterFrom='opacity-0' // フェードイン開始時：完全に透明
      enterTo='opacity-100' // フェードイン終了時：完全に不透明
      leave='transition-opacity duration-300' // フェードアウト効果の設定：0.3秒かけて透明度が変化
      leaveFrom='opacity-100' // フェードアウト開始時：完全に不透明
      leaveTo='opacity-0' // フェードアウト終了時：完全に透明
    >
      {/* 個々の質問コンテナ - 背景色と余白を設定 */}
      <div className='bg-white rounded-lg shadow-md p-6 mb-4 text-gray-600 focus-within:border-l-8 focus-within:border-l-blue-600'>
        {/* 質問種類設定部分 */}
        <div className='flex flex-wrap justify-between items-center mb-4 space-x-2'>
          {/* 質問のタイトル入力欄 */}
          <input
            placeholder='無題の質問' //プレースホルダの設定
            type='text' // テキスト入力フィールドを指定
            aria-label='質問のタイトルを入力' //スクリーンリーダーの設定
            value={question.title} // 質問のタイトルを表示
            onChange={handleTitleChange} // タイトルが変更されたときの処理
            className='p-3 mb-4 bg-gray-100 border-b-2 flex-1 border-gray-400 focus:outline-none focus:border-purple-500'
          />

          {/* 画像アイコン */}
          <div className='mb-4 flex items-center'>
            <FontAwesomeIcon icon={faImage} className='text-gray-400 mr-2' />
          </div>
          {/* セレクトボックス */}
          <CustomDropdown
            options={questionTypes}
            value={question.type}
            classname='mb-4 w-[300px] flex-none'
            onChange={handleTypeChange}
          />
        </div>

        {/* 質問タイプに応じたコンポーネント */}
        <QuestionType
          question={question}
          handleOptionChange={handleOptionChange}
          handleAddOption={handleAddOption}
        />

        <hr className='mt-14' />
        {/* 質問のフッター部分 */}
        <div className='mt-4 flex justify-end'>
          <QuestionFooter
            handleRemoveQuestion={handleRemoveQuestion}
            handleRequiredChange={handleRequiredChange}
          />
        </div>
      </div>
    </HeadlessTransition>
  );
};

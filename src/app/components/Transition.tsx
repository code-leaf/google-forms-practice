import { useTransition } from '@/hooks/useTransition';
import { Question } from '@/store/questionsAtom';
import { faImage, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
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
    questionTypes,
    handleTitleChange,
    handleTypeChange,
    handleOptionChange,
    handleAddOption,
    handleRequiredChange,
    handleRemoveQuestion,
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
      <div className='bg-white rounded-lg shadow-md p-6 mb-4 text-gray-600'>
        <div className='flex justify-between items-center mb-4 space-x-2'>
          {/* 質問のタイトル入力欄 */}
          <input
            placeholder='無題の質問' //プレースホルダの設定
            type='text' // テキスト入力フィールドを指定
            value={question.title} // 質問のタイトルを表示
            onChange={handleTitleChange} // タイトルが変更されたときの処理
            className='p-2 mb-4 w-full border-b-2 border-gray-200 focus:outline-none focus:border-purple-500'
          />

          {/* 画像アイコンの追加 */}
          <div className='mb-4 flex items-center'>
            <FontAwesomeIcon icon={faImage} className='text-gray-400 mr-2' />
          </div>

          {/* 質問タイプの選択 */}
          <select
            value={question.type} // 現在の質問タイプを表示
            onChange={handleTypeChange} // タイプが変更されたときの処理
            className='mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500'
          >
            {questionTypes.map((type) => (
              <option
                key={type.value}
                value={type.value}
                className='flex items-center space-x-2'
              >
                <FontAwesomeIcon icon={type.icon} />
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* 選択肢の入力欄（複数選択や単一選択の場合） */}
        {(question.type === 'multipleChoice' ||
          question.type === 'checkboxes') && (
          <div className='mt-4'>
            {question.options?.map((option, index) => (
              <div key={index} className='flex items-center mb-2'>
                {/* オプションの種類に応じたアイコンを表示 */}
                <span className='mr-2'>
                  {question.type === 'multipleChoice' ? '○' : '□'}
                </span>
                <input
                  type='text' // テキスト入力フィールドを指定
                  value={option} // 選択肢のテキストを表示
                  onChange={(e) => handleOptionChange(index, e.target.value)} // 選択肢が変更されたときの処理
                  className='p-1 border-b border-gray-300 focus:outline-none focus:border-purple-500 w-full'
                />
              </div>
            ))}
            {/* 選択肢追加ボタン */}
            <button
              onClick={handleAddOption} // 新しい選択肢を追加する処理
              className='mt-2 p-1 text-purple-600 hover:bg-purple-100 rounded transition duration-200'
            >
              <FontAwesomeIcon icon={faPlus} className='mr-2' />
              選択肢を追加
            </button>
          </div>
        )}

        {/* 必須チェックボックス */}
        <div className='mt-4 flex justify-end'>
          <label className='flex items-center cursor-pointer'>
            <input
              type='checkbox' // チェックボックスを指定
              checked={question.required} // 必須かどうかを表示
              onChange={handleRequiredChange} // 必須設定が変更されたときの処理
              className='form-checkbox h-5 w-5 text-purple-600'
            />
            <span className='ml-2 text-gray-700'>必須</span>
          </label>
        </div>

        {/* 質問削除ボタン */}
        <button
          onClick={handleRemoveQuestion} // 質問を削除する処理
          className='mt-4 p-2 text-red-500 hover:bg-red-100 rounded transition duration-200'
        >
          <FontAwesomeIcon icon={faTrash} className='mr-2' />
          削除
        </button>
      </div>
    </HeadlessTransition>
  );
};

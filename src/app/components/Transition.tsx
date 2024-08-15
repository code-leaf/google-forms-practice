import { Question, QuestionType } from '@/store/questionsAtom';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition as HeadlessTransition } from '@headlessui/react';
import React, { useCallback, useMemo } from 'react';

// プロップスの型定義
type TransitionProps = {
  question: Question;
  removeQuestion: (id: string) => void;
  updateQuestion: (id: string, updates: Partial<Question>) => void;
};

export const Transition: React.FC<TransitionProps> = ({
  question,
  removeQuestion,
  updateQuestion,
}) => {
  // メモ化された質問タイプの選択肢
  const questionTypes = useMemo(
    () => [
      { value: 'shortAnswer', label: '短文回答' },
      { value: 'paragraph', label: '段落' },
      { value: 'multipleChoice', label: '単一選択' },
      { value: 'checkboxes', label: '複数選択' },
    ],
    []
  );

  // タイトル変更ハンドラ
  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateQuestion(question.id, { title: e.target.value });
    },
    [question.id, updateQuestion]
  );

  // タイプ変更ハンドラ
  const handleTypeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateQuestion(question.id, { type: e.target.value as QuestionType });
    },
    [question.id, updateQuestion]
  );

  // オプション変更ハンドラ
  const handleOptionChange = useCallback(
    (index: number, value: string) => {
      const newOptions = [...(question.options || [])];
      newOptions[index] = value;
      updateQuestion(question.id, { options: newOptions });
    },
    [question.id, question.options, updateQuestion]
  );

  // 新しいオプション追加ハンドラ
  const handleAddOption = useCallback(() => {
    const newOptions = [...(question.options || []), ''];
    updateQuestion(question.id, { options: newOptions });
  }, [question.id, question.options, updateQuestion]);

  // 必須設定変更ハンドラ
  const handleRequiredChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateQuestion(question.id, { required: e.target.checked });
    },
    [question.id, updateQuestion]
  );

  // 質問削除ハンドラ
  const handleRemoveQuestion = useCallback(() => {
    removeQuestion(question.id);
  }, [question.id, removeQuestion]);

  return (
    <HeadlessTransition
      show={true}
      enter='transition-opacity duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      {/* 個々の質問コンテナ - 背景色と余白を設定 */}
      <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
        {/* 質問のタイトル入力欄 */}
        <input
          type='text' // テキスト入力フィールドを指定
          value={question.title} // 質問のタイトルを表示
          onChange={handleTitleChange} // タイトルが変更されたときの処理
          className='text-xl font-semibold mb-4 w-full border-b-2 border-gray-200 focus:outline-none focus:border-purple-500'
        />

        {/* 質問タイプの選択 */}
        <select
          value={question.type} // 現在の質問タイプを表示
          onChange={handleTypeChange} // タイプが変更されたときの処理
          className='mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500'
        >
          {questionTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

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

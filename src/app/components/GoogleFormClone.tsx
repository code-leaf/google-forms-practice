// 必要なコンポーネントとフックをインポート
import React, { useState } from 'react';
// Tailwindのユーティリティクラスを使用するためのコンポーネントをインポート
import { Transition } from '@headlessui/react';
// フォントAwesomeのアイコンコンポーネントをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// プラスアイコンと削除アイコンをインポート
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import FormHeader from './FormHeader';

// フォームの質問タイプを定義
type QuestionType =
  | 'shortAnswer'
  | 'paragraph'
  | 'multipleChoice'
  | 'checkboxes';

// 質問オブジェクトの型を定義
type Question = {
  id: string; // 質問の一意のID
  type: QuestionType; // 質問のタイプ
  title: string; // 質問のタイトル
  options?: string[]; // 選択肢（複数選択や一択の場合）
  required: boolean; // 必須回答かどうか
};

// フォームコンポーネント
const GoogleFormClone: React.FC = () => {
  // 質問のリストを管理するstate
  const [questions, setQuestions] = useState<Question[]>([]);

  // 新しい質問を追加する関数
  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: 'shortAnswer',
      title: '質問',
      required: false,
    };
    setQuestions([...questions, newQuestion]);
  };

  // 質問を削除する関数
  const removeQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  // 質問を更新する関数
  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, ...updates } : q))
    );
  };

  return (
    //  フォーム全体のコンテナ - 中央寄せとmax-widthを設定
    <div className='container mx-auto p-4 max-w-3xl'>
      <FormHeader />
      {/* 質問のリスト */}
      {questions.map((question) => (
        <Transition
          key={question.id}
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
              onChange={(e) =>
                updateQuestion(question.id, { title: e.target.value })
              } // タイトルが変更されたときの処理
              className='text-xl font-semibold mb-4 w-full border-b-2 border-gray-200 focus:outline-none focus:border-purple-500'
            />

            {/* 質問タイプの選択 */}
            <select
              value={question.type} // 現在の質問タイプを表示
              onChange={(e) =>
                updateQuestion(question.id, {
                  type: e.target.value as QuestionType,
                })
              } // タイプが変更されたときの処理
              className='mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500'
            >
              <option value='shortAnswer'>短文回答</option>
              <option value='paragraph'>段落</option>
              <option value='multipleChoice'>単一選択</option>
              <option value='checkboxes'>複数選択</option>
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
                      onChange={(e) => {
                        const newOptions = [...(question.options || [])];
                        newOptions[index] = e.target.value;
                        updateQuestion(question.id, { options: newOptions });
                      }} // 選択肢が変更されたときの処理
                      className='p-1 border-b border-gray-300 focus:outline-none focus:border-purple-500 w-full'
                    />
                  </div>
                ))}
                {/* 選択肢追加ボタン */}
                <button
                  onClick={() => {
                    const newOptions = [...(question.options || []), ''];
                    updateQuestion(question.id, { options: newOptions });
                  }} // 新しい選択肢を追加する処理
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
                  onChange={(e) =>
                    updateQuestion(question.id, { required: e.target.checked })
                  } // 必須設定が変更されたときの処理
                  className='form-checkbox h-5 w-5 text-purple-600'
                />
                <span className='ml-2 text-gray-700'>必須</span>
              </label>
            </div>

            {/* 質問削除ボタン */}
            <button
              onClick={() => removeQuestion(question.id)} // 質問を削除する処理
              className='mt-4 p-2 text-red-500 hover:bg-red-100 rounded transition duration-200'
            >
              <FontAwesomeIcon icon={faTrash} className='mr-2' />
              削除
            </button>
          </div>
        </Transition>
      ))}

      {/* 新しい質問追加ボタン */}
      <button
        onClick={addQuestion} // 新しい質問を追加する処理
        className='mt-4 p-4 bg-white text-purple-600 rounded-lg shadow-md flex items-center justify-center w-full hover:bg-purple-50 transition duration-200'
      >
        <FontAwesomeIcon icon={faPlus} className='mr-2' />
        質問を追加
      </button>
    </div>
  );
};

export default GoogleFormClone;

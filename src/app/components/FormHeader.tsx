// React関連の機能をインポート
import React, { useState } from 'react';
// フォーマットアイコンコンポーネントをインポート
import FormatIcons from './FormatIcons';
// Font Awesomeのアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
// フォーマットオプションの型をインポート
import { FormatOption } from '../types/formatTypes';

// フォームのヘッダー部分を表示するコンポーネント
const FormHeader: React.FC = () => {
  // フォームのタイトルを管理するstate
  const [formTitle, setFormTitle] = useState<string>('');
  // フォームの説明を管理するstate
  const [formDescription, setFormDescription] = useState<string>('');
  // 選択されているインプット要素を管理するstate
  const [selectedInput, setSelectedInput] = useState<
    'title' | 'description' | undefined
  >(undefined);

  // フォーマットアイコンをクリックしたときの処理
  const handleFormatClick = (option: FormatOption) => {
    // ここにフォーマットの処理を実装する
    console.log(`Format ${option} clicked for ${selectedInput}`);
  };

  return (
    // フォームのヘッダー部分 - 背景色、角丸、影、左と上のボーダーを設定
    <div className='bg-white rounded-lg shadow-md p-6 mb-4 border-t-8 border-l-8 border-t-purple-600 border-l-blue-600'>
      {/* フォームのタイトル入力欄 */}
      <div className='relative'>
        <input
          type='text' // テキスト入力フィールドを指定
          placeholder='無題のフォーム'
          value={formTitle} // フォームのタイトルを表示
          onChange={(e) => setFormTitle(e.target.value)} // タイトルが変更されたときの処理
          onFocus={() => setSelectedInput('title')} // フォーカス時に選択状態を更新
          onBlur={() => setSelectedInput(undefined)} // フォーカスが外れたときに選択状態をリセット
          //  大きなフォントサイズ、太字、下線、フォーカス時の色変更を設定
          className='text-3xl font-bold mb-2 w-full border-b-2 border-purple-300 focus:outline-none focus:border-purple-500 pr-8'
        />
        {/* 編集アイコンを追加 */}
        <FontAwesomeIcon
          icon={faEdit}
          className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
        />
      </div>
      {/* タイトルが選択されている場合のみフォーマットアイコンを表示 */}
      {selectedInput === 'title' && (
        <FormatIcons handleFormatClick={handleFormatClick} isVisible={true} />
      )}

      {/* フォームの説明入力欄 */}
      <div className='relative mt-4'>
        <input
          type='text' // テキスト入力フィールドを指定
          placeholder='フォームの説明'
          value={formDescription} // フォームの説明を表示
          onChange={(e) => setFormDescription(e.target.value)} // 説明が変更されたときの処理
          onFocus={() => setSelectedInput('description')} // フォーカス時に選択状態を更新
          onBlur={() => setSelectedInput(undefined)} // フォーカスが外れたときに選択状態をリセット
          // グレーの文字色、フォーカス時のアウトラインなし、上部マージンを設定
          className='text-gray-600 focus:outline-none w-full pr-8'
        />
        {/* 編集アイコンを追加 */}
        <FontAwesomeIcon
          icon={faEdit}
          className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400'
        />
      </div>
      {/* 説明が選択されている場合のみフォーマットアイコンを表示 */}
      {selectedInput === 'description' && (
        <FormatIcons handleFormatClick={handleFormatClick} isVisible={true} />
      )}
    </div>
  );
};

export default FormHeader;

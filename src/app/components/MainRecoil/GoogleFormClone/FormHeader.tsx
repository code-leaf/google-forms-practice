// React関連の機能をインポート
import React, { useState } from 'react';
// フォーマットアイコンコンポーネントをインポート
import FormatIcons from '@/app/components/tool/FormatIcons';
// 型をインポート
import { formHeaderAtom } from '@/store/formHeaderAtom';
import { SelectedInput } from '@/types/formTypes';
import { useRecoilState } from 'recoil';

// フォームのヘッダー部分を表示するコンポーネント
const FormHeader = () => {
  // 選択されているインプット要素を管理するstate
  const [selectedInput, setSelectedInput] = useState<SelectedInput>(undefined);

  // フォームのヘッダーを管理するAtom
  const [formHeader, setFormHeader] = useRecoilState(formHeaderAtom);

  // フォームのタイトルを変更するAtom
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormHeader((prevFormHeader) => {
      const newState = {
        ...prevFormHeader,
        title: e.target.value,
      };
      return newState;
    });
  };

  // フォームの説明を変更するAtom
  const handleDiscriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormHeader((prevFormHeader) => {
      const newState = {
        ...prevFormHeader,
        description: e.target.value,
      };
      return newState;
    });
  };

  return (
    // フォームのヘッダー部分 - 背景色、角丸、影、左と上のボーダーを設定
    <div className='bg-white rounded-lg shadow-md p-6 mb-4 border-t-8 border-t-purple-600 focus-within:border-l-8 focus-within:border-l-blue-600 md:w-[620px] lg:w-[800px]'>
      {/* フォームのタイトル入力欄 */}
      <div className='relative'>
        <input
          type='text' // テキスト入力フィールドを指定
          placeholder='無題のフォーム'
          value={formHeader.title} // フォームのタイトルを表示
          onChange={handleTitleChange} // タイトルが変更されたときの処理
          onFocus={() => setSelectedInput('title')} // フォーカス時に選択状態を更新
          // フォーカスが外れたときに選択状態をリセット
          onBlur={() => {
            setSelectedInput(undefined);
          }}
          //  大きなフォントサイズ、太字、下線、フォーカス時の色変更を設定
          className='text-3xl font-bold mb-2 w-full border-b-2 border-purple-300 focus:outline-none focus:border-purple-500 pr-8'
        />
      </div>
      {/* タイトルが選択されている場合のみフォーマットアイコンを表示 */}
      {selectedInput === 'title' && <FormatIcons isVisible={true} />}
      {/* フォームの説明入力欄 */}
      <div className='relative mt-4'>
        <input
          type='text' // テキスト入力フィールドを指定
          placeholder='フォームの説明'
          value={formHeader.description} // フォームの説明を表示
          onChange={handleDiscriptionChange} // 説明が変更されたときの処理
          onFocus={() => setSelectedInput('description')} // フォーカス時に選択状態を更新
          // フォーカスが外れたときに選択状態をリセット
          onBlur={() => {
            setSelectedInput(undefined);
          }}
          // グレーの文字色、フォーカス時のアウトラインなし、上部マージンを設定
          className='text-gray-600 focus:outline-none w-full pr-8'
        />
      </div>
      {/* 説明が選択されている場合のみフォーマットアイコンを表示 */}
      {selectedInput === 'description' && <FormatIcons isVisible={true} />}
    </div>
  );
};

export default FormHeader;

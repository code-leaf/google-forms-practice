'use client'; // クライアントサイドでの実行を明示

import { formHeaderAtom } from '@/store/formHeaderAtom';
import { useRecoilValue } from 'recoil';

export const PreviewHeader = () => {
  // フォームのヘッダーを管理するAtom
  const formHeader = useRecoilValue(formHeaderAtom);

  // タイトルが空の場合は "無題のフォーム" を表示、それ以外は設定されたタイトルを表示
  const formHeaderTitle =
    formHeader.title === '' ? '無題のフォーム' : formHeader.title;

  return (
    // フォームのヘッダー部分 - 背景色、角丸、影、左と上のボーダーを設定
    <div className='bg-white rounded-lg shadow-md p-6 my-4 border-t-8 border-t-purple-600 md:w-[620px] lg:w-[800px]'>
      {/* フォームのタイトル入力欄 */}
      <h1
        //  大きなフォントサイズ、太字、下線、フォーカス時の色変更を設定
        className='text-3xl text-gray-600 font-bold mb-2 w-full border-b-2 border-purple-300 focus:outline-none focus:border-purple-500 pr-8'
      >
        {formHeaderTitle}
      </h1>

      {/* フォームの説明入力欄 */}
      <p>{formHeader.description}</p>
    </div>
  );
};

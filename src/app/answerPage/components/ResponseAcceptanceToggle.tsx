'use client'; // クライアントサイドでの実行を明示

import { useCallback, useState } from 'react';

export const ResponseAcceptanceToggle: () => JSX.Element = () => {
  // 回答受付状況のステートを管理
  const [isAccepting, setIsAccepting] = useState<boolean>(true);

  // トグルボタンのクリックハンドラをコールバック関数として定義
  const toggleAcceptance = useCallback(() => {
    setIsAccepting(!isAccepting);
  }, [isAccepting]);

  return (
    //    回答受付状況とトグルボタンを表示
    <div
      className={`flex justify-end items-center px-3 py-3 rounded-md ${
        isAccepting ? 'text-gray-400' : 'bg-red-500 text-gray-50'
      }`}
    >
      <p className=''>
        {isAccepting ? '回答を受付中' : '回答を受け付けていません'}
      </p>
      {/* トグルボタンのカスタムUIを作成するためのラベル要素 */}
      <label className='relative inline-flex items-center cursor-pointer ml-4 bg'>
        {/* 視覚的に非表示のインプット */}
        <input type='checkbox' value='' className='sr-only peer' />
        {/* トグルボタン */}
        <div
          onClick={toggleAcceptance}
          className='group peer ring-0 bg-purple-200 rounded-full outline-none duration-300 after:duration-300 w-12 h-5 shadow-md peer-checked:bg-gray-400 peer-focus:outline-none after:content-[""] after:absolute after:bg-purple-500 after:rounded-full after:h-7 after:w-7 after:-top-1 after:right-0 after:flex after:justify-center after:items-center after:transition-all peer-checked:after:translate-x-[-1.25rem] peer-checked:after:bg-gray-50'
        ></div>
      </label>
    </div>
  );
};

'use client'; // クライアントサイドでの実行を明示

import { ToggleButton } from '@/app/components/ToggleButton';
import { useCallback, useState } from 'react';

export const Setting = () => {
  const [isTest, setIsTest] = useState<boolean>(true);

  // トグルボタンのクリックハンドラをコールバック関数として定義
  const toggleTest = useCallback(() => {
    setIsTest((prev) => !prev); // 前の状態を使用して更新
  }, [setIsTest]);

  return (
    <div className='max-w-4xl mx-auto w-full text-gray-600'>
      <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
        <h1 className='text-xl pb-4 border-b border-b-slate-300'>設定</h1>
        <div className='flex justify-between items-center'>
          <div className='py-8 border-b border-b-slate-300    '>
            <h2 className='text-lg'>テストにする</h2>
            <p className=''>
              点数の割り当て、解答の設定、フィードバックの自動提供が可能になります
            </p>
          </div>
          <ToggleButton isChecked={isTest} onChange={toggleTest} />
        </div>
      </div>
    </div>
  );
};

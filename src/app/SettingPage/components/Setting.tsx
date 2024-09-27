'use client'; // クライアントサイドでの実行を明示

import { AccordionItem } from '@/app/components/tool/AccordionItem';
import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { useCallback, useState } from 'react';

export const Setting = () => {
  const [isTest, setIsTest] = useState<boolean>(true);
  // アコーディオンの展開状態を管理するstate
  const [isExpanded, setIsExpanded] = useState(false);

  // アコーディオンのクリックイベントを処理する関数
  const handleAccordion: () => void = () => {
    setIsExpanded((prev) => !prev); // 現在の状態を反転させる
  };

  // トグルボタンのクリックハンドラをコールバック関数として定義
  const toggleTest = useCallback(() => {
    setIsTest((prev) => !prev); // 前の状態を使用して更新
  }, [setIsTest]);

  return (
    <div className='max-w-4xl mx-auto w-full text-gray-600'>
      <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
        <h1 className='text-xl pb-4 border-b border-b-slate-300'>設定</h1>

        {/* テスト */}
        <div className='flex justify-between items-center py-8 border-b border-b-slate-300'>
          <div className=''>
            <h2 className='text-lg'>テストにする</h2>
            <p className=''>
              点数の割り当て、解答の設定、フィードバックの自動提供が可能になります
            </p>
          </div>
          <ToggleButton isChecked={isTest} onChange={toggleTest} />
        </div>

        {/* 回答 */}
        <div className=' py-8 border-b border-b-slate-300'>
          <div className='flex justify-between items-center'>
            <div className=''>
              <h2 className='text-lg'>回答</h2>
              <p className=''>回答を収集、保護する方法を管理できます </p>
            </div>
            <AccordionItem isExpanded={isExpanded} onClick={handleAccordion} />
          </div>

          {/* 細かな設定 */}
          <div>
            {isExpanded && (
              <div className='pl-6 mt-6'>
                <div className='mb-4'>
                  <p className='text-sm mb-1'>メールアドレスを収集する</p>
                  <select className='border rounded px-2 py-1 text-sm'>
                    <option>収集しない</option>
                  </select>
                </div>
                <div className='mb-4 flex items-center justify-between'>
                  <p className='text-sm'>回答のコピーを回答者に送信</p>
                  <select className='border rounded px-2 py-1 text-sm'>
                    <option>オフ</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <div className='flex items-center justify-between'>
                    <p className='text-sm'>回答の編集を許可する</p>
                    <label className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type='checkbox'
                        value=''
                        className='sr-only peer'
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className='text-xs text-gray-500'>
                    提出後に解答を編集することを許可します
                  </p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-sm'>回答を1回に制限する</p>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input type='checkbox' value='' className='sr-only peer' />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

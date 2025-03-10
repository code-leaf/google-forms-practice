'use client'; // クライアントサイドでの実行を明示

import { AccordionItem } from '@/app/components/tool/AccordionItem';
import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { AnswerSettings } from '@/app/SettingPage/components/AnswerSettings';
import { DisplaySettings } from '@/app/SettingPage/components/DisplaySettings';
import { TestSettings } from '@/app/SettingPage/components/TestSettings';
import { useAnswerSettings } from '@/hooks/useAnswerSettings';
import { useState } from 'react';

export const Setting = () => {
  const [isTest, setIsTest] = useState<boolean>(false);
  // アコーディオンの展開状態を管理するstate
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const [isDisplaySetting, setIsDisplaySetting] = useState<boolean>(false);

  const { limitOneRespons, togglelimitOneRespons } = useAnswerSettings();

  const toggleSetting = (key: 'isTest' | 'isExpanded' | 'isDisplaySetting') => {
    switch (key) {
      case 'isTest':
        setIsTest((prev) => !prev);
        break;

      case 'isExpanded':
        setIsExpanded((prev) => !prev);
        break;

      default:
        setIsDisplaySetting((prev) => !prev);
        break;
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
      <h1 className='text-xl pb-4 border-b border-b-slate-300'>設定</h1>

      {/* テスト */}
      <div className=' py-8 border-b border-b-slate-300'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <h2 className='text-lg'>テストにする</h2>
            <p className='text-gray-500'>
              点数の割り当て、解答の設定、フィードバックの自動提供が可能になります
            </p>
          </div>
          <ToggleButton
            isChecked={isTest}
            onChange={() => toggleSetting('isTest')}
            limitOneRespons={false}
          />
        </div>

        {/* 細かな設定 */}
        <TestSettings isChecked={isTest} />
      </div>

      {/* 回答 */}
      <div className=' py-8 border-b border-b-slate-300'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <h2 className='text-lg'>回答</h2>
            <p className='text-gray-500'>
              回答を収集、保護する方法を管理できます{' '}
            </p>
          </div>
          <AccordionItem
            isExpanded={isExpanded}
            onClick={() => toggleSetting('isExpanded')}
          />
        </div>

        {/* 細かな設定 */}
        <AnswerSettings
          limitOneRespons={limitOneRespons}
          isExpanded={isExpanded}
          togglelimitOneRespons={togglelimitOneRespons}
        />
      </div>

      {/* 表示設定 */}
      <div className='pt-8'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <h2 className='text-lg'>表示設定</h2>
            <p className='text-gray-500'>
              フォームと回答の表示方法を管理できます
            </p>
          </div>
          <AccordionItem
            isExpanded={isDisplaySetting}
            onClick={() => toggleSetting('isDisplaySetting')}
          />
        </div>

        {/* 細かな設定 */}
        <DisplaySettings
          limitOneRespons={limitOneRespons}
          isExpanded={isDisplaySetting}
          togglelimitOneRespons={togglelimitOneRespons}
        />
      </div>
    </div>
  );
};

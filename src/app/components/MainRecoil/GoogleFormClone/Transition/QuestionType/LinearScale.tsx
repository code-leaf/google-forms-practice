'use client';

import { UnderlinedInput } from '@/app/components/tool/UnderlinedInput';
import { useState } from 'react';

export const LinearScale = () => {
  // 開始値と終了値のstateを追加
  const [startValue, setStartValue] = useState<number>(1);
  const [endValue, setEndValue] = useState<number>(5);

  return (
    <div className='flex flex-col'>
      {/* 数値選択部分 */}
      <div className='flex items-center space-x-4 mb-4'>
        <select
          className='border rounded p-1'
          value={startValue}
          onChange={(e) => setStartValue(Number(e.target.value))}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
        </select>

        <span>～</span>

        <select
          className='border rounded p-1'
          value={endValue}
          onChange={(e) => setEndValue(Number(e.target.value))}
        >
          {[...Array(9)].map((_, i) => (
            <option value={i + 2} key={i + 2}>
              {i + 2}
            </option>
          ))}
        </select>
      </div>

      <div>
        {/* ラベル入力部分 */}
        <div className='space-y-4'>
          {/* スタートのラベル */}
          <UnderlinedInput value={startValue} />

          {/* エンドのラベル */}
          <UnderlinedInput value={endValue} />
        </div>
      </div>
    </div>
  );
};

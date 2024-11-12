'use client';

import { UnderlinedInput } from '@/app/components/Main/GoogleFormClone/Transition/QuestionType/tool/UnderlinedInput';
import { endLinearScaleAtom } from '@/store/EndLinearScaleAtom';
import { startLinearScaleAtom } from '@/store/StartLinearScaleAtom';
import { useRecoilState } from 'recoil';

export const LinearScale = () => {
  // 開始値と終了値
  const [startValue, setStartValue] = useRecoilState(startLinearScaleAtom);
  const [endValue, setEndValue] = useRecoilState(endLinearScaleAtom);

  return (
    <div className='flex flex-col'>
      {/* 数値選択部分 */}
      <div className='flex items-center space-x-4 mb-4'>
        <select
          className='rounded p-1'
          value={startValue}
          onChange={(e) => setStartValue(Number(e.target.value))}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
        </select>

        <span>～</span>

        <select
          className='rounded p-1'
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
          <UnderlinedInput value={startValue} className='w-1/3' />

          {/* エンドのラベル */}
          <UnderlinedInput value={endValue} className='w-1/3' />
        </div>
      </div>
    </div>
  );
};

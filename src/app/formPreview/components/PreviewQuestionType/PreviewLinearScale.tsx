import { useTransition } from '@/hooks/useTransition';
import { endLinearScaleAtom } from '@/store/EndLinearScaleAtom';
import { linearScaleLabelAtom } from '@/store/linearScaleLabelAtom';
import { startLinearScaleAtom } from '@/store/StartLinearScaleAtom';
import React, { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';

type PreviewLinearScaleProps = {
  questionId: string;
};

export const PreviewLinearScale = ({ questionId }: PreviewLinearScaleProps) => {
  // Recoilから開始値と終了値を取得
  const start = useRecoilValue(startLinearScaleAtom);
  const end = useRecoilValue(endLinearScaleAtom);
  const labels = useRecoilValue(linearScaleLabelAtom);

  // 選択された値を管理するstate
  const [selectdLineRadio, setSelectdLineRadio] = useState<string>('');

  /** startからendまでの連続した数値を配列として作成
   * @property - 第一引数: 配列の長さ
   * @property - 第二引数: 各要素の値
   */
  const numbers: number[] = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );
  const { handleAnswerChange } = useTransition({ questionId });

  const handleLineRadioChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectdLineRadio(event.target.value);
      handleAnswerChange(event.target.value);
    },
    [handleAnswerChange, selectdLineRadio]
  );

  return (
    <div className='flex justify-between items-center px-4'>
      {/* ラベルの表示（開始） */}
      {labels[start] && (
        <div className='text-sm text-gray-600'>{labels[start]}</div>
      )}

      {numbers.map((number) => (
        <div key={number} className='flex-col'>
          <label
            key={number}
            htmlFor={`LinearScale-${number}`}
            className='flex flex-col items-center cursor-pointer'
          >
            <span className='text-sm mb-2'>{number}</span>{' '}
            <input
              type='radio'
              name='LinearScale'
              value={number.toString()}
              id={`LinearScale-${number}`}
              checked={selectdLineRadio === number.toString()}
              className='h-4 w-4 cursor-pointer'
              onChange={handleLineRadioChange}
              aria-label={`Scale value ${number}`}
            />
          </label>
        </div>
      ))}

      {/* ラベルの表示（終了） */}
      {labels[end] && (
        <div className='text-sm text-gray-600 '>{labels[end]}</div>
      )}
    </div>
  );
};

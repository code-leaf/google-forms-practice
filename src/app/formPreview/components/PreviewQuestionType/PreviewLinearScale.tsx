import { endLinearScaleAtom } from '@/store/EndLinearScaleAtom';
import { startLinearScaleAtom } from '@/store/StartLinearScaleAtom';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

type PreviewLinearScaleProps = {
  questionId: string;
};

export const PreviewLinearScale = ({ questionId }: PreviewLinearScaleProps) => {
  // Recoilから開始値と終了値を取得
  const start = useRecoilValue(startLinearScaleAtom);
  const end = useRecoilValue(endLinearScaleAtom);

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

  const handleLineRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectdLineRadio(event.target.value);
  };

  return (
    <div className='flex justify-between items-center'>
      {numbers.map((number) => (
        <div key={number} className='flex-col'>
          <div className='text-sm mb-2'>{number}</div>
          <input
            type='radio'
            name='LinearScale'
            value={number.toString()}
            id={`LinearScale-${number}`}
            checked={selectdLineRadio === number.toString()}
            className='h-4 w-4 cursor-pointer'
          />
        </div>
      ))}
    </div>
  );
};

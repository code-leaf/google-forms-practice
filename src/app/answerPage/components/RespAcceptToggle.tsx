import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { respAcceptToggleAtom } from '@/store/RespAcceptToggleAtom';
import React, { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';

export const RespAcceptToggle: React.FC = () => {
  // 回答受付状況のステートを管理
  const [isAccepting, setIsAccepting] = useRecoilState(respAcceptToggleAtom);

  // トグルボタンのクリックハンドラをコールバック関数として定義
  const toggleAcceptance = useCallback(() => {
    setIsAccepting((prev) => !prev); // 前の状態を使用して更新
  }, [setIsAccepting]);

  // コンテナのクラス名を生成
  const containerClassName = useMemo(
    () =>
      `flex justify-end items-center p-4 rounded-md ${
        isAccepting ? 'text-gray-400' : 'bg-red-500 text-gray-50'
      }`,
    [isAccepting]
  );

  // メッセージを生成
  const message = useMemo(
    () => (isAccepting ? '回答を受付中' : '回答を受け付けていません'),
    [isAccepting]
  );

  return (
    //    回答受付状況とトグルボタンを表示
    <div>
      <div className={containerClassName}>
        <p>{message} </p>
        {/* トグルボタンのカスタムUIを作成するためのラベル要素 */}
        <ToggleButton isChecked={isAccepting} onChange={toggleAcceptance} />
      </div>
      {!isAccepting && (
        <div className='text-gray-600 p-4 rounded-md border -mt-1 border-t-red-500'>
          <p>回答者へのメッセージ</p>
          <p className='mt-2 border-b pb-1 text-gray-400'>
            このフォームは回答の受け付けを終了しました
          </p>
        </div>
      )}
    </div>
  );
};

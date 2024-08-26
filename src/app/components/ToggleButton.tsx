// Reactとフック関数をインポート
import React, { useCallback, useMemo } from 'react';

// ToggleButtonコンポーネントのプロップスの型定義
type ToggleButtonProps = {
  isChecked: boolean; // トグルの状態（オン/オフ）
  onChange: () => void; // 状態変更時のコールバック関数
};

// ToggleButtonコンポーネントの定義
export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isChecked,
  onChange,
}) => {
  // トグルボタンのクリックハンドラをコールバック関数として定義
  const handleToggle = useCallback(() => {
    onChange(); // 親コンポーネントから渡されたonChange関数を呼び出す
  }, [onChange]);

  // トグルボタンのクラス名を生成（メモ化して再レンダリングを最適化）
  const toggleClassName = useMemo(
    () => `
    group peer ring-0 rounded-full outline-none duration-300 w-12 h-5 shadow-md 
    ${isChecked ? 'bg-purple-200' : 'bg-gray-300'}
    after:content-[""] after:absolute after:rounded-full after:h-7 after:w-7 
    after:-top-1 after:right-0 after:flex after:justify-center after:items-center 
    after:transition-all after:duration-300
    ${
      isChecked
        ? 'after:bg-purple-500 after:right-0' // オン状態のスタイル
        : 'after:bg-gray-50 after:right-[calc(100%-1.75rem)]' // オフ状態のスタイル
    }
  `,
    [isChecked]
  );

  return (
    // トグルボタンのカスタムUIを作成するためのラベル要素
    <label className='relative inline-flex items-center cursor-pointer ml-4 bg'>
      {/* 視覚的に非表示のインプット */}
      <input
        type='checkbox' // チェックボックスタイプを指定
        value='' // 値は不要なので空文字を設定
        className='sr-only peer' // スクリーンリーダーのみで認識可能なクラスを適用
        checked={isChecked} // チェック状態を制御
        onChange={handleToggle} // 状態変更時のハンドラを設定
      />
      {/* トグルボタン */}
      <div className={toggleClassName}></div>
    </label>
  );
};

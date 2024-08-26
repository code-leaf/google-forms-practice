import React, { useCallback, useMemo } from 'react';

type ToggleButtonProps = {
  isChecked: boolean;
  onChange: () => void;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isChecked,
  onChange,
}) => {
  // トグルボタンのクリックハンドラをコールバック関数として定義
  const handleToggle = useCallback(() => {
    onChange();
  }, [onChange]);

  // トグルボタンのクラス名を生成
  const toggleClassName = useMemo(
    () => `
    group peer ring-0 rounded-full outline-none duration-300 w-12 h-5 shadow-md 
    ${isChecked ? 'bg-purple-200' : 'bg-gray-300'}
    peer-focus:outline-none 
    after:content-[""] after:absolute after:rounded-full after:h-7 after:w-7 
    after:-top-1 after:right-0 after:flex after:justify-center after:items-center 
    after:transition-all after:duration-300
    ${
      isChecked
        ? 'after:bg-purple-500 after:right-0'
        : 'after:bg-gray-50 after:right-[calc(100%-1.75rem)]'
    }
  `,
    [isChecked]
  );
  return (
    // トグルボタンのカスタムUIを作成するためのラベル要素
    <label className='relative inline-flex items-center cursor-pointer ml-4 bg'>
      {/* 視覚的に非表示のインプット */}
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        checked={isChecked}
        onChange={handleToggle}
      />
      {/* トグルボタン */}
      <div className={toggleClassName}></div>
    </label>
  );
};

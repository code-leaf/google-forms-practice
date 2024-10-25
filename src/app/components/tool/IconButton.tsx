import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// ボタンの型定義
export type IconButtonProps = {
  icon: IconDefinition;
  onClick?: () => void;
  title: string;
  'aria-label': string; // アクセシビリティのためのラベルを追加
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  'aria-label': ariaLabel,
  title,
}) => (
  <button
    onClick={onClick}
    className='icon-button h-12 w-12 text-gray-600 text-xl'
    aria-label={ariaLabel} // アクセシビリティのためのラベルを設定
    title={title}
  >
    {/* アイコンを表示 */}
    <FontAwesomeIcon icon={icon} />
  </button>
);

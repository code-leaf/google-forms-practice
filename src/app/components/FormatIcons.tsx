import { FormatIconsProps, IconInfo } from '@/types/formTypes';
import {
  faBold,
  faEraser,
  faItalic,
  faLink,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// アイコン情報の配列を定義
const icons: IconInfo[] = [
  { icon: faBold, ariaLabel: '太字' },
  { icon: faItalic, ariaLabel: '斜体' },
  { icon: faUnderline, ariaLabel: '下線' },
  { icon: faLink, ariaLabel: 'リンクを挿入' },
  { icon: faEraser, ariaLabel: '書式をクリア' },
];

// フォーマットアイコンを表示するコンポーネント
const FormatIcons: React.FC<FormatIconsProps> = ({ isVisible }) => {
  // isVisibleがfalseの場合は何も表示しない
  if (!isVisible) return undefined;

  return (
    <div className='mt-2 flex space-x-2 items-center text-gray-600'>
      {/* アイコンの配列をマップして表示 */}
      {icons.map((iconInfo) => (
        <div
          key={iconInfo.ariaLabel}
          title={iconInfo.ariaLabel} // ツールチップとして表示されるテキスト
          className='relative'
        >
          <button
            className='p-1 hover:bg-gray-200 rounded'
            aria-label={iconInfo.ariaLabel}
          >
            <FontAwesomeIcon icon={iconInfo.icon} />
            {/* スクリーンリーダー用のラベル */}
            <span className='sr-only'>{iconInfo.ariaLabel}</span>
          </button>
        </div>
      ))}
      <p className=' '>※書式設定機能は未実装です。</p>
    </div>
  );
};

export default FormatIcons;

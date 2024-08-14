import React from 'react';
// Font Awesomeのアイコンをインポート
import {
  faBold,
  faEraser,
  faItalic,
  faLink,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// フォーマットオプションの型をインポート
import { FormatOption } from '../types/formatTypes';

// FormatIconsコンポーネントのプロップスの型定義
type FormatIconsProps = {
  handleFormatClick: (option: FormatOption) => void;
  isVisible: boolean; // アイコンの表示/非表示を制御するプロパティ
};

// フォーマットアイコンを表示するコンポーネント
const FormatIcons: React.FC<FormatIconsProps> = ({
  handleFormatClick,
  isVisible,
}) => {
  // isVisibleがfalseの場合は何も表示しない
  if (!isVisible) return undefined;

  return (
    <div className='mt-2 flex space-x-2'>
      {/* 太字アイコン */}
      <button
        onClick={() => handleFormatClick('bold')}
        className='p-1 hover:bg-gray-200 rounded'
      >
        <FontAwesomeIcon icon={faBold} />
      </button>
      {/* 斜体アイコン */}
      <button
        onClick={() => handleFormatClick('italic')}
        className='p-1 hover:bg-gray-200 rounded'
      >
        <FontAwesomeIcon icon={faItalic} />
      </button>
      {/* 下線アイコン */}
      <button
        onClick={() => handleFormatClick('underline')}
        className='p-1 hover:bg-gray-200 rounded'
      >
        <FontAwesomeIcon icon={faUnderline} />
      </button>
      {/* リンクアイコン */}
      <button
        onClick={() => handleFormatClick('link')}
        className='p-1 hover:bg-gray-200 rounded'
      >
        <FontAwesomeIcon icon={faLink} />
      </button>
      {/* クリアアイコン */}
      <button
        onClick={() => handleFormatClick('clear')}
        className='p-1 hover:bg-gray-200 rounded'
      >
        <FontAwesomeIcon icon={faEraser} />
      </button>
    </div>
  );
};

export default FormatIcons;

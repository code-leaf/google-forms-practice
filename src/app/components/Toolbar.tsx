// 必要なライブラリとコンポーネントをインポート
import {
  faArrowRightFromBracket,
  faFont,
  faImage,
  faLayerGroup,
  faPlay,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// ボタンの型定義
type IconButtonProps = {
  icon: typeof faPlus; // アイコンの型
  onClick?: () => void; // クリックイベントハンドラの型（オプショナル）
};

// アイコンボタンコンポーネントの作成
const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => (
  <button onClick={onClick} className='icon-button'>
    <FontAwesomeIcon icon={icon} />
  </button>
);

// メインのツールバーコンポーネント
const Toolbar: React.FC = () => {
  // 各ボタンのクリックハンドラ（実装は省略）
  const handleAddClick = () => {
    // 追加機能の実装
  };

  const handleExportClick = () => {
    // エクスポート機能の実装
  };

  const handleTextClick = () => {
    // テキスト編集機能の実装
  };

  const handleImageClick = () => {
    // 画像追加機能の実装
  };

  const handlePlayClick = () => {
    // 再生機能の実装
  };

  const handleLayersClick = () => {
    // レイヤー管理機能の実装
  };

  return (
    <div className='flex flex-col '>
      {/* 追加ボタン */}
      <IconButton icon={faPlus} onClick={handleAddClick} />

      {/* エクスポートボタン */}
      <IconButton icon={faArrowRightFromBracket} onClick={handleExportClick} />

      {/* テキストボタン */}
      <IconButton icon={faFont} onClick={handleTextClick} />

      {/* 画像ボタン */}
      <IconButton icon={faImage} onClick={handleImageClick} />

      {/* 再生ボタン */}
      <IconButton icon={faPlay} onClick={handlePlayClick} />

      {/* レイヤーボタン */}
      <IconButton icon={faLayerGroup} onClick={handleLayersClick} />
    </div>
  );
};

// コンポーネントをエクスポート
export { Toolbar };

// 必要なライブラリとコンポーネントをインポート
import { IconButton } from '@/app/components/IconButton';
import { Question, questionsAtom } from '@/store/questionsAtom';
import {
  faCirclePlay,
  faCirclePlus,
  faFileImport,
  faImage,
  faT,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

// メインのツールバーコンポーネント
export const Toolbar: React.FC = () => {
  // Recoilの状態を使用
  const [questions, setQuestions] = useRecoilState(questionsAtom);
  const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(true);

  // 新しい質問を追加する関数
  const handleAddQuestionClick: () => void = () => {
    setIsQuestionOpen(true);
  };

  useEffect(() => {
    if (!isQuestionOpen) {
      return;
    }
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: 'shortAnswer',
      title: '質問',
      required: false,
    };
    setQuestions([...questions, newQuestion]);
    setIsQuestionOpen(false);
  }, [isQuestionOpen, handleAddQuestionClick]);

  const handleImportClick = () => {
    // 質問インポート機能の実装
  };

  const handleAddTitleAndQuestionClick = () => {
    // タイトルと質問追加機能の実装
  };

  const handleAddImageClick = () => {
    // 画像追加機能の実装
  };

  const handleAddVideoClick = () => {
    // 動画追加機能の実装
  };

  const handleAddSectionClick = () => {
    // セクション追加機能の実装
  };

  // ツールバーのボタン設定を定義する型
  type ToolbarButtonConfig = {
    icon: IconDefinition;
    onClick: () => void;
    label: string; // アクセシビリティのためのラベル
  };

  // ツールバーのボタン設定
  const toolbarButtons: ToolbarButtonConfig[] = [
    {
      icon: faCirclePlus,
      onClick: handleAddQuestionClick,
      label: '質問を追加',
    },
    {
      icon: faFileImport,
      onClick: handleImportClick,
      label: '質問をインポート',
    },
    {
      icon: faT,
      onClick: handleAddTitleAndQuestionClick,
      label: 'タイトルと質問を追加',
    },
    { icon: faImage, onClick: handleAddImageClick, label: '画像を追加' },
    { icon: faCirclePlay, onClick: handleAddVideoClick, label: '動画を追加' },
    {
      icon: faBars,
      onClick: handleAddSectionClick,
      label: 'セクションを追加',
    },
  ];

  return (
    <div className='flex p-4'>
      <div className='flex flex-col h-auto  bg-white rounded-lg shadow'>
        {/* ツールバーボタンをマッピングして表示 */}
        {toolbarButtons.map((button) => (
          <IconButton
            key={button.label}
            icon={button.icon}
            onClick={button.onClick}
            aria-label={button.label}
            title={button.label}
          />
        ))}
      </div>
      <p className='ml-2 text-gray-700 [writing-mode:vertical-rl]'>
        ※ 質問の追加のみ実装しています。
      </p>
    </div>
  );
};

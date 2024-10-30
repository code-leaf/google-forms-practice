// このファイルをクライアントコンポーネントとして指定
'use client';

import { IconButton } from '@/app/components/tool/IconButton';
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
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

// メインのツールバーコンポーネント
export const Toolbar: React.FC = () => {
  // Recoilの状態を使用
  const [questions, setQuestions] = useRecoilState(questionsAtom);

  // 質問の表示・非表示を管理
  const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(true);

  // 新しい質問を追加する関数
  const handleAddQuestionClick: () => void = useCallback(() => {
    setIsQuestionOpen(true);
  }, []);

  // コンポーネントのマウント時と追加ボタンクリック時に質問を生成
  useEffect(() => {
    if (!isQuestionOpen) {
      return; //質問非表示の場合何もしない
    }
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: 'shortAnswer',
      title: '',
      required: false,
    };
    setQuestions([...questions, newQuestion]);
    setIsQuestionOpen(false);
  }, [isQuestionOpen]);

  const handleImportClick = useCallback(() => {
    // 質問インポート機能の実装
  }, []);

  const handleAddTitleAndQuestionClick = useCallback(() => {
    // タイトルと質問追加機能の実装
  }, []);

  const handleAddImageClick = useCallback(() => {
    // 画像追加機能の実装
  }, []);

  const handleAddVideoClick = useCallback(() => {
    // 動画追加機能の実装
  }, []);

  const handleAddSectionClick = useCallback(() => {
    // セクション追加機能の実装
  }, []);

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
      <p className='ml-2 text-gray-600 [writing-mode:vertical-rl]'>
        ※ 質問の追加のみ実装しています。
      </p>
    </div>
  );
};

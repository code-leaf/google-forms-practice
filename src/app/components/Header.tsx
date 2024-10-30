import {
  faEllipsisVertical,
  faEye,
  faFileLines,
  faFolder,
  faPalette,
  faRedo,
  faUndo,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

type Tab = {
  id: 1 | 2 | 3;
  label: string;
  href: string;
};

const tabList: Tab[] = [
  {
    id: 1,
    label: '質問',
    href: '/',
  },
  {
    id: 2,
    label: '回答',
    href: '/answerPage',
  },
  {
    id: 3,
    label: '設定',
    href: 'SettingPage',
  },
];

// ヘッダーコンポーネントの型定義
type HeaderProps = {
  activeTab: 1 | 2 | 3;
};

type IconToolTips = {
  icon: IconDefinition;
  tooltip: string;
  href: string;
};

const iconToolTips: IconToolTips[] = [
  { icon: faPalette, tooltip: 'テーマをカスタマイズ', href: '' },
  { icon: faEye, tooltip: 'プレビューを表示', href: '/formPreview' },
  { icon: faUndo, tooltip: '元に戻す', href: '' },
  { icon: faRedo, tooltip: 'やり直し', href: '' },
];

export const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  return (
    <header className='bg-gray-50 text-gray-600'>
      <div className='flex items-center justify-between p-4 '>
        {/* 左側のアイコン */}
        <div className='flex items-center'>
          <button className='mr-4 text-purple-800'>
            <FontAwesomeIcon icon={faFileLines} size='2xl' />
          </button>
          {/* タイトル */}
          <h1 className='text-xl font-bold mr-4'>Google Form練習</h1>
          <button className='mr-4'>
            <FontAwesomeIcon icon={faFolder} size='lg' title='フォルダに移動' />
          </button>
          <button className='mr-4 text-2xl font-bold' title='スター'>
            ☆
          </button>
        </div>

        {/* 右側のアイコン */}
        <div className='flex items-center space-x-6'>
          {/* アイコンのマップ */}
          {iconToolTips.map((iconToolTip) => (
            <Link key={iconToolTip.tooltip} href={iconToolTip.href}>
              <button title={iconToolTip.tooltip}>
                <FontAwesomeIcon icon={iconToolTip.icon} size='lg' />
              </button>
            </Link>
          ))}
          {/* 送信ボタン */}
          <div className='bg-purple-700 text-white px-6 py-2 rounded-md'>
            送信
          </div>
          {/* その他のメニューアイコン */}
          <div>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              size='lg'
              title='その他'
            />
          </div>
        </div>
      </div>

      {/* 質問・回答・設定の切り替え */}
      <div className='flex justify-center '>
        <div className='flex items-start space-x-5'>
          {tabList.map((tab) => (
            <Link key={tab.id} href={tab.href}>
              <button
                className={`py-1 px-2${
                  activeTab === tab.id ? ' border-b-4  border-b-purple-700' : ''
                }`}
              >
                {tab.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

import {
  faEllipsisVertical,
  faEye,
  faFileLines,
  faFolder,
  faPalette,
  faRedo,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// ヘッダーコンポーネントの型定義
type HeaderProps = {
  activeTab: 1 | 2 | 3;
};

type Tab = {
  id: 1 | 2 | 3;
  label: string;
};

const tabList: Tab[] = [
  { id: 1, label: '質問' },
  { id: 2, label: '回答' },
  { id: 3, label: '設定' },
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
            <FontAwesomeIcon icon={faFolder} size='lg' />
          </button>{' '}
          <button className='mr-4 text-2xl font-bold'>☆</button>
        </div>

        {/* 右側のアイコン */}
        <div className='flex items-center space-x-6'>
          {/* カラーパレットアイコン */}
          <button>
            <FontAwesomeIcon icon={faPalette} size='lg' />
          </button>
          {/* 目アイコン */}
          <button>
            <FontAwesomeIcon icon={faEye} size='lg' />
          </button>
          {/* 戻るアイコン */}
          <button>
            <FontAwesomeIcon icon={faUndo} size='lg' />
          </button>
          {/* やり直しアイコン */}
          <button>
            <FontAwesomeIcon icon={faRedo} size='lg' />
          </button>
          {/* 送信ボタン */}
          <button className='bg-purple-700 text-white px-6 py-2 rounded-md'>
            送信
          </button>
          {/* その他のメニューアイコン */}
          <button>
            <FontAwesomeIcon icon={faEllipsisVertical} size='lg' />
          </button>
        </div>
      </div>
      <div className='flex justify-center '>
        <div className='flex items-start space-x-5'>
          {tabList.map((tab) => (
            <button
              key={tab.id}
              className={`py-1 px-2${
                activeTab === tab.id ? ' border-b-4  border-b-purple-700' : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

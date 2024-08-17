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
  //   title: string;
};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='bg-gray-50'>
      <div className='flex items-center justify-between p-4 text-gray-700'>
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
          <button className='text-gray-600'>
            <FontAwesomeIcon icon={faPalette} size='lg' />
          </button>
          {/* 目アイコン */}
          <button className='text-gray-600'>
            <FontAwesomeIcon icon={faEye} size='lg' />
          </button>
          {/* 戻るアイコン */}
          <button className='text-gray-600'>
            <FontAwesomeIcon icon={faUndo} size='lg' />
          </button>
          {/* やり直しアイコン */}
          <button className='text-gray-600'>
            <FontAwesomeIcon icon={faRedo} size='lg' />
          </button>
          {/* 送信ボタン */}
          <button className='bg-purple-700 text-white px-6 py-2 rounded-md'>
            送信
          </button>
          {/* その他のメニューアイコン */}
          <button className='text-gray-600'>
            <FontAwesomeIcon icon={faEllipsisVertical} size='lg' />
          </button>
        </div>
      </div>
      <div className='flex justify-center '>
        <div className='flex  space-x-5'>
          <button className='py-1 px-2 border-b-4  border-b-purple-700'>
            質問
          </button>
          <button className='py-1 px-2 border-b-4  border-b-purple-700'>
            回答
          </button>
          <button className='py-1 px-2 border-b-4  border-b-purple-700'>
            設定
          </button>
        </div>
      </div>
    </header>
  );
};

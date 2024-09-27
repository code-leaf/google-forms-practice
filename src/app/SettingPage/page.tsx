import { Header } from '@/app/components/Header';
import { Setting } from '@/app/SettingPage/components/Setting';
import React from 'react';

const SettingPage: React.FC = () => {
  return (
    //   ページ全体のコンテナ
    <div className='min-h-screen bg-purple-100'>
      {/* ヘッダー部分 */}
      <Header activeTab={3} />
      <main className='flex justify-center container mx-auto p-4'>
        <Setting />
      </main>
    </div>
  );
};

export default SettingPage;

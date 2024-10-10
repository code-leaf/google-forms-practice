// Reactと必要なコンポーネントをインポート
import { Header } from '@/app/components/Header';
import { MainRecoil } from '@/app/components/MainRecoil';
import React from 'react';

// ページコンポーネントを定義
const FormBuilderPage: React.FC = () => {
  return (
    // ページ全体のコンテナ
    <div className='min-h-screen bg-purple-100'>
      {/* ヘッダー部分 */}
      <Header activeTab={1} />
      {/* メインコンテンツ */}
      <main className='flex justify-center my-4'>
        <div className='flex'>
          <MainRecoil />
        </div>
      </main>
    </div>
  );
};

// ページコンポーネントをエクスポート
export default FormBuilderPage;

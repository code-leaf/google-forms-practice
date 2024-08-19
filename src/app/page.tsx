'use client'; // クライアントサイドでの実行を明示

// Reactと必要なコンポーネントをインポート
import { Header } from '@/app/components/Header';
import React from 'react';
import { RecoilRoot } from 'recoil';
import GoogleFormClone from './components/GoogleFormClone';
import { Toolbar } from './components/Toolbar';

// ページコンポーネントを定義
const FormBuilderPage: React.FC = () => {
  return (
    // ページ全体のコンテナ
    <div className='min-h-screen bg-purple-100'>
      {/* ヘッダー部分 */}
      <Header activeTab={1}/>
      {/* メインコンテンツ */}
      <main className='flex justify-center container mx-auto p-4'>
        <div className='flex'>
          <RecoilRoot>
            <GoogleFormClone />
            <div className='flex-none'>
              <Toolbar />
            </div>
          </RecoilRoot>
        </div>
      </main>
    </div>
  );
};

// ページコンポーネントをエクスポート
export default FormBuilderPage;

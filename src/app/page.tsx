'use client'; // クライアントサイドでの実行を明示

// Reactと必要なコンポーネントをインポート
import React from 'react';
// 先ほど作成したGoogleFormCloneコンポーネントをインポート
import GoogleFormClone from './components/GoogleFormClone';

// ページコンポーネントを定義
const FormBuilderPage: React.FC = () => {
  return (
    // ページ全体のコンテナ
    <div className='min-h-screen bg-gray-100'>
      {/* ヘッダー部分 */}
      <header className='bg-blue-600 text-white p-4'>
        <h1 className='text-2xl font-bold'>Google Form練習</h1>
      </header>

      {/* メインコンテンツ */}
      <main className='container mx-auto p-4'>
        <GoogleFormClone />
      </main>

    </div>
  );
};

// ページコンポーネントをエクスポート
export default FormBuilderPage;

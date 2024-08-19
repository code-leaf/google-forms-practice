// Reactと必要なコンポーネントをインポート
import { AnswerPageMain } from '@/app/answerPage/components/AnswerPageMain';
import { Header } from '@/app/components/Header';
import React from 'react';
// ページコンポーネントを定義
const FormBuilderPage: React.FC = () => {
  return (
    // ページ全体のコンテナ
    <div className='min-h-screen bg-purple-100'>
      {/* ヘッダー部分 */}
      <Header activeTab={2} />
      {/* メインコンテンツ */}
      <main className='flex justify-center container mx-auto p-4'>
        <div className='max-w-4xl mx-auto w-full'>
          <AnswerPageMain />
        </div>
      </main>
    </div>
  );
};

// ページコンポーネントをエクスポート
export default FormBuilderPage;

'use client'; // クライアントサイドでの実行を明示

// Reactと必要なコンポーネントをインポート
import { AnsswerMessage } from '@/app/answerPage/components/AnsswerMessage';
import { AnswerPageMain } from '@/app/answerPage/components/AnswerPageMain';
import { Header } from '@/app/components/Header';
import React from 'react';
import { RecoilRoot } from 'recoil';
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
          <RecoilRoot>
            <AnswerPageMain />
            <AnsswerMessage />
          </RecoilRoot>
        </div>
      </main>
    </div>
  );
};

// ページコンポーネントをエクスポート
export default FormBuilderPage;

import { AnswerPage } from '@/app/answerPage/components/AnswerPage';
// Reactと必要なコンポーネントをインポート
import { Header } from '@/app/components/Header';

// ページコンポーネントを定義
const FormBuilderPage = () => {
  return (
    // ページ全体のコンテナ
    <div className='min-h-screen bg-purple-100'>
      {/* ヘッダー部分 */}
      <Header activeTab={2} />
      {/* メインコンテンツ */}
      <main className='flex justify-center container mx-auto p-4'>
        <AnswerPage />
      </main>
    </div>
  );
};

// ページコンポーネントをエクスポート
export default FormBuilderPage;

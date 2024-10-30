import { AnsswerMessage } from '@/app/answerPage/components/AnsswerResMessage';
import { AnswerPageMain } from '@/app/answerPage/components/AnswerPageMain';
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
        <div className='max-w-4xl mx-auto w-full'>
          <div>
            <AnswerPageMain />
            <AnsswerMessage />
          </div>
        </div>
      </main>
    </div>
  );
};

// ページコンポーネントをエクスポート
export default FormBuilderPage;

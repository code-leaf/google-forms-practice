// Reactと必要なコンポーネントをインポート
import { Header } from '@/app/components/Header';
import GoogleFormClone from '@/app/components/Main/GoogleFormClone';
import { Toolbar } from '@/app/components/Main/Toolbar';

// ページコンポーネントを定義
const FormBuilderPage = () => {
  return (
    // ページ全体のコンテナ
    <div className='min-h-screen bg-purple-100'>
      {/* ヘッダー部分 */}
      <Header activeTab={1} />
      {/* ページ全体のコンテナ */}
      {/* メインコンテンツ */}
      <main className='flex justify-center'>
        <div className='flex'>
          <GoogleFormClone />
          <div className='flex-none'>
            <Toolbar />
          </div>
        </div>
      </main>
    </div>
  );
};

// ページコンポーネントをエクスポート
export default FormBuilderPage;

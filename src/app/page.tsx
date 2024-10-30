// Reactと必要なコンポーネントをインポート
import { Header } from '@/app/components/Header';
import GoogleFormClone from '@/app/components/MainRecoil/GoogleFormClone';
import { Toolbar } from '@/app/components/MainRecoil/Toolbar';

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

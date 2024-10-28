// Reactと必要なコンポーネントをインポート
import { MainRecoil } from '@/app/components/MainRecoil';

// ページコンポーネントを定義
const FormPreview = () => {
  return (
    // ページ全体のコンテナ
    <div className='min-h-screen bg-purple-100'>
      {/* メインコンテンツ */}
      <main className='flex justify-center'>
        <div className='flex'>
          <MainRecoil showToolbar={false} />
        </div>
      </main>
    </div>
  );
};

// ページコンポーネントをエクスポート
export default FormPreview;

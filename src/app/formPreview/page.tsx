// Reactと必要なコンポーネントをインポート
import { MainRecoil } from '@/app/components/MainRecoil';

// ページコンポーネントを定義
const FormPreview = () => {
  return (
    <div className='min-h-screen bg-purple-100'>
      <MainRecoil Preview={true} />;
    </div>
  );
};

// ページコンポーネントをエクスポート
export default FormPreview;

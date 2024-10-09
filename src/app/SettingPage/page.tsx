import { Header } from '@/app/components/Header';
import { SettingRecoil } from '@/app/SettingPage/components/SettingRecoil';

const SettingPage = () => {
  return (
    //   ページ全体のコンテナ
    <div className='min-h-screen bg-purple-100'>
      {/* ヘッダー部分 */}
      <Header activeTab={3} />
      <main className='flex justify-center container mx-auto p-4'>
        <div className='max-w-4xl mx-auto w-full text-gray-600'>
          <SettingRecoil />
        </div>
      </main>
    </div>
  );
};

export default SettingPage;

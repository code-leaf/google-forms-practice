'use client'; // クライアントサイドでの実行を明示

import GoogleFormClone from '@/app/components/MainRecoil/GoogleFormClone';
import { Toolbar } from '@/app/components/MainRecoil/Toolbar';
import { PreviewHeader } from '@/app/formPreview/components/PreviewHeader';
import { RecoilRoot } from 'recoil';

type MainRecoilProps = {
  Preview?: boolean; // previewページへ遷移するかエディターへ遷移するか判定
};

export const MainRecoil = ({ Preview = false }: MainRecoilProps) => {
  return (
    <RecoilRoot>
      {/* ページ全体のコンテナ */}
      {/* メインコンテンツ */}
      <main className='flex justify-center'>
        <div className='flex'>
          {Preview ? (
            <PreviewHeader />
          ) : (
            <div className='flex'>
              <GoogleFormClone />
              <div className='flex-none'>
                <Toolbar />
              </div>
            </div>
          )}
        </div>
      </main>
    </RecoilRoot>
  );
};

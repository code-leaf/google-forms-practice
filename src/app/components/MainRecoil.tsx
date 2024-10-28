'use client'; // クライアントサイドでの実行を明示

import GoogleFormClone from '@/app/components/MainRecoil/GoogleFormClone';
import { Toolbar } from '@/app/components/MainRecoil/Toolbar';
import { RecoilRoot } from 'recoil';

type MainRecoilProps = {
  showToolbar?: boolean; // Toolbarの表示を制御するためのプロパティ
};

export const MainRecoil = ({ showToolbar = true }: MainRecoilProps) => {
  return (
    <RecoilRoot>
      <GoogleFormClone />
      {/* showToolbarがtrueの時だけToolbarを表示 */}
      {showToolbar && (
        <div className='flex-none'>
          <Toolbar />
        </div>
      )}
    </RecoilRoot>
  );
};

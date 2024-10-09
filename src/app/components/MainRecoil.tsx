'use client'; // クライアントサイドでの実行を明示

import GoogleFormClone from '@/app/components/GoogleFormClone';
import { Toolbar } from '@/app/components/Toolbar';
import { RecoilRoot } from 'recoil';

export const MainRecoil = () => {
  return (
    <RecoilRoot>
      <GoogleFormClone />
      <div className='flex-none'>
        <Toolbar />
      </div>
    </RecoilRoot>
  );
};

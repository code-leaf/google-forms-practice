'use client'; // クライアントサイドでの実行を明示

import { Default } from '@/app/SettingPage/components/Default';
import { Setting } from '@/app/SettingPage/components/Setting';
import { RecoilRoot } from 'recoil';

export const SettingRecoil = () => {
  return (
    <RecoilRoot>
      <Setting />
      <Default />
    </RecoilRoot>
  );
};

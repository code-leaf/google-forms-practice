import { EmailCollectionOption } from '@/types/SettingsType';
import { atom } from 'recoil';

export const emailCollectionOptionAtom = atom<EmailCollectionOption>({
  key: 'emailCollectionOption', // 一意のキー
  default: '収集しない', // 初期値
});
import { atom } from 'recoil';

export const endLinearScaleAtom = atom<number>({
  key: 'endLinearScaleAtom', // 一意のキー
  default: 5, // 初期値
});

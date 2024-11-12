import { atom } from 'recoil';

export const startLinearScaleAtom = atom<number>({
  key: 'startLinearScaleAtom', // 一意のキー
  default: 1, // 初期値
});

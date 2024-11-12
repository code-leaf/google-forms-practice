import { atom } from 'recoil';

export const selectedDropdownAtom = atom<string>({
  key: 'selectedDropdownAtom', // 一意のキー
  default: '選択', // 初期値
});

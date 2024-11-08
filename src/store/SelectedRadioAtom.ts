import { atom } from 'recoil';

/** ラジオボタンの状態を管理するためのatom */
export const selectedRadioAtom = atom<string | null>({
  key: 'selectedRadioAtom', // 一意のキー
  default: null, // 初期値
});

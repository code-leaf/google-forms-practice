import { atom } from 'recoil';

export const linearScaleLabelAtom = atom<{ [key: number]: string }>({
  key: 'linearScaleLabelAtom', // 一意のキー
  default: {}, // 初期値
});

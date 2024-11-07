import { atom } from 'recoil';

type RadioOptionsAtom = {
  id: string;
  text: string;
};

export const radioOptionsAtom = atom<RadioOptionsAtom[]>({
  key: 'radioOptionsAtom', // 一意のキー
  default: [{ id: '1', text: '' }], // 初期値
});

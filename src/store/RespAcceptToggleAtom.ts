import { atom } from 'recoil';

// 回答の受け付け状況を管理するRecoil atom
export const respAcceptToggleAtom = atom<boolean>({
  key: 'respAcceptToggleAtom', // ユニークなキー
  default: true, // デフォルト値はtrue
});

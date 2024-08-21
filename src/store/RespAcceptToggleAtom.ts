import { atom } from 'recoil';

// 質問の型定義
export type RespAcceptToggle = {};

// 質問リストを管理するRecoil atom
export const respAcceptToggleAtom = atom<boolean>({
  key: 'respAcceptToggleAtom', // ユニークなキー
  default: true, // デフォルト値はtrue
});

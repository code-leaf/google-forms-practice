import { atom } from 'recoil';

// 回答の型定義
export type Answer = {
  qusetionId: string;
  value: string | string[];
};

export const answersAtom = atom<Answer[]>({
  key: 'answersAtom',
  default: [], // デフォルトは空の配列
});

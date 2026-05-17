import { atom } from 'jotai';

// 回答の型定義
export type Answer = {
  qusetionId: string;
  value: string | string[];
};

export const answersAtom = atom<Answer[]>([]);

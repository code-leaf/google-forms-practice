import { QuestionType } from '@/types/formTypes';
import { atom, selector } from 'recoil';

// 質問オブジェクトの型定義
export type Question = {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options?: string[];
  answer?: string | number;
};

// 質問リストを管理するRecoil atom
export const questionsAtom = atom<Question[]>({
  key: 'questionsAtom', // ユニークなキー
  default: [], // デフォルト値は空の配列
});

// 質問データを取得or更新するためのRecoilのselector
export const questionSelector = selector({
  key: 'questionSelector',
  // "get"関数は、現在の"questionsAtom"の状態を取得
  get: ({ get }) => get(questionsAtom),
  // "set"関数は、新しい値を"questionsAtom"に設定
  set: ({ set }, newValue) => set(questionsAtom, newValue),
});

import { QuestionType } from '@/types/formTypes';
import { atom } from 'jotai';

// 質問オブジェクトの型定義
export type Question = {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options?: string[];
  answer?: string | number;
};

// 質問リストを管理するJotai atom 
export const questionsAtom = atom<Question[]>([]);

// 質問データを取得or更新するためのJotai atom (読み書き両用)
export const questionSelector = atom(
  (get) => get(questionsAtom),
  (get, set, newValue: Question[]) => set(questionsAtom, newValue)
);

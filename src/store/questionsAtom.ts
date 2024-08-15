import { atom } from 'recoil';

// 質問の型定義
export type QuestionType =
  | 'shortAnswer'
  | 'paragraph'
  | 'multipleChoice'
  | 'checkboxes';

// 質問オブジェクトの型定義
export type Question = {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options?: string[];
};

// 質問リストを管理するRecoil atom
export const questionsAtom = atom<Question[]>({
  key: 'questionsAtom', // ユニークなキー
  default: [], // デフォルト値は空の配列
});

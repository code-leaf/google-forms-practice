import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// インプット要素の型定義
export type SelectedInput = 'title' | 'description' | undefined;
// フォームの質問タイプを定義
export type QuestionType =
  | 'shortAnswer'
  | 'paragraph'
  | 'multipleChoice'
  | 'checkboxes';

// 質問オブジェクトの型を定義
export type Question = {
  id: string; // 質問の一意のID
  type: QuestionType; // 質問のタイプ
  title: string; // 質問のタイトル
  options?: string[]; // 選択肢（複数選択や一択の場合）
  required: boolean; // 必須回答かどうか
};

// FormatIconsコンポーネントのプロップスの型定義
export type FormatIconsProps = {
  isVisible: boolean; // アイコンの表示/非表示を制御するプロパティ
};

// アイコン情報の型定義
export type IconInfo = {
  icon: IconDefinition;
  ariaLabel: string;
};

 export type DropdownOption = {
  value: string;
  label: string;
  icon: IconDefinition;
};

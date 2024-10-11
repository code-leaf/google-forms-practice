import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faAlignJustify,
  faAlignLeft,
  faCalendarDays,
  faCircleChevronDown,
  faCircleDot,
  faClock,
  faCloudArrowUp,
  faSliders,
  faSquareCheck,
  faTable,
  faTableCellsLarge,
} from '@fortawesome/free-solid-svg-icons';

// インプット要素の型定義
export type SelectedInput = 'title' | 'description' | undefined;

// フォームドロップダウンの型定義
export type DropdownOption = {
  value: string;
  label: string;
  icon: IconDefinition;
};

export const questionTypes: DropdownOption[] = [
  { value: 'shortAnswer', label: '記述式（短文）', icon: faAlignLeft },
  { value: 'paragraph', label: '段落', icon: faAlignJustify },
  { value: 'multipleChoice', label: 'ラジオボタン', icon: faCircleDot },
  { value: 'checkboxes', label: 'チェックボックス', icon: faSquareCheck },
  { value: 'dropdown', label: 'プルダウン', icon: faCircleChevronDown },
  {
    value: 'fileUpload',
    label: 'ファイルのアップロード',
    icon: faCloudArrowUp,
  },
  { value: 'linearScale', label: '均等目盛', icon: faSliders },
  {
    value: 'multipleChoiceGrid',
    label: '選択式（グリッド）',
    icon: faTableCellsLarge,
  },
  {
    value: 'checkboxGrid',
    label: 'チェックボックス（グリッド）',
    icon: faTable,
  },
  { value: 'date', label: '日付', icon: faCalendarDays },
  { value: 'time', label: '時刻', icon: faClock },
];

// フォームの質問タイプを定義
export type QuestionType = DropdownOption['value'];

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

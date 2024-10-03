export type AnswerSettingsProps = {
  isExpanded: boolean;
};

export type EmailCollectionOption =
  | '収集しない'
  | '確認済み'
  | '回答者からの入力';

export type SendCopyOption = 'オフ' | 'リクエストされた場合' | '常に表示';

export type TestSettingsProps = {
  isChecked: boolean;
};

export type ScoreDisplaySettings = {
  displayTiming: 'immediate' | 'manual';
  defaultScore: number;
};

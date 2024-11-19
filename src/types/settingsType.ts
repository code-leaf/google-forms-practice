export type AnswerSettingsProps = {
  isExpanded: boolean;
  limitOneRespons: boolean;
  togglelimitOneRespons: () => void;
};

export type DisplaySetting = {
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

export type UseTestSettings = {
  settings: ScoreDisplaySettings;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  IncorrectQuestions: boolean;
  toggleSetting: (
    key: 'IncorrectQuestions' | 'CorrectAnswers' | 'Scores'
  ) => void;
  CorrectAnswers: boolean;
  Scores: boolean;
};

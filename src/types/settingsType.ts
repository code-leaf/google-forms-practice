/**
 * ユーザーの回答設定に関するプロパティを定義した型
 * @property {boolean} isExpanded - 設定項目が展開されているかどうか
 * @property {boolean} limitOneRespons - 回答を1人1回に制限するかどうか
 * @property {() => void} togglelimitOneRespons - 回答制限の設定を切り替える関数
 */
export type AnswerSettingsProps = {
  isExpanded: boolean; // 設定項目が展開されているかを示すフラグ
  limitOneRespons: boolean; // 回答が1人1回に制限されているかを示すフラグ
  togglelimitOneRespons: () => void; // 回答制限を切り替える関数
};

/**
 * 表示設定に関する型
 * @property {boolean} isExpanded - 表示設定が展開されているかどうか
 */
export type DisplaySetting = {
  isExpanded: boolean; // 表示設定が展開されているかを示すフラグ
};

/**
 * メールアドレス収集のオプションを表す型
 * - '収集しない': メールアドレスを収集しない
 * - '確認済み': 確認済みのメールアドレスを収集
 * - '回答者からの入力': 回答者が直接入力する
 */
export type EmailCollectionOption =
  | '収集しない' // メールアドレスを収集しない
  | '確認済み' // 確認済みのメールアドレスを収集
  | '回答者からの入力'; // 回答者がメールアドレスを入力

/**
 * 送信コピーオプションを表す型
 * - 'オフ': コピーを送信しない
 * - 'リクエストされた場合': 要求されたときのみコピーを送信
 * - '常に表示': 常に送信オプションを表示
 */
export type SendCopyOption =
  | 'オフ' // コピーを送信しない
  | 'リクエストされた場合' // 要求があったときのみコピーを送信
  | '常に表示'; // 常に送信オプションを表示

/**
 * テスト設定に関するプロパティを定義した型
 * @property {boolean} isChecked - 設定が有効かどうか
 */
export type TestSettingsProps = {
  isChecked: boolean; // 設定が有効かどうかを示すフラグ
};

/**
 * スコア表示設定に関する型
 * @property {'immediate' | 'manual'} displayTiming - スコアを表示するタイミング
 * @property {number} defaultScore - 初期設定のスコア
 */
export type ScoreDisplaySettings = {
  displayTiming: 'immediate' | 'manual'; // スコア表示タイミング: 即時か手動か
  defaultScore: number; // 初期スコアの設定
};

/**
 * テスト設定のカスタムフック用プロパティを定義した型
 * @property {ScoreDisplaySettings} settings - スコア表示設定
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} handleChange - 設定変更時に実行する関数
 * @property {boolean} IncorrectQuestions - 不正解の問題を表示するかどうか
 * @property {(key: 'IncorrectQuestions' | 'CorrectAnswers' | 'Scores') => void} toggleSetting - 設定項目を切り替える関数
 * @property {boolean} CorrectAnswers - 正解を表示するかどうか
 * @property {boolean} Scores - スコアを表示するかどうか
 */
export type UseTestSettings = {
  settings: ScoreDisplaySettings; // スコア表示設定
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // 入力変更時の関数
  IncorrectQuestions: boolean; // 不正解の問題を表示するかを示すフラグ
  toggleSetting: (
    key: 'IncorrectQuestions' | 'CorrectAnswers' | 'Scores'
  ) => void; // 設定のオン/オフを切り替える関数
  CorrectAnswers: boolean; // 正解を表示するかを示すフラグ
  Scores: boolean; // スコアを表示するかを示すフラグ
};

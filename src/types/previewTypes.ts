/**
 *  グリッドの回答収集用の型定義
 * @property {string} rowId - グリッド行のID
 * @property {number} columnIndex - 回答が入力された列のインデックス
 * @property {string} value - ユーザーが選択した列　「〇列目」
 */
export type GridAnswer = {
  rowId: string;
  columnIndex: number;
  value: string;
};

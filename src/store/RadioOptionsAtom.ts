import { atomFamily } from 'recoil';

/** ラジオボタンの選択肢
 * @property id: 選択肢の一意なID
 * @property text: 選択肢のテキスト
 */
type RadioOptionsFamily = {
  id: string;
  text: string;
};

/** 異なる選択肢セットを動的に管理
 * - atomFamily:「同じような構造だけど、独立して管理したい状態」
 * @property パラメーター(id)を受け取ることで、異なる初期値を返す
 */
export const radioOptionsFamily = atomFamily<RadioOptionsFamily[], string>({
  key: 'radioOptionsFamily', // 一意のキー
  default: (id: string) => [{ id: '1', text: '' }], // パラメーターを受け取る関数に
});

import { atomFamily } from 'jotai/utils';
import { atom } from 'jotai';

/** ラジオボタンの選択肢
 * @property id: 選択肢の一意なID
 * @property text: 選択肢のテキスト
 */
export type RadioOptionsFamily = {
  id: string;
  text: string;
};

/** 異なる選択肢セットを動的に管理
 * - atomFamily:「同じような構造だけど、独立して管理したい状態」
 * - パラメーター(id)を受け取ることで、異なる初期値を返す
 * @property Date.now()で現在のミリ秒単位の時間を取得し、Math.random()でランダムな文字列を追加してユニークなIDを生成
 */
export const radioOptionsFamily = atomFamily((id: string) => 
  atom<RadioOptionsFamily[]>([
    {
      // Date.now()で現在のミリ秒単位の時間を取得し、Math.random()でランダムな文字列を追加してユニークなIDを生成
      id: `option_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      text: '',
    },
  ])
);

import { atom } from 'recoil';

/** 文字列キーとboolean型の値を持つオブジェクト 
 * @property 文字列キーとboolean型の値を持つオブジェクト
*/
type SelectedOptionsAtom = {
  [key: string]: boolean;
};

export const selectedOptionsAtom = atom<SelectedOptionsAtom>({
  key: 'selectedOptionsAtom', // 一意のキー
  default: {}, // 初期値
});

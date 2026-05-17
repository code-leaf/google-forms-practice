import { atom } from 'jotai';

/** 文字列キーとboolean型の値を持つオブジェクト 
 * @property 文字列キーとboolean型の値を持つオブジェクト
*/
export type SelectedOptionsAtom = {
  [key: string]: boolean;
};

export const selectedOptionsAtom = atom<SelectedOptionsAtom>({});

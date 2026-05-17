import { atom } from 'jotai';

/** ラジオボタンの状態を管理するためのatom */
export const selectedRadioAtom = atom<string | null>(null);

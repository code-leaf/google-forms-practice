import { atom } from 'recoil';

type FormHeaderAtom = {
  title: string;
  description: string;
};

export const formHeaderAtom = atom<FormHeaderAtom>({
  key: 'formHeaderAtom', // 一意のキー
  default: {
    title: '',
    description: '',
  }, // 初期値
});

import { atom } from 'jotai';

type FormHeaderAtom = {
  title: string;
  description: string;
};

export const formHeaderAtom = atom<FormHeaderAtom>({
  title: '',
  description: '',
});

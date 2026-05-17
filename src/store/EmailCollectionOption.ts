import { EmailCollectionOption } from '@/types/SettingsType';
import { atom } from 'jotai';

export const emailCollectionOptionAtom = atom<EmailCollectionOption>('収集しない');
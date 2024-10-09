import { emailCollectionOptionAtom } from '@/store/EmailCollectionOption';
import { EmailCollectionOption } from '@/types/SettingsType';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

export type UseEmailCollection = {
  emailCollectionOption: EmailCollectionOption;
  handleEmailCollectionChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  getEmailCollectionDescription: (
    option: EmailCollectionOption
  ) =>
    | ''
    | '回答者による Google へのログインが必要になります'
    | '回答者はメールの応答を手動で入力します';
  isEmailCollectionDisabled: boolean;
};

export const useEmailCollection = (): UseEmailCollection => {
  const [emailCollectionOption, setEmailCollectionOption] = useRecoilState(
    emailCollectionOptionAtom
  );

  const [defaultOption, setDefaultOption] = useState<string>('収集しない');

  const handleEmailCollectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEmailCollectionOption(e.target.value as EmailCollectionOption);
  };

  const getEmailCollectionDescription = (option: EmailCollectionOption) => {
    switch (option) {
      case '収集しない':
        return '';
      case '確認済み':
        return '回答者による Google へのログインが必要になります';
      default:
        return '回答者はメールの応答を手動で入力します';
    }
  };

  const isEmailCollectionDisabled = emailCollectionOption === '収集しない';

  return {
    emailCollectionOption,
    getEmailCollectionDescription,
    handleEmailCollectionChange,
    isEmailCollectionDisabled,
  };
};

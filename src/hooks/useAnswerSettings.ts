import { EmailCollectionOption, SendCopyOption } from '@/types/SettingsType';
import { useCallback, useState } from 'react';

type UseAnswerSettings = {
  emailCollectionOption: EmailCollectionOption;
  sendCopyOption: SendCopyOption;
  allowEditAnswer: boolean;
  limitOneRespons: boolean;
  toggleAllowEditAnswer: () => void;
  togglelimitOneRespons: () => void;
  getEmailCollectionDescription: (
    option: EmailCollectionOption
  ) =>
    | ''
    | '回答者による Google へのログインが必要になります'
    | '回答者はメールの応答を手動で入力します';
  handleEmailCollectionChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  isEmailCollectionDisabled: boolean;
  handleSendCopyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const useAnswerSettings = (): UseAnswerSettings => {
  const [emailCollectionOption, setEmailCollectionOption] =
    useState<EmailCollectionOption>('収集しない');

  const [sendCopyOption, setSendCopyOption] = useState<SendCopyOption>('オフ');

  const [allowEditAnswer, setAllowEditAnswer] = useState<boolean>(false);

  const [limitOneRespons, setLimitOneRespons] = useState<boolean>(false);

  // トグルボタンのクリックハンドラをコールバック関数として定義
  const toggleAllowEditAnswer = useCallback(() => {
    setAllowEditAnswer((prev) => !prev); // 前の状態を使用して更新
  }, [setAllowEditAnswer]);

  // トグルボタンのクリックハンドラをコールバック関数として定義
  const togglelimitOneRespons = useCallback(() => {
    setLimitOneRespons((prev) => !prev); // 前の状態を使用して更新
  }, [setLimitOneRespons]);

  const handleEmailCollectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEmailCollectionOption(e.target.value as EmailCollectionOption);
  };

  const handleSendCopyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSendCopyOption(e.target.value as SendCopyOption);
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
    sendCopyOption,
    allowEditAnswer,
    limitOneRespons,
    toggleAllowEditAnswer,
    togglelimitOneRespons,
    getEmailCollectionDescription,
    handleEmailCollectionChange,
    isEmailCollectionDisabled,
    handleSendCopyChange,
  };
};

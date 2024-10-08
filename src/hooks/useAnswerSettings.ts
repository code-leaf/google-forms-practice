import { UseEmailCollection, useEmailCollection } from '@/hooks/useEmailCollection';
import { SendCopyOption } from '@/types/SettingsType';
import { useCallback, useState } from 'react';

type UseAnswerSettings = {
  sendCopyOption: SendCopyOption;
  allowEditAnswer: boolean;
  limitOneRespons: boolean;
  toggleAllowEditAnswer: () => void;
  togglelimitOneRespons: () => void;
  handleSendCopyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const useAnswerSettings = (): UseAnswerSettings => {
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

  const handleSendCopyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSendCopyOption(e.target.value as SendCopyOption);
  };

  return {
    sendCopyOption,
    allowEditAnswer,
    limitOneRespons,
    toggleAllowEditAnswer,
    togglelimitOneRespons,
    handleSendCopyChange,
  };
};

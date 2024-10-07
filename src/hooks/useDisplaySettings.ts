import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type UseDisplaySettings = {
  progressBar: boolean;
  shuffleQuestion: boolean;
  isEditing: boolean;
  confirmationMessage: string;
  toggleAnswerLinkDisplay: boolean;
  resultOverview: boolean;
  limitMatter: boolean;
  Setting: (
    key:
      | 'ProgressBar'
      | 'ShuffleQuestion'
      | 'IsEditing'
      | 'Save'
      | 'Cancel'
      | 'ToggleAnswerLinkDisplay'
      | 'ResultOverview'
      | 'LimitMatter'
  ) => void;
  setConfirmationMessage: Dispatch<SetStateAction<string>>;
};

export const useDisplaySettings = (
  limitOneRespons: boolean
): UseDisplaySettings => {
  const [progressBar, setProgressBar] = useState<boolean>(false);

  const [shuffleQuestion, setShuffleQuestion] = useState<boolean>(false);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [confirmationMessage, setConfirmationMessage] =
    useState<string>('回答を記録しました');

  const [Cancel, setCancel] = useState<string>('');

  const [toggleAnswerLinkDisplay, setToggleAnswerLinkDisplay] =
    useState<boolean>(false);

  const [resultOverview, setResultOverview] = useState<boolean>(false);

  const [limitMatter, setLimitMatter] = useState<boolean>(false);

  // ボタンの状態変更をする関数
  const Setting = (
    key:
      | 'ProgressBar'
      | 'ShuffleQuestion'
      | 'IsEditing'
      | 'Save'
      | 'Cancel'
      | 'ToggleAnswerLinkDisplay'
      | 'ResultOverview'
      | 'LimitMatter'
  ) => {
    switch (key) {
      case 'ProgressBar':
        setProgressBar((prev) => !prev);
        break;

      case 'ShuffleQuestion':
        setShuffleQuestion((prev) => !prev);
        break;

      case 'IsEditing':
        setIsEditing((prev) => !prev);
        setCancel(confirmationMessage);
        break;

      case 'Save':
        setIsEditing((prev) => !prev);
        break;

      case 'Cancel':
        setConfirmationMessage(Cancel);
        setIsEditing((prev) => !prev);
        break;

      case 'ToggleAnswerLinkDisplay':
        setToggleAnswerLinkDisplay((prev) => !prev);
        break;

      case 'ResultOverview':
        setResultOverview((prev) => !prev);
        break;

      case 'LimitMatter':
        setLimitMatter((prev) => !prev);
        break;
    }
  };

  // 回答を1回に制限する際は、「送信後」の「設定項目2」のトグルボタンをオフに
  useEffect(() => {
    if (limitOneRespons) return setToggleAnswerLinkDisplay(false);
  }, [limitOneRespons]);

  return {
    progressBar,
    shuffleQuestion,
    isEditing,
    confirmationMessage,
    toggleAnswerLinkDisplay,
    resultOverview,
    limitMatter,
    Setting,
    setConfirmationMessage,
  };
};

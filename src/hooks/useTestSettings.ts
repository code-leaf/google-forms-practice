import { ScoreDisplaySettings } from '@/types/SettingsType';
import { useState } from 'react';

type UseTestSettings = {
  settings: ScoreDisplaySettings;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  IncorrectQuestions: boolean;
  toggleSetting: (
    key: 'IncorrectQuestions' | 'CorrectAnswers' | 'Scores'
  ) => void;
  CorrectAnswers: boolean;
  Scores: boolean;
};

export const useTestSettings = (): UseTestSettings => {
  const [settings, setSettings] = useState<ScoreDisplaySettings>({
    displayTiming: 'immediate',
    defaultScore: 0,
  });

  const [IncorrectQuestions, setIncorrectQuestions] = useState<boolean>(true);

  const [CorrectAnswers, setCorrectAnswers] = useState<boolean>(true);

  const [Scores, setScores] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const toggleSetting = (
    key: 'IncorrectQuestions' | 'CorrectAnswers' | 'Scores'
  ) => {
    switch (key) {
      case 'IncorrectQuestions':
        setIncorrectQuestions((prev) => !prev);
        break;

      case 'CorrectAnswers':
        setCorrectAnswers((prev) => !prev);
        break;

      default:
        setScores((prev) => !prev);
        break;
    }
  };

  return {
    settings,
    handleChange,
    IncorrectQuestions,
    toggleSetting,
    CorrectAnswers,
    Scores,
  };
};

import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { AnswerSettingsProps } from '@/types/SettingsType';
import { useState } from 'react';

export const DisplaySettings = ({ isExpanded }: AnswerSettingsProps) => {
  const [progressBar, setProgressBar] = useState<boolean>(false);

  const [shuffleQuestion, setShuffleQuestion] = useState<boolean>(false);

  const toggleSetting = (key: 'ProgressBar' | 'ShuffleQuestion' | 'Scores') => {
    switch (key) {
      case 'ProgressBar':
        setProgressBar((prev) => !prev);
        break;

      case 'ShuffleQuestion':
        setShuffleQuestion((prev) => !prev);
        break;

      //   default:
      //     setScores((prev) => !prev);
      //     break;
    }
  };

  if (!isExpanded) return undefined;

  return (
    <div className=''>
      {isExpanded && (
        <div className='pl-6 mt-6 space-y-4'>
          {/* フォームの表示 */}
          <p className='text-xs text-gray-500'>フォームの表示</p>

          {/* 設定項目1 */}
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-lg'>進行状況バーを表示</h2>
            </div>
            <ToggleButton
              isChecked={progressBar}
              onChange={() => toggleSetting('ProgressBar')}
            />
          </div>

          {/* 設定項目2 */}
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-lg'>質問の順序をシャッフルする</h2>
            </div>
            <ToggleButton
              isChecked={shuffleQuestion}
              onChange={() => toggleSetting('ShuffleQuestion')}
            />
          </div>

          {/* 送信後 */}
          <p className='text-xs text-gray-500'>送信後</p>
        </div>
      )}
    </div>
  );
};

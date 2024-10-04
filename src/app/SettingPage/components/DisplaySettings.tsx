import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { AnswerSettingsProps } from '@/types/SettingsType';
import { useState } from 'react';

export const DisplaySettings = ({
  isExpanded,
  limitOneRespons,
}: AnswerSettingsProps) => {
  const [progressBar, setProgressBar] = useState<boolean>(false);

  const [shuffleQuestion, setShuffleQuestion] = useState<boolean>(false);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [confirmationMessage, setConfirmationMessage] =
    useState<string>('回答を記録しました');

  const [Cancel, setCancel] = useState<string>('');

  const [toggleAnswerLinkDisplay, setToggleAnswerLinkDisplay] =
    useState<boolean>(false);

  const Setting = (
    key:
      | 'ProgressBar'
      | 'ShuffleQuestion'
      | 'IsEditing'
      | 'Save'
      | 'Cancel'
      | 'ToggleAnswerLinkDisplay'
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
              onChange={() => Setting('ProgressBar')}
              limitOneRespons={false}
            />
          </div>

          {/* 設定項目2 */}
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-lg'>質問の順序をシャッフルする</h2>
            </div>
            <ToggleButton
              isChecked={shuffleQuestion}
              onChange={() => Setting('ShuffleQuestion')}
              limitOneRespons={false}
            />
          </div>

          {/* 送信後 */}
          <p className='text-xs text-gray-500'>送信後</p>
          {/* 設定項目1 */}
          <div className='flex items-center justify-between'>
            <div className='relative sm:w-2/3'>
              <h2
                className={`bg-white ${
                  isEditing
                    ? 'text-sm z-10 absolute left-2 -top-2 px-1'
                    : 'text-lg'
                }`}
              >
                確認メッセージ
              </h2>
              {isEditing ? (
                <input
                  type='text'
                  placeholder='回答を記録しました'
                  value={confirmationMessage}
                  onChange={(e) => setConfirmationMessage(e.target.value)}
                  className='w-full p-4 border rounded text-sm focus:border-blue-500 focus:outline-none focus:border-2'
                />
              ) : (
                <p className='text-xs text-gray-500'>{confirmationMessage}</p>
              )}
            </div>

            {isEditing ? (
              <div className='space-x-1'>
                <button
                  className='text-blue-600 py-2 px-3 rounded hover:bg-gray-100'
                  onClick={() => Setting('Save')}
                >
                  保存
                </button>
                <button
                  className='py-2 px-3 rounded hover:bg-gray-100'
                  onClick={() => Setting('Cancel')}
                >
                  キャンセル
                </button>
              </div>
            ) : (
              <button
                onClick={() => Setting('IsEditing')}
                className='text-blue-600 text-sm flex items-center py-2 px-3 rounded hover:bg-gray-100'
              >
                編集
              </button>
            )}
          </div>

          {/* 設定項目2 */}
          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <h2 className='text-lg'>別の回答を送信するためのリンクを表示</h2>
              {limitOneRespons && (
                <p className='text-xs text-gray-500'>
                  <span className='font-extrabold'>
                    [回答を 1 回に制限する]
                  </span>
                  の設定により無効になっています
                </p>
              )}
            </div>

            <ToggleButton
              isChecked={toggleAnswerLinkDisplay}
              onChange={() => Setting('ToggleAnswerLinkDisplay')}
              limitOneRespons={limitOneRespons}
            />
          </div>
        </div>
      )}
    </div>
  );
};

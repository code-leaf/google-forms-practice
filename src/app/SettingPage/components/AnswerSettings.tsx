import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { EmailCollectionSelect } from '@/app/SettingPage/components/EmailCollectionSelect';
import { SendCopySelect } from '@/app/SettingPage/components/SendCopySelect';
import { useAnswerSettings } from '@/hooks/useAnswerSettings';
import { AnswerSettingsProps } from '@/types/SettingsType';

export const AnswerSettings = ({
  isExpanded,
  limitOneRespons,
  togglelimitOneRespons,
}: AnswerSettingsProps) => {
  const {
    emailCollectionOption,
    sendCopyOption,
    allowEditAnswer,
    toggleAllowEditAnswer,
    getEmailCollectionDescription,
    handleEmailCollectionChange,
    isEmailCollectionDisabled,
    handleSendCopyChange,
  } = useAnswerSettings();
  if (!isExpanded) return undefined;

  return (
    <div>
      {isExpanded && (
        <div className='pl-6 mt-6'>
          {/* 設定項目1 */}
          <div className='mb-4'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm mb-1'>メールアドレスを収集する</p>
                {sendCopyOption !== 'オフ' && (
                  <p className='text-sm text-gray-500'>
                    <span className='font-extrabold'>
                      回答のコピーを回答者に送信
                    </span>
                    する場合は、オンにする必要があります
                  </p>
                )}
                <p className='text-sm text-gray-500'>
                  {getEmailCollectionDescription(emailCollectionOption)}
                </p>
              </div>
              <EmailCollectionSelect
                value={emailCollectionOption}
                onChange={handleEmailCollectionChange}
              />
            </div>
          </div>

          {/* 設定項目2 */}
          <div className='mb-4'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm'>回答のコピーを回答者に送信</p>
                {isEmailCollectionDisabled && (
                  <p className='text-sm text-gray-500'>
                    <span className='font-extrabold'>
                      [メールアドレスを収集する]
                    </span>
                    をオンにする必要があります
                  </p>
                )}
              </div>

              <SendCopySelect
                value={sendCopyOption}
                onChange={handleSendCopyChange}
                disabled={isEmailCollectionDisabled}
              />
            </div>
          </div>

          {/* 設定項目3 */}
          <div className='mb-4'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm'>回答の編集を許可する</p>
                <p className='text-xs text-gray-500'>
                  提出後に解答を編集することを許可します
                </p>
              </div>
              <ToggleButton
                isChecked={allowEditAnswer}
                onChange={toggleAllowEditAnswer}
                limitOneRespons={false}
              />
            </div>
          </div>

          <p className='mb-4 text-xs text-gray-500'>ログインの必須</p>

          {/* 設定項目4 */}
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm'>回答を1回に制限する</p>
              {limitOneRespons && (
                <p className='text-xs text-gray-500'>
                  回答者による Google へのログインが必要になります。
                </p>
              )}
            </div>
            <ToggleButton
              isChecked={limitOneRespons}
              onChange={togglelimitOneRespons}
              limitOneRespons={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

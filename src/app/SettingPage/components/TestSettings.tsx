import { ToggleButton } from '@/app/components/tool/ToggleButton';
import { useTestSettings } from '@/hooks/useTestSettings';
import { TestSettingsProps } from '@/types/settingsType';

export const TestSettings = ({ isChecked }: TestSettingsProps) => {
  const {
    settings,
    handleChange,
    IncorrectQuestions,
    toggleSetting,
    CorrectAnswers,
    Scores,
  } = useTestSettings();
  if (!isChecked) return undefined;

  return (
    <div>
      {isChecked && (
        <div className='pl-6 mt-6 space-y-4'>
          {/* 設定項目1 */}
          <p className='text-sm'>成績の発表</p>

          {/* ラジオボタン１ */}
          <div className='flex items-center space-x-2'>
            <input
              type='radio'
              id='immediate'
              name='displayTiming'
              value='immediate'
              checked={settings.displayTiming === 'immediate'}
              onChange={handleChange}
              className='accent-purple-500 h-4 w-4'
            />
            <label htmlFor='immediate'>送信直後</label>
          </div>

          {/* ラジオボタン２ */}
          <div>
            <div className='flex items-center space-x-2'>
              <input
                type='radio'
                id='manual'
                name='displayTiming'
                value='manual'
                checked={settings.displayTiming === 'manual'}
                onChange={handleChange}
                className='accent-purple-500 h-4 w-4'
              />
              <label htmlFor='manual'>確認後に手動で表示する</label>
            </div>
            <p className='text-sm text-gray-500 ml-4'>
              ［回答のコピーを回答者に送信］と［メールアドレスを収集する］がオンになります
            </p>
          </div>

          {/* 設定項目2 */}
          <p className='text-sm'>回答者の設定</p>

          {/* トグルボタン1 */}
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='font-medium text-lg'>不正解だった質問</h2>
              <p className='text-xs text-gray-500'>
                解答者はどの問題が不正解だったかを確認できます
              </p>
            </div>
            <ToggleButton
              isChecked={IncorrectQuestions}
              onChange={() => toggleSetting('IncorrectQuestions')}
              limitOneRespons={false}
            />
          </div>

          {/* トグルボタン2 */}
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='font-medium text-lg'>正解</h2>
              <p className='text-xs text-gray-500'>
                解答者は、成績の通知後に正解を確認できます
              </p>
            </div>
            <ToggleButton
              isChecked={CorrectAnswers}
              onChange={() => toggleSetting('CorrectAnswers')}
              limitOneRespons={false}
            />
          </div>

          {/* トグルボタン3 */}
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='font-medium text-lg'>点数</h2>
              <p className='text-xs text-gray-500'>
                解答者は、総合得点と各問題の得点を確認できます
              </p>
            </div>
            <ToggleButton
              isChecked={Scores}
              onChange={() => toggleSetting('Scores')}
              limitOneRespons={false}
            />
          </div>

          {/* 設定項目3 */}
          <p className='text-sm'>全テストのデフォルト設定</p>

          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <h2 className='font-medium text-lg flex-grow'>
                デフォルトで質問に割り当てる点数
              </h2>
              <p className='text-xs text-gray-500'>
                新しいすべての質問に割り当てる点数
              </p>
            </div>
            <div>
              <input
                type='number'
                id='defaultScore'
                name='defaultScore'
                value={settings.defaultScore}
                min={0}
                onChange={handleChange}
                className='form-input w-20 text-center'
              />
              <span>点数</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

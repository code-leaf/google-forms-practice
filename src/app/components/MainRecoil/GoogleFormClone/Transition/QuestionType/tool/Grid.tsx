import { useRadioOptions } from '@/hooks/useRadioOptions';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type GridProps = {
  type: 'dropdown';
};

export const Grid = ({ type }: GridProps) => {
  const { options, updateOptionText ,removeOption} = useRadioOptions();
  return (
    <div className='w-1/2'>
      <h3 className='font-medium mb-4'>行</h3>
      {/* 選択肢の表示 */}
      {options.map((option, index) => (
        <div
          key={index}
          className='flex space-x-4 items-center pr-4 mb-2 group'
        >
          {/* ラジオボタンorチェックボックスorプルダウン */}
          {type === 'dropdown' ? (
            <span>{index + 1}.</span> // ドロップダウンの場合は番号を表示
          ) : (
            <input
              type={type === 'multipleChoice' ? 'radio' : 'checkbox'}
              aria-label='チェックボックスの設定'
              id={option.id}
              disabled // プレビュー用なので無効化
              name='options'
              className='mr-2'
            />
          )}
          {/* 実際の選択肢 */}
          <div className='relative p-2 w-full flex-grow border-transparent bg-transparent transition-colors duration-200 focus-within:outline-none'>
            <input
              type='text'
              aria-label='選択肢の内容設定'
              value={option.text}
              onChange={(e) => updateOptionText(option.id, e.target.value)}
              className={`w-full bg-transparent focus:outline-none
                       ${
                         option.text === `その他...`
                           ? 'text-gray-400'
                           : 'text-gray-600'
                       }
                        `}
              placeholder={`選択肢 ${index + 1}`}
              disabled={option.text === `その他...`}
            />
            {/* フォーカス時のアンダーライン効果 */}
            <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 origin-center transform -translate-x-1/2 group-focus-within:w-full'></span>
          </div>

          {/* 削除ボタン（2つ以上の選択肢がある場合に表示） */}
          {options.length > 1 && (
            <button
              className='ml-2 text-gray-400 '
              title='削除'
              onClick={() => removeOption(option.id)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

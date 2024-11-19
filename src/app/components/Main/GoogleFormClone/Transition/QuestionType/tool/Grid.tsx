import { useRadioOptions } from '@/hooks/useRadioOptions';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type GridProps = {
  questionType?: 'multipleChoiceGrid' | 'checkboxGrid';
  value: string;
  questionId: string;
};

export const Grid = ({ questionType, value, questionId }: GridProps) => {
  // 行と列で異なるIDを使用するように修正
  const uniqueId = `${questionId}_${value === '行' ? 'row' : 'col'}`;
  const { options, updateOptionText, removeOption, addOption } =
    useRadioOptions(uniqueId);
  return (
    <div className='w-1/2'>
      <h3 className='font-medium mb-4'>{value}</h3>
      {/* 選択肢の表示 */}
      {options.map((option, index) => (
        <div
          key={index}
          className='flex space-x-4 items-center pr-4 mb-2 group'
        >
          {/* ラジオボタンorチェックボックスorプルダウン */}
          {questionType === undefined ? (
            <span>{index + 1}.</span> // ドロップダウンの場合は番号を表示
          ) : (
            <input
              type={
                questionType === 'multipleChoiceGrid' ? 'radio' : 'checkbox'
              }
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
              placeholder={` ${index + 1}${value}目`}
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

      {/* 選択肢の追加フィールド */}
      <div className='flex items-center mb-2'>
        {/* タイプに応じて番号またはチェックボックス/ラジオボタンを表示 */}
        {questionType === undefined ? (
          <span className='mr-4'>{options.length + 1}.</span>
        ) : (
          <input
            type={questionType === 'multipleChoiceGrid' ? 'radio' : 'checkbox'}
            aria-label='選択肢の内容設定'
            id={`option-${options.length + 1}`}
            disabled
            name='options'
            className='mr-6'
          />
        )}

        {/* 選択肢追加ボタン */}
        <button
          onClick={addOption}
          className='text-gray-400 border-b-2 border-b-white hover:border-b-gray-200 mr-2 p-2'
        >
          {value}を追加
        </button>
      </div>
    </div>
  );
};

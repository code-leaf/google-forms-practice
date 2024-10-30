import { ImageUploadModal } from '@/app/components/Main/GoogleFormClone/Transition/QuestionType/tool/ImageUploadModal';
import { useRadioOptions } from '@/hooks/useRadioOptions';
import { faImage, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type RadioOptionProps = {
  type: 'multipleChoice' | 'checkboxes' | 'dropdown';
};

export const RadioOptions = ({ type }: RadioOptionProps) => {
  const {
    options,
    updateOptionText,
    setIsModalOpen,
    removeOption,
    addOption,
    hasOther,
    addOther,
    isModalOpen,
  } = useRadioOptions();

  return (
    <div>
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
          {/* 画像追加アイコン（ドロップダウン以外で表示） */}{' '}
          {type !== 'dropdown' && (
            <FontAwesomeIcon
              icon={faImage}
              onClick={() => setIsModalOpen(true)}
              title='画像を追加'
              className='text-white group-hover:text-gray-400 group-focus-within:text-gray-400'
            />
          )}
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
        {type === 'dropdown' ? (
          <span className='mr-4'>{options.length + 1}.</span>
        ) : (
          <input
            type={type === 'multipleChoice' ? 'radio' : 'checkbox'}
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
          選択肢を追加
        </button>

        {/* その他が表示されていない場合のみ、設定できる */}
        {!hasOther && type !== 'dropdown' && (
          <div className='flex'>
            <p>または</p>
            <button onClick={addOther} className='text-blue-400 mr-2'>
              「その他」を追加
            </button>
          </div>
        )}
      </div>

      {/* 画像アップロードモーダル */}
      <ImageUploadModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

import { PreviewInput } from '@/app/formPreview/components/PreviewQuestionType/PreviewInput';
import { usePreviewRadioOptions } from '@/hooks/usePreviewRadioOptions';
import { useRadioOptions } from '@/hooks/useRadioOptions';

export type PreviewRadioOptionsProps = {
  type: 'multipleChoice' | 'checkboxes';
};

export const PreviewRadioOptions = ({ type }: PreviewRadioOptionsProps) => {
  const { options } = useRadioOptions();

  const {
    selectedRadio,
    selectedOptions,
    handleOptionChange,
    hasSelectedOptions,
    clearAllSelections,
  } = usePreviewRadioOptions({ type });

  return (
    <div>
      {/* 選択肢の表示 */}
      {options.map((option, index) => {
        let displayText;

        switch (option.text) {
          case '':
            displayText = `選択肢${index + 1}`;
            break;
          case 'その他...':
            displayText = 'その他:';
            break;
          default:
            displayText = option.text;
            break;
        }

        return (
          <div key={index} className='flex space-x-4 items-center mb-2'>
            {/* ラジオボタンorチェックボックス */}
            <label className='flex justify-center items-center'>
              <input
                //  // 入力タイプを選択：typeが'multipleChoice'ならラジオボタン、そうでなければチェックボックス
                type={type === 'multipleChoice' ? 'radio' : 'checkbox'}
                aria-label='チェックボックスの設定'
                id={option.id}
                name='options'
                className='mr-2 cursor-pointer'
                // 選択状態を決定
                checked={
                  type === 'multipleChoice'
                    ? selectedRadio === option.id // ラジオボタンの場合、選択されたIDと一致するか確認
                    : selectedOptions[option.id] || false // チェックボックスの場合、オプションIDの選択状態を取得（未定義ならfalse）
                }
                onChange={() => handleOptionChange(option.id)}
              />
              {/* 実際の選択肢 */}
              <p className=''>{displayText}</p>
            </label>

            {option.text === 'その他...' ? (
              <PreviewInput placeholder='' className='flex-1' />
            ) : (
              ''
            )}
          </div>
        );
      })}

      {/* 選択解除ボタンの表示 
      ラジオボタンが選択されている時のみ、表示
      */}
      {type === 'multipleChoice' && hasSelectedOptions && (
        <div className='text-gray-500 flex justify-end'>
          <button
            className=' cursor-pointer'
            onClick={() => clearAllSelections()}
          >
            選択を解除
          </button>
        </div>
      )}
    </div>
  );
};

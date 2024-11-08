import { PreviewInput } from '@/app/formPreview/components/PreviewQuestionType/PreviewInput';
import { useRadioOptions } from '@/hooks/useRadioOptions';
import { selectedOptionsAtom } from '@/store/SelectedOptionsAtom';
import { selectedRadioAtom } from '@/store/SelectedRadioAtom';
import { useRecoilState } from 'recoil';

type PreviewRadioOptionsProps = {
  type: 'multipleChoice' | 'checkboxes' ;
};

export const PreviewRadioOptions = ({ type }: PreviewRadioOptionsProps) => {
  const { options } = useRadioOptions();

  const [selectedOptions, setSelectedOptions] =
    useRecoilState(selectedOptionsAtom);

  const [selectedRadio, setSelectedRadio] = useRecoilState(selectedRadioAtom);

  /** 選択されたオプションIDを受け取り、単一選択（ラジオボタン）か複数選択（チェックボックス）かに応じて選択状態を更新する。
   * - ラジオボタン: 現在選択中のオプションと同じオプションが再選択された場合、選択を解除、新しく選択されたオプションに更新
   * - チェックボックス: 対象のオプションの選択状態を反転
   */
  const handleOptionChange = (optionId: string) => {
    if (type === 'multipleChoice') {
      if (selectedRadio === optionId) {
        setSelectedRadio(null);
      } else {
        setSelectedRadio(optionId);
      }
    } else {
      setSelectedOptions((prev) => ({
        ...prev,
        [optionId]: !prev[optionId],
      }));
    }
  };

  /** すべての選択を解除 */
  const clearAllSelections = () => {
    setSelectedRadio(null);
  };

  /** ラジオボタンが選択されているか確認 */
  const hasSelectedOptions = selectedRadio !== null;

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

      {/* 選択解除ボタンの表示 */}
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

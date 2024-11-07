import { PreviewInput } from '@/app/formPreview/components/PreviewQuestionType/PreviewInput';
import { useRadioOptions } from '@/hooks/useRadioOptions';

type PreviewRadioOptionsProps = {
  type: 'multipleChoice' | 'checkboxes' | 'dropdown';
};

export const PreviewRadioOptions = ({ type }: PreviewRadioOptionsProps) => {
  const { options } = useRadioOptions();

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
            {/* ラジオボタンorチェックボックスorプルダウン */}
            {type === 'dropdown' ? (
              <span>{index + 1}.</span> // ドロップダウンの場合は番号を表示
            ) : (
              <input
                type={type === 'multipleChoice' ? 'radio' : 'checkbox'}
                aria-label='チェックボックスの設定'
                id={option.id}
                name='options'
                className='mr-2'
              />
            )}
            {/* 実際の選択肢 */}
            <p className=''>{displayText}</p>
            {option.text === 'その他...' ? (
              <PreviewInput placeholder='' className='flex-1' />
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
};

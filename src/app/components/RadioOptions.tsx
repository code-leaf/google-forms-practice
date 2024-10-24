import { ImageUploadModal } from '@/app/components/ImageUploadModal';
import { faImage, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type RadioOptionProps = {
  type: 'multipleChoice' | 'checkboxes' | 'dropdown';
};

export const RadioOptions = ({ type }: RadioOptionProps) => {
  const [options, setOptions] = useState<string[]>(['']); // 選択肢の配列を管理。初期値は空の選択肢1つ

  const [hasOther, setHasOther] = useState<boolean>(false); // 「その他」オプションの有無を管理

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 画像アップロードモーダルの表示状態を管理

  const addOption = () => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      if (hasOther) {
        // spliceメソッドは、配列の指定した位置に要素を追加したり削除したりできる
        // splice(操作開始位置, 削除する要素数, ...items: 新しく追加する要素)
        newOptions.splice(newOptions.length - 1, 0, '');
      } else {
        // 「その他」オプションがない場合、末尾に追加
        newOptions.push('');
      }
      return newOptions;
    });
  };

  // 「その他」オプションを追加する関数
  const addOther = () => {
    setOptions([...options, `その他...`]); // 現在の選択肢に「その他」を追加
    setHasOther(true); // 「その他」フラグをオン
  };

  // 選択肢のテキストを更新する関数
  const updateOptionText = (index: number, value: string) => {
    const newOptions = [...options]; // 現在の選択肢をコピー
    newOptions[index] = value; // 指定されたインデックスの選択肢を更新
    setOptions(newOptions);
  };

  // 選択肢を削除する関数
  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index)); // 指定されたインデックスの選択肢を除外
    // 削除された選択肢が「その他」の場合、フラグをオフ
    if (options[index] === `その他...`) {
      setHasOther(false);
    }
  };

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
              id={`option-${index}`}
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
              value={option}
              onChange={(e) => updateOptionText(index, e.target.value)}
              className={`w-full bg-transparent focus:outline-none
                ${option === `その他...` ? 'text-gray-400' : 'text-gray-600'}
                `}
              placeholder={`選択肢 ${index + 1}`}
              disabled={option === `その他...`} // 「その他」オプションは編集不可
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
              onClick={() => removeOption(index)}
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

import { ImageUploadModal } from '@/app/components/tool/ImageUploadModal';
import { faImage, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// オプション項目の型定義
type Option = {
  id: string;
  text: string;
};

type RadioOptionProps = {
  type: 'multipleChoice' | 'checkboxes' | 'dropdown';
};

export const RadioOptions = ({ type }: RadioOptionProps) => {
  // オプションの状態を管理
  const [options, setOptions] = useState<Option[]>([{ id: '1', text: '' }]);

  // その他オプションの有無を管理
  const [hasOther, setHasOther] = useState<boolean>(false);

  // モーダルの開閉状態を管理
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 新しいオプションを追加する関数
  const addOption = () => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      const newId = (prevOptions.length + 1).toString();
      if (hasOther) {
        // その他オプションがある場合、最後から2番目に新しいオプションを追加
        // spliceメソッドは、配列の指定した位置に要素を追加したり削除したりできる
        // splice(操作開始位置, 削除する要素数, ...items: 新しく追加する要素)
        newOptions.splice(newOptions.length - 1, 0, { id: newId, text: '' });
      } else {
        // その他オプションがない場合、最後に新しいオプションを追加
        newOptions.push({ id: newId, text: '' });
      }
      return newOptions;
    });
  };

  // その他オプションを追加する関数
  const addOther = () => {
    setOptions([
      ...options,
      { id: (options.length + 1).toString(), text: 'その他...' },
    ]);
    setHasOther(true);
  };

  // オプションのテキストを更新する関数
  const updateOptionText = (id: string, value: string) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, text: value } : option
      )
    );
  };

  // オプションを削除する関数
  const removeOption = (id: string) => {
    setOptions(options.filter((option) => option.id !== id));
    if (options.find((option) => option.id === id)?.text === 'その他...') {
      setHasOther(false);
    }
  };

  const onDragEnd = (result: any) => {
    if (!result) return;
    const items = [...options];
    const [reorderdItem] = items.splice(result.index, 1);
    items.splice(result.index, 0, reorderdItem);
    setOptions(items);
  };

  return (
    <div>
      {/* 選択肢の表示 */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='options'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {options.map((option, index) => (
                <Draggable
                  key={option.id}
                  draggableId={option.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='flex space-x-4 items-center pr-4 mb-2 group'
                    >
                      {/* ラジオボタンorチェックボックスorプルダウン */}
                      {type === 'dropdown' ? (
                        <span>{index + 1}.</span>
                      ) : (
                        <input
                          type={
                            type === 'multipleChoice' ? 'radio' : 'checkbox'
                          }
                          aria-label='チェックボックスの設定'
                          id={option.id}
                          disabled
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
                          onChange={(e) =>
                            updateOptionText(option.id, e.target.value)
                          }
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
                        <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 origin-center transform -translate-x-1/2 group-focus-within:w-full'></span>
                      </div>

                      {/* 画像のアイコン */}
                      {type !== 'dropdown' && (
                        <FontAwesomeIcon
                          icon={faImage}
                          onClick={() => setIsModalOpen(true)}
                          title='画像を追加'
                          className='text-white group-hover:text-gray-400 group-focus-within:text-gray-400'
                        />
                      )}

                      {/* 削除ボタン */}
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* 選択肢の追加フィールド */}
      <div className='flex items-center mb-2'>
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

      <ImageUploadModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

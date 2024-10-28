import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Popover, // Popover全体を制御するコンポーネント
  PopoverContent, // Popoverの中身を表示するコンポーネント
  PopoverTrigger, // Popoverを開くためのトリガー（ボタンなど）
} from '@radix-ui/react-popover';

export const QuestionSettings = () => {
  return (
    // Popoverコンポーネントで全体をラップ
    <Popover>
      {/* asChildプロパティで、子要素のボタンをトリガーとして使用 */}
      <PopoverTrigger asChild>
        <button
          // Radix UI の Popover は自動的にトリガーボタンに data-state 属性を追加します
          // Popover が開くと data-state="open"、閉じると data-state="closed" になります
          className='rounded-full h-12 w-12 hover:bg-gray-100 data-[state=open]:bg-gray-100'
          title='その他のオプション'
        >
          <FontAwesomeIcon icon={faEllipsisVertical} className='h-6 w-6' />
        </button>
      </PopoverTrigger>

      {/* Popoverで表示される中身のコンテンツ */}
      <PopoverContent
        className='w-52 p-4 bg-white rounded-md shadow-xl z-10'
        align='start'
      >
        <div className='px2 mb-2 text-sm'>表示</div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col space-y-4'>
            <p>説明</p>
            <p>回答の検証</p>
          </div>
        </div>
        <p className='text-sm'>※この機能は準備中です。</p>
      </PopoverContent>
    </Popover>
  );
};

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ImageUploadModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

export const ImageUploadModal = ({
  isModalOpen,
  onClose,
}: ImageUploadModalProps) => {
  if (!isModalOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      {/* 実際の操作画面 */}
      <div className='bg-white w-96 border border-gray-400 shadow-lg pb-10'>
        <div className='p-6'>
          {/* ヘッダー部分 */}
          <div className='flex justify-between items-center'>
            <h2>画像の挿入</h2>
            <button
              onClick={onClose}
              className='rounded-full w-8 h-8 text-gray-500 hover:bg-gray-100'
              title='閉じる'
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>

        {/* ツールバー */}
        <div className='space-x-2 px-6'>
          <p className='inline-block text-blue-500 py-3 border-b-2 border-b-blue-500 '>
            アップロード
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

import { faCloud, faX } from '@fortawesome/free-solid-svg-icons';
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
      <div className='bg-white w-1/2 border border-gray-400 shadow-lg pb-10'>
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
        <div className='space-x-4 px-6 flex'>
          <p className='inline-block text-blue-500 py-3 border-b-2 border-b-blue-500 '>
            アップロード
          </p>
          <p className='text-gray-500 py-3 border-b-2 border-white'>
            ウェブカメラ
          </p>
          <p className='text-gray-500 py-3 border-b-2 border-white'>URL</p>
          <p className='text-gray-500 py-3 border-b-2 border-white'>写真</p>
          <p className='text-gray-500 py-3 border-b-2 border-white'>
            Googleドライブ
          </p>
          <p className='text-gray-500 py-3 border-b-2 border-white'>
            Google画像検索
          </p>
          <p className='text-gray-500 py-3 border-b-2 border-white'>
            ※画面切り替えはできません。
          </p>
        </div>
        <hr />

        {/* ドラッグエリア部分 */}
        <div className='flex flex-col justify-center items-center text-center p-8'>
          {/* クラウド画像 */}
          <div className='relative'>
            {/* 大きいクラウド */}
            <FontAwesomeIcon
              icon={faCloud}
              className='text-9xl text-gray-400'
            />

            {/* 小さいクラウド */}
            <FontAwesomeIcon
              icon={faCloud}
              className='text-8xl text-gray-300 absolute left-1/2 bottom-0 transform -translate-x-3/4 translate-y-1/4'
            />
          </div>
          <button className='px-6 py-2 mt-14 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
            参照
          </button>
          <p className='mt-2'>または、ここにファイルをドラッグしてください</p>
          <p>※実際にはアップロードできません。</p>
        </div>
      </div>
    </div>
  );
};

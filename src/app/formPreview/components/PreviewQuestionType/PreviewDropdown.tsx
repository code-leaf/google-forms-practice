'use client';

import { useRadioOptions } from '@/hooks/useRadioOptions';
import { selectedDropdownAtom } from '@/store/SelectedDropdownAtom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

type PreviewDropdownProps = {
  questionId: string;
};

export const PreviewDropdown = ({ questionId }: PreviewDropdownProps) => {
  // ドロップダウンが開いているかの状態を管理するフラグ
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 選択された選択肢を管理するatom
  const [selectedDropdown, setSelectedDropdown] =
    useRecoilState(selectedDropdownAtom);

  // カスタムフックを使用して選択肢のデータを取得
  const { options } = useRadioOptions(questionId);

  /** 選択肢が選択された時の処理
   *  - 選択された選択肢の表示テキストを設定し、ドロップダウンを閉じる関数
   */
  const handleSelect = (option: string, index: number) => {
    // 空の選択肢の場合は「選択肢N」という形式で表示
    const displayText = option === '' ? `選択肢${index + 1}` : option;
    setSelectedDropdown(displayText); // 選択された選択肢をstateに設定
    setIsOpen((isOpen) => !isOpen); // ドロップダウンを閉じる
  };

  return (
    <div className={`relative text-sm text-gray-600`}>
      {/* ボタン */}
      <div className='py-2 mt-8 w-48 border rounded '>
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          // ボタンのスタイリング（開いている時は背景色を変更）
          className={`px-4 py-2 focus:outline-none w-full text-left flex items-center justify-between
            ${isOpen ? 'bg-blue-50 hover:bg-opacity-50' : ''}
                `}
          type='button'
        >
          {/* 選択された選択肢のテキスト表示 */}
          <span
            className={` ${
              selectedDropdown === '選択' ? 'text-gray-500' : 'text-gray-600'
            }`}
          >
            {selectedDropdown}
          </span>
          {/* 矢印アイコン（開いている時は非表示） */}
          {!isOpen ? <FontAwesomeIcon icon={faChevronDown} /> : <div></div>}
        </button>
      </div>

      {/* ドロップダウンの選択肢リスト（開いている時のみ表示） */}
      {isOpen && (
        <div className='py-2 absolute top-12 z-10 w-48 bg-white border rounded mt-1'>
          {options.map((option, index: number) => (
            <div
              className='p-4 hover:bg-gray-100 cursor-pointer flex items-center'
              key={option.id}
              onClick={() => {
                handleSelect(option.text, index);
              }}
            >
              {/* 空の選択肢の場合は「選択肢N」と表示 */}
              {option.text === '' ? `選択肢${index + 1}` : option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

'use client'; // クライアントサイドでの実行を明示

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

type AccordionItemProps = {};

export const AccordionItem: React.FC<AccordionItemProps> = ({}) => {
  // アコーディオンの展開状態を管理するstate
  const [isExpanded, setIsExpanded] = useState(false);

  // アコーディオンのクリックイベントを処理する関数
  const handleAccordion: () => void = () => {
    setIsExpanded((prev) => !prev); // 現在の状態を反転させる
  };

  return (
    <div>
      {/* アコーディオンのトリガーとなるボタン */}
      <button
        className='text-gray-500 hover:text-gray-700 focus:outline-none'
        aria-expanded={isExpanded} // アクセシビリティのための属性
        onClick={handleAccordion}
      >
        <FontAwesomeIcon
          icon={faChevronDown} // 下向きの矢印アイコン
          className={`mr-4 transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
};

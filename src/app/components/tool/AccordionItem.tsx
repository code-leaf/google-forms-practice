'use client'; // クライアントサイドでの実行を明示

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type AccordionItemProps = {
  isExpanded: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  isExpanded,
  onClick,
}) => {
  return (
    <div>
      {/* アコーディオンのトリガーとなるボタン */}
      <button
        className='text-gray-500 hover:text-gray-700 focus:outline-none'
        aria-expanded={isExpanded} // アクセシビリティのための属性
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronDown} // 下向きの矢印アイコン
          className={`mr-4 transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
};

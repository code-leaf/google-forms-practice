// このファイルをクライアントコンポーネントとして指定
'use client';

import { radioOptionsFamily } from '@/store/RadioOptionsFamily';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRecoilState } from 'recoil';

type UseRadioOptions = {
  options: Option[];
  updateOptionText: (id: string, value: string) => void;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  removeOption: (id: string) => void;
  addOption: () => void;
  hasOther: boolean;
  addOther: () => void;
  isModalOpen: boolean;
};

// オプション項目の型定義
type Option = {
  id: string;
  text: string;
};

export const useRadioOptions = (questionId: string): UseRadioOptions => {
  // オプションの状態を管理
  const [options, setOptions] = useRecoilState(radioOptionsFamily(questionId));

  // その他オプションの有無を管理
  const [hasOther, setHasOther] = useState<boolean>(false);

  // モーダルの開閉状態を管理
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Date.now()で現在のミリ秒単位の時間を取得し、Math.random()でランダムな文字列を生成してユニークなIDを作成
  const newId = `option_${Date.now()}_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

  // 新しいオプションを追加する関数
  const addOption = () => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions];
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
    setOptions((currentOptions) => [
      ...currentOptions,
      { id: newId, text: 'その他...' },
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
    setOptions((currentOptions) => {
      // 新しいオプションリストを作成
      const newOptions = currentOptions.filter((option) => option.id !== id);

      // 「その他」オプションが存在するかチェック
      const hasOtherOption = newOptions.some(
        (option) => option.text === 'その他...'
      );

      // hasOtherの状態を更新
      setHasOther(hasOtherOption);

      return newOptions;
    });
  };
  return {
    options,
    updateOptionText,
    setIsModalOpen,
    removeOption,
    addOption,
    hasOther,
    addOther,
    isModalOpen,
  };
};

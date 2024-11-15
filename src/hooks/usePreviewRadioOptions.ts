import { PreviewRadioOptionsProps } from '@/app/formPreview/components/PreviewQuestionType/PreviewRadioOptions';
import { useTransition } from '@/hooks/useTransition';
import {
  SelectedOptionsAtom,
  selectedOptionsAtom,
} from '@/store/SelectedOptionsAtom';
import { selectedRadioAtom } from '@/store/SelectedRadioAtom';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

type UsePreviewRadioOptions = {
  selectedRadio: string | null;
  selectedOptions: SelectedOptionsAtom;

  /**
   * オプションが選択された時の処理を行うハンドラー関数
   *
   * @param optionId - 選択されたオプションの一意の識別子
   * @param displayText - 選択されたオプションの表示テキスト
   *
   * @remarks
   * - type === 'multipleChoice' (ラジオボタン) の場合:
   *   - 既に選択されているオプションが再度選択された場合は選択を解除
   *   - 新しいオプションが選択された場合は選択を更新
   *
   * - type === 'checkbox' (チェックボックス) の場合:
   *   - 選択されたオプションの状態を反転（選択⇔非選択）
   *   - 選択中のオプション一覧（checkboxesAnswer）を更新
   */
  handleOptionChange: (optionId: string, displayText: string) => void;
  /** ラジオボタンが選択されているか確認 */
  hasSelectedOptions: boolean;

  /** すべての選択を解除 */
  clearAllSelections: () => void;
};

export const usePreviewRadioOptions = ({
  type,
  questionId,
}: PreviewRadioOptionsProps): UsePreviewRadioOptions => {
  const [selectedOptions, setSelectedOptions] =
    useRecoilState(selectedOptionsAtom);

  const [selectedRadio, setSelectedRadio] = useRecoilState(selectedRadioAtom);

  const [checkboxesAnswer, setCheckboxesAnswer] = useState<string[]>([]);

  const { handleAnswerChange } = useTransition({ questionId });

  /** オプションが選択された時の処理を行うハンドラー関数
   * @param optionId - 選択されたオプションの一意の識別子
   * @param displayText - 選択されたオプションの表示テキスト
   */
  const handleOptionChange = (optionId: string, displayText: string) => {
    // ラジオボタンの場合
    if (type === 'multipleChoice') {
      if (selectedRadio === optionId) {
        setSelectedRadio(null); //ラジオボタンをオフ
      } else {
        setSelectedRadio(optionId); //ラジオボタンをオン
        handleAnswerChange(displayText); //テキスト追加
      }

      // チェックボックスの場合
    } else {
      // チェックボックスオン・オフ
      setSelectedOptions((prev) => ({
        ...prev,
        [optionId]: !prev[optionId],
      }));

      setCheckboxesAnswer((prev) => {
        // 現在の配列(prev)の中に、選択された項目(displayText)が含まれていたら削除
        // includes()：配列の中に指定した値が存在するかをチェックするメソッド
        if (prev.includes(displayText)) {
          return prev.filter((text) => text !== displayText);
        }

        // 配列の中に選択された項目がなければ、追加
        return [...prev, displayText];
      });
    }
  };

  // checkboxesAnswerが変更されたときに自動的にhandleAnswerChangeを呼び出す
  useEffect(() => {
    if (type === 'checkboxes') {
      handleAnswerChange(checkboxesAnswer.join(','));
    }
  }, [checkboxesAnswer, handleAnswerChange, type]);

  const clearAllSelections = () => {
    setSelectedRadio(null);
    setCheckboxesAnswer([]);
    handleAnswerChange('');
  };

  const hasSelectedOptions = selectedRadio !== null;
  return {
    selectedRadio,
    selectedOptions,
    handleOptionChange,
    hasSelectedOptions,
    clearAllSelections,
  };
};

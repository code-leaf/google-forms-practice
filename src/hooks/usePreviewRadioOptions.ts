import { PreviewRadioOptionsProps } from '@/app/formPreview/components/PreviewQuestionType/PreviewRadioOptions';
import {
  SelectedOptionsAtom,
  selectedOptionsAtom,
} from '@/store/SelectedOptionsAtom';
import { selectedRadioAtom } from '@/store/SelectedRadioAtom';
import { useRecoilState } from 'recoil';

type UsePreviewRadioOptions = {
  selectedRadio: string | null;
  selectedOptions: SelectedOptionsAtom;

  /** 選択されたオプションIDを受け取り、単一選択（ラジオボタン）か複数選択（チェックボックス）かに応じて選択状態を更新する。
   * - ラジオボタン: 現在選択中のオプションと同じオプションが再選択された場合、選択を解除、新しく選択されたオプションに更新
   * - チェックボックス: 対象のオプションの選択状態を反転
   */
  handleOptionChange: (optionId: string) => void;

  /** ラジオボタンが選択されているか確認 */
  hasSelectedOptions: boolean;

  /** すべての選択を解除 */
  clearAllSelections: () => void;
};

export const usePreviewRadioOptions = ({
  type,
}: PreviewRadioOptionsProps): UsePreviewRadioOptions => {
  const [selectedOptions, setSelectedOptions] =
    useRecoilState(selectedOptionsAtom);

  const [selectedRadio, setSelectedRadio] = useRecoilState(selectedRadioAtom);

  const handleOptionChange = (optionId: string) => {
    if (type === 'multipleChoice') {
      if (selectedRadio === optionId) {
        setSelectedRadio(null);
      } else {
        setSelectedRadio(optionId);
      }
    } else {
      setSelectedOptions((prev) => ({
        ...prev,
        [optionId]: !prev[optionId],
      }));
    }
  };

  const clearAllSelections = () => {
    setSelectedRadio(null);
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

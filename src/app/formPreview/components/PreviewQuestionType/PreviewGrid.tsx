import { radioOptionsFamily } from '@/store/RadioOptionsFamily';
import { useRecoilValue } from 'recoil';

type PreviewGridProps = {
  questionType: 'multipleChoiceGrid' | 'checkboxGrid';
  questionId: string;
};

export const PreviewGrid = ({ questionType, questionId }: PreviewGridProps) => {
  // 行と列のデータを取得
  const rowOptions = useRecoilValue(radioOptionsFamily(`${questionId}_row`));
  const columnOptions = useRecoilValue(radioOptionsFamily(`${questionId}_col`));

  return (
    // レスポンシブ対応のためのオーバーフロー処理（横スクロール）
    <div className='overflow-x-auto'>
      {/* テーブルの各セルの幅を固定し、コンテンツの量に関わらずレイアウトを一定に保つ */}
      <table className='min-w-full table-fixed'>
        {/* テーブルのヘッダー部分 */}
        <thead>
          {/* 行部分 */}
          <tr>
            {/* 列部分 */}
            {/* 左端の空白セル */}
            <th></th>

            {/* 各列のオプションを展開 */}
            {columnOptions.map((columnOption, index) => (
              <th
                key={columnOption.id}
                className='py-2 px-4 text-center text-wrap'
              >
                {/* 列の名前を表示、ない場合は列番号を表示 */}
                {columnOption.text || `${index + 1}列目`}
              </th>
            ))}
          </tr>
        </thead>

        {/* テーブルのボディー部分 */}
        <tbody>
          {/* 各行のオプションを展開 */}
          {rowOptions.map((rowOption, index) => (
            // 行部分
            <tr key={rowOption.id}>
              {/* 左端の行の中身 */}
              <td className='py-2 px-4 text-wrap'>
                {/* 行の名前を表示、ない場合は行番号を表示 */}
                {rowOption.text || `${index + 1}行目`}
              </td>

              {/* 各列に対してセルを生成 */}
              {columnOptions.map((column) => (
                <td
                  key={`${rowOption.id}-${column.id}`}
                  className='py-2 px-4 text-center'
                >
                  <input
                    type={
                      questionType === 'multipleChoiceGrid'
                        ? 'radio'
                        : 'checkbox'
                    }
                    aria-label={`${rowOption.id}行${column.id}列の${questionType}`}
                    name={`row-${rowOption.id}`} // 同じ行のラジオボタンをグループ化
                    className='cursor-pointer'
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

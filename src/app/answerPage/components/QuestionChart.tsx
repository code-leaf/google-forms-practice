// 必要なReactとChart.jsのコンポーネントをインポート
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

// Chart.jsの必要な機能を登録
ChartJS.register(ArcElement, Tooltip, Legend);

// コンポーネントのプロップスの型定義
type QuestionChartProps = {
  questionTitle: string; // 質問のタイトル
  labels: string[]; // グラフのラベル（選択肢）
  data: number[]; // グラフのデータ（各選択肢の回答数）
};

// QuestionChartコンポーネントの定義
export const QuestionChart: React.FC<QuestionChartProps> = ({
  questionTitle,
  labels,
  data,
}) => {
  // グラフデータの設定
  const chartData = {
    labels: labels, // グラフのラベル
    datasets: [
      {
        data: data, // グラフのデータ
        // グラフの色設定
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
      },
    ],
  };

  // グラフのオプション設定
  const options = {
    responsive: true, // レスポンシブ設定
    plugins: {
      legend: {
        position: 'top' as const, // 凡例の位置
      },
      title: {
        display: true, // タイトルを表示
        text: questionTitle, // タイトルのテキスト
      },
    },
  };

  // 円グラフを返す
  return (
    <div className='w-full max-w-md max-auto'>
      <Pie data={chartData} options={options}></Pie>
    </div>
  );
};

import React from 'react';

const SpreadsheetPage: React.FC = () => {
  return (
    <div className='flex flex-col h-screen bg-white'>
      <header className='flex items-center justify-between p-2 border-b'>
        <div className='flex items-center space-x-2'>
          <img
            src='/spreadsheet-icon.png'
            alt='Spreadsheet Icon'
            className='w-8 h-8'
          />
          <span className='text-lg font-semibold text-gray-700'>
            スプレッドシート
          </span>
        </div>
        <div className='flex items-center space-x-2'>
          <input
            type='text'
            value='無題のスプレッドシート'
            className='px-2 py-1 border rounded'
          />
          <button className='p-1 text-yellow-500 hover:bg-gray-100 rounded'>
            ☆
          </button>
          <button className='px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600'>
            共有
          </button>
        </div>
        <div className='flex items-center'>
          <img
            src='/user-avatar.png'
            alt='User Avatar'
            className='w-8 h-8 rounded-full'
          />
        </div>
      </header>

      <nav className='bg-gray-100 border-b'>
        <ul className='flex space-x-4 px-2 py-1 text-sm text-gray-700'>
          {[
            'ファイル',
            '編集',
            '表示',
            '挿入',
            '書式',
            'データ',
            'ツール',
            '拡張機能',
            'ヘルプ',
          ].map((item) => (
            <li
              key={item}
              className='hover:bg-gray-200 px-2 py-1 rounded cursor-pointer'
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex items-center space-x-1 p-1 border-b'>
        {['↩', '↪', '🖨'].map((icon) => (
          <button key={icon} className='p-1 hover:bg-gray-100 rounded'>
            {icon}
          </button>
        ))}
        <select className='border rounded px-1'>
          <option>Arial</option>
        </select>
        <select className='border rounded px-1'>
          <option>11</option>
        </select>
        {['B', 'I', 'U', 'A', '🎨', '▦', '⋈'].map((icon) => (
          <button key={icon} className='p-1 hover:bg-gray-100 rounded'>
            {icon}
          </button>
        ))}
        <select className='border rounded px-1'>
          <option>123</option>
        </select>
        <button className='p-1 hover:bg-gray-100 rounded'>▼</button>
      </div>

      <div className='flex items-center space-x-2 p-1 border-b'>
        <span className='font-bold px-2'>fx</span>
        <input type='text' className='flex-grow border rounded px-2 py-1' />
      </div>

      <div className='flex-grow overflow-auto'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border p-1 w-10'></th>
              {[...Array(26)].map((_, i) => (
                <th key={i} className='border p-1 w-24'>
                  {String.fromCharCode(65 + i)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(100)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td className='border p-1 bg-gray-100 text-center'>
                  {rowIndex + 1}
                </td>
                {[...Array(26)].map((_, colIndex) => (
                  <td key={colIndex} className='border p-1 min-w-[6rem]'></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className='flex justify-between items-center p-1 bg-gray-100 border-t'>
        <div className='flex space-x-1'>
          <button className='px-3 py-1 bg-white border rounded-t text-sm'>
            シート1
          </button>
          <button className='px-2 py-1 border rounded-full hover:bg-gray-200'>
            +
          </button>
        </div>
        <div>
          <button className='px-2 py-1 border rounded hover:bg-gray-200'>
            100%
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SpreadsheetPage;

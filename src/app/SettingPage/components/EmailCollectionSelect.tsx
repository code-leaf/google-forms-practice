import { EmailCollectionOption } from '@/types/settingsType';
import React from 'react';

type EmailCollectionSelectProps = {
  value: EmailCollectionOption;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const EmailCollectionSelect = ({
  value,
  onChange,
}: EmailCollectionSelectProps) => {
  return (
    <select
      className='border rounded p-4 text-sm w-44'
      value={value}
      onChange={onChange}
    >
      <option>収集しない</option>
      <option>確認済み</option>
      <option>回答者からの入力</option>
    </select>
  );
};

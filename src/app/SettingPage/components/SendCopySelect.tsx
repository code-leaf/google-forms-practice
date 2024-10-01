import { SendCopyOption } from '@/types/SettingsType';
import React from 'react';

type SendCopySelectProps = {
  value: SendCopyOption;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled: boolean;
};

export const SendCopySelect = ({
  value,
  onChange,
  disabled,
}: SendCopySelectProps) => {
  return (
    <select
      className={`border rounded p-4 text-sm
                  ${value === 'リクエストされた場合' ? 'w-auto' : 'w-44'}
                  `}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <option>オフ</option>
      <option>リクエストされた場合</option>
      <option>常に表示</option>
    </select>
  );
};

import { EmailCollectionSelect } from '@/app/SettingPage/components/EmailCollectionSelect';
import { EmailCollectionOption, SendCopyOption } from '@/types/SettingsType';
import { useState } from 'react';

type formDefaultAccordionProps = {
  formDefaultAccordion: boolean;
};

export const FormDefault = (
  formDefaultAccordion: formDefaultAccordionProps
) => {
  const [emailCollectionOption, setEmailCollectionOption] =
    useState<EmailCollectionOption>('収集しない');

  const [sendCopyOption, setSendCopyOption] = useState<SendCopyOption>('オフ');

  const getEmailCollectionDescription = (option: EmailCollectionOption) => {
    switch (option) {
      case '収集しない':
        return '';
      case '確認済み':
        return '回答者による Google へのログインが必要になります';
      default:
        return '回答者はメールの応答を手動で入力します';
    }
  };

  const handleEmailCollectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEmailCollectionOption(e.target.value as EmailCollectionOption);
  };

  return (
    <div>
      {formDefaultAccordion && (
        <div className='pl-6 mt-6 space-y-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-lg'>デフォルトでメールアドレスを収集する</h2>
              {sendCopyOption !== 'オフ' && (
                <p className='text-sm text-gray-500'>
                  <span className='font-extrabold'>
                    回答のコピーを回答者に送信
                  </span>
                  する場合は、オンにする必要があります
                </p>
              )}
              <p className='text-sm text-gray-500'>
                {getEmailCollectionDescription(emailCollectionOption)}
              </p>
            </div>
            <EmailCollectionSelect
              value={emailCollectionOption}
              onChange={handleEmailCollectionChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

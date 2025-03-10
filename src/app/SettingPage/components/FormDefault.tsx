import { EmailCollectionSelect } from '@/app/SettingPage/components/EmailCollectionSelect';
import { useEmailCollection } from '@/hooks/useEmailCollection';
import { SendCopyOption } from '@/types/SettingsType';
import { useState } from 'react';

type formDefaultAccordionProps = {
  formDefaultAccordion: boolean;
};

export const FormDefault = ({
  formDefaultAccordion,
}: formDefaultAccordionProps) => {
  const {
    emailCollectionOption,
    defaultOption,
    getEmailCollectionDescription,
    handleEmailCollectionChange,
  } = useEmailCollection();
  const [sendCopyOption, setSendCopyOption] = useState<SendCopyOption>('オフ');
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
              value={defaultOption}
              onChange={handleEmailCollectionChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

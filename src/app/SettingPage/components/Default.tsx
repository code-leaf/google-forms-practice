import { AccordionItem } from '@/app/components/tool/AccordionItem';
import { FormDefault } from '@/app/SettingPage/components/FormDefault';
import { useState } from 'react';

export const Default = () => {
  const [formDefaultAccordion, setFormDefaultAccordion] =
    useState<boolean>(false);

  return (
    <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
      <h1 className='text-xl pb-4 border-b border-b-slate-300'>デフォルト</h1>

      {/* ◆フォームのデフォルト設定 */}
      <div className=' py-8 border-b border-b-slate-300'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <h2 className='text-lg'>フォームのデフォルト設定</h2>
            <p className='text-gray-500'>
              設定はこのフォームと新しいフォームに適用されます
            </p>
          </div>

          <AccordionItem
            isExpanded={formDefaultAccordion}
            onClick={() => setFormDefaultAccordion((prev) => !prev)}
          />
        </div>

        {/* 細かな設定 */}
        <FormDefault formDefaultAccordion={formDefaultAccordion} />
      </div>
    </div>
  );
};

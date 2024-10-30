import { PreviewHeader } from '@/app/formPreview/components/PreviewHeader';

const FormPreview = () => {
  return (
    <main className='min-h-screen bg-purple-100'>
      <div className='flex justify-center'>
        <div className='flex'>
          <PreviewHeader />
        </div>
      </div>
    </main>
  );
};

export default FormPreview;

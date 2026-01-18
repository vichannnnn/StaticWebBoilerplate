import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('LandingPage');

  return (
    <div className='w-4/5 m-auto flex flex-col text-3xl text-center items-center mb-8 pb-64'>
      <h1>{t('title_one')}</h1>

      <p className='w-4/5 text-2xl mx-auto mt-8'>
        {t('description_paragraph_one')}
        <br />
        <br />
        {t('description_paragraph_two')}
        <br />
        <br />
        {t('description_paragraph_three')}
      </p>
    </div>
  );
};

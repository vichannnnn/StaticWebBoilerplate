import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <div className='flex w-4/5 m-auto text-center flex-col items-center mt-9 mb-6'>
      <p>
        © {year} Your Name • {t('text')}
      </p>
    </div>
  );
};

import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className='w-full bg-void border-t border-charcoal'>
      <div className='flex w-4/5 max-w-6xl m-auto text-center flex-col items-center py-12'>
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
          <p className='text-cool-gray text-sm font-body'>
            © {year} Your Company
          </p>
          <span className='hidden md:block text-cool-gray-dark'>•</span>
          <p className='text-cool-gray text-sm font-body'>
            {t('text')}
          </p>
        </div>
        <div className='flex items-center gap-2 mt-4 text-xs font-mono text-cool-gray-dark'>
          <span className='w-2 h-2 rounded-full bg-mint' />
          <span>{t('status')}</span>
        </div>
      </div>
    </footer>
  );
};

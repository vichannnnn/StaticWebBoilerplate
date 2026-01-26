'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@components/Button';
import { Link } from '@navigation';
import { GlitchText } from '@components/GlitchText';

const NotFound = () => {
  const t = useTranslations('NotFoundPage');

  return (
    <div className='w-4/5 min-h-screen flex flex-col mx-auto items-center justify-center text-center'>
      <div className="mb-8">
        <span className="font-mono text-8xl md:text-9xl font-bold text-tangerine/20">
          <GlitchText text="404" />
        </span>
      </div>

      <h1 className='mb-4'>
        <GlitchText text={t('title')} className="font-display" />
      </h1>

      <p className='text-xl text-cool-gray mb-12 max-w-md'>{t('description')}</p>

      <Link href='/' passHref>
        <Button>{t('back_to_home')}</Button>
      </Link>
    </div>
  );
};

export default NotFound;

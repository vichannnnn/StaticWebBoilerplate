'use client';

import { useTranslations } from 'next-intl';
import { TypingAnimation } from '@components/TypingAnimation';

export const Hero = () => {
  const t = useTranslations('LandingPage');

  return (
    <section className='w-full min-h-screen flex items-center justify-center pt-20 pb-16'>
      <div className='w-4/5 max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 items-center'>
          <div className='lg:col-span-3 space-y-8 animate-fade-up'>
            <span className='section-label'>{t('label')}</span>

            <h1 className='text-4xl md:text-5xl lg:text-6xl'>
              <TypingAnimation text={t('title')} speed={50} />
            </h1>

            <p className='text-lg md:text-xl text-cool-gray max-w-xl'>
              {t('description')}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button className='btn-primary'>
                {t('cta_primary')}
              </button>
              <button className='btn-secondary'>
                {t('cta_secondary')}
              </button>
            </div>

            <div className='flex items-center gap-6 pt-4 text-cool-gray-dark text-sm font-mono'>
              <span className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-mint' />
                {t('status')}
              </span>
            </div>
          </div>

          <div className='lg:col-span-2 hidden lg:flex items-center justify-center'>
            <div className='relative w-full max-w-sm aspect-square'>
              <div className='absolute inset-0 bg-gradient-to-br from-tangerine/20 to-mint/20 rounded-full blur-3xl animate-pulse-slow' />
              <div className='relative w-full h-full flex items-center justify-center'>
                <div className='w-48 h-48 border border-charcoal rounded-2xl bg-charcoal/50 backdrop-blur-sm flex items-center justify-center animate-float'>
                  <span className='text-6xl font-display font-bold text-gradient'>⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

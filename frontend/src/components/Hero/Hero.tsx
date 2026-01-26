'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { TypingAnimation } from '@components/TypingAnimation';

const AbstractSVG = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
    >
      <svg viewBox="0 0 400 400" className="w-80 h-80">
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="1"
          strokeDasharray="10 5"
          className="animate-[spin_30s_linear_infinite]"
          style={{ transformOrigin: 'center' }}
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="#4ECDC4"
          strokeWidth="1"
          strokeDasharray="15 10"
          className="animate-[spin_25s_linear_infinite_reverse]"
          style={{ transformOrigin: 'center' }}
        />
        <circle
          cx="200"
          cy="200"
          r="90"
          fill="none"
          stroke="#FFE66D"
          strokeWidth="1"
          strokeDasharray="5 15"
          className="animate-[spin_20s_linear_infinite]"
          style={{ transformOrigin: 'center' }}
        />
        <line x1="200" y1="50" x2="200" y2="120" stroke="#FF6B35" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="280" x2="200" y2="350" stroke="#FF6B35" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="200" x2="120" y2="200" stroke="#4ECDC4" strokeWidth="1" opacity="0.5" />
        <line x1="280" y1="200" x2="350" y2="200" stroke="#4ECDC4" strokeWidth="1" opacity="0.5" />
        <circle
          cx="200"
          cy="200"
          r="8"
          fill="#FF6B35"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
};

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
              <AbstractSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

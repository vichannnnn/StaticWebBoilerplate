'use client';

import { useTranslations } from 'next-intl';

export const Contact = () => {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="w-full py-24">
      <div className="w-4/5 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold glitch-text mb-4">
          {t('title')}
        </h2>
        <p className="text-xl text-cool-gray mb-12">{t('subtitle')}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t('cta_linkedin')}
          </a>
          <a
            href="mailto:hello@example.com"
            className="btn-secondary"
          >
            {t('cta_email')}
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cool-gray hover:text-tangerine transition-colors font-mono text-sm"
          >
            {t('github')}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cool-gray hover:text-tangerine transition-colors font-mono text-sm"
          >
            {t('twitter')}
          </a>
        </div>
      </div>
    </section>
  );
};

'use client';

import { useTranslations } from 'next-intl';

const experienceItems = ['item1', 'item2', 'item3'];

export const Experience = () => {
  const t = useTranslations('Experience');

  return (
    <section id="experience" className="w-full py-24">
      <div className="w-4/5 max-w-6xl mx-auto">
        <span className="section-label">{t('section_label')}</span>
        <h2 className="text-3xl md:text-4xl mt-4 mb-2">{t('title')}</h2>
        <p className="font-mono text-sm text-cool-gray mb-12">{t('subtitle')}</p>

        <div className="space-y-6">
          {experienceItems.map((item, index) => {
            const isPB = t(`${item}.isPB`) === 'true';
            return (
              <div
                key={item}
                className="card flex flex-col md:flex-row gap-4 md:gap-8 items-start"
              >
                <div className="flex items-center gap-4 min-w-fit">
                  <span className="font-mono text-2xl font-bold text-tangerine">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <span className="font-mono text-sm text-cool-gray-dark">
                    {t(`${item}.duration`)}
                  </span>
                  {isPB && <span className="pb-badge">PB</span>}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-display font-semibold">{t(`${item}.role`)}</h3>
                  <p className="font-mono text-sm text-tangerine mb-2">{t(`${item}.company`)}</p>
                  <p className="text-cool-gray text-sm">{t(`${item}.description`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

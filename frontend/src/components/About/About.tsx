'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export const About = () => {
  const t = useTranslations('About');
  const [uptime, setUptime] = useState({ years: 0, days: 0, hours: 0 });
  const [coffeeLevel, setCoffeeLevel] = useState(0);

  useEffect(() => {
    const startDate = new Date('2020-01-01');
    const updateUptime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setUptime({ years, days, hours });
    };
    updateUptime();
    const interval = setInterval(updateUptime, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 10) setCoffeeLevel(90);
    else if (hour >= 10 && hour < 14) setCoffeeLevel(70);
    else if (hour >= 14 && hour < 18) setCoffeeLevel(50);
    else if (hour >= 18 && hour < 22) setCoffeeLevel(30);
    else setCoffeeLevel(10);
  }, []);

  const modules = ['typescript', 'react', 'nextjs', 'nodejs', 'tailwind'];

  return (
    <section id="about" className="w-full py-24">
      <div className="w-4/5 max-w-6xl mx-auto">
        <span className="section-label">{t('section_label')}</span>
        <h2 className="text-3xl md:text-4xl mt-4 mb-12">{t('title')}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-cool-gray">{t('spec.location_label')}</span>
                <span className="font-mono text-sm text-off-white">{t('spec.location_value')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-cool-gray">{t('spec.uptime_label')}</span>
                <span className="font-mono text-sm text-mint">
                  {uptime.years}y {uptime.days}d {uptime.hours}h
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm text-cool-gray">{t('spec.coffee_label')}</span>
                  <span className="font-mono text-sm text-tangerine">{coffeeLevel}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${coffeeLevel}%` }} />
                </div>
              </div>
            </div>
          </div>

          <div className="card space-y-6">
            <h3 className="font-mono text-sm text-cool-gray">{t('modules_label')}</h3>
            <div className="flex flex-wrap gap-3">
              {modules.map((module) => (
                <span
                  key={module}
                  className="px-3 py-1 bg-charcoal border border-cool-gray-dark rounded-lg font-mono text-sm text-off-white hover:border-tangerine hover:text-tangerine transition-colors"
                >
                  {t(`modules.${module}`)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="card mt-8">
          <h3 className="font-mono text-sm text-cool-gray mb-4">{t('philosophy_label')}</h3>
          <blockquote className="text-lg text-off-white italic border-l-2 border-tangerine pl-4">
            &ldquo;{t('philosophy')}&rdquo;
          </blockquote>
        </div>

        <p className="text-cool-gray mt-8 max-w-3xl">{t('description')}</p>
      </div>
    </section>
  );
};

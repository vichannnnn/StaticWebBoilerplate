'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';

interface Project {
  key: string;
  rarity: 'legendary' | 'epic' | 'rare';
}

const projects: Project[] = [
  { key: 'project1', rarity: 'legendary' },
  { key: 'project2', rarity: 'epic' },
  { key: 'project3', rarity: 'rare' },
];

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          const animate = () => {
            start += increment;
            if (start < value) {
              setCount(Math.floor(start));
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Projects = () => {
  const t = useTranslations('Projects');

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'rarity-legendary';
      case 'epic': return 'rarity-epic';
      case 'rare': return 'rarity-rare';
      default: return '';
    }
  };

  return (
    <section id="projects" className="w-full py-24 bg-charcoal/30">
      <div className="w-4/5 max-w-6xl mx-auto">
        <span className="section-label">{t('section_label')}</span>
        <h2 className="text-3xl md:text-4xl mt-4 mb-12">{t('title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ key, rarity }) => (
            <div key={key} className="card-achievement">
              <div className="flex justify-between items-start mb-4">
                <span className={`font-mono text-xs font-bold uppercase ${getRarityClass(rarity)}`}>
                  {t(`${key}.rarity`)}
                </span>
              </div>

              <h3 className="text-xl font-display font-semibold mb-2">{t(`${key}.title`)}</h3>
              <p className="text-cool-gray text-sm mb-4">{t(`${key}.tagline`)}</p>

              <div className="flex items-center gap-4 pt-4 border-t border-cool-gray-dark/30">
                <div className="text-center">
                  <div className="font-mono text-lg font-bold text-tangerine">
                    <AnimatedCounter value={parseInt(t(`${key}.stat1_value`))} suffix={t(`${key}.stat1_suffix`)} />
                  </div>
                  <div className="font-mono text-xs text-cool-gray">{t(`${key}.stat1_label`)}</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-lg font-bold text-mint">
                    <AnimatedCounter value={parseInt(t(`${key}.stat2_value`))} suffix={t(`${key}.stat2_suffix`)} />
                  </div>
                  <div className="font-mono text-xs text-cool-gray">{t(`${key}.stat2_label`)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

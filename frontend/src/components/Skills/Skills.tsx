'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface TierConfig {
  tier: 's' | 'a' | 'b' | 'c';
  skills: string[];
}

const tiers: TierConfig[] = [
  { tier: 's', skills: ['typescript', 'react', 'nextjs'] },
  { tier: 'a', skills: ['nodejs', 'tailwind', 'git'] },
  { tier: 'b', skills: ['python', 'docker', 'postgresql'] },
  { tier: 'c', skills: ['rust', 'graphql', 'aws'] },
];

export const Skills = () => {
  const t = useTranslations('Skills');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="w-full py-24 bg-charcoal/30">
      <div className="w-4/5 max-w-6xl mx-auto">
        <span className="section-label">{t('section_label')}</span>
        <h2 className="text-3xl md:text-4xl mt-4 mb-12">{t('title')}</h2>

        <div className="space-y-6">
          {tiers.map(({ tier, skills }) => (
            <div key={tier} className="flex items-start gap-4">
              <div className={`tier-badge tier-${tier} shrink-0`}>
                {tier.toUpperCase()}
              </div>
              <div className="flex-1">
                <p className="font-mono text-xs text-cool-gray mb-3">{t(`tiers.${tier}`)}</p>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="skill-pill relative"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {t(`skills.${skill}`)}
                      {hoveredSkill === skill && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-void border border-cool-gray-dark rounded-lg text-xs text-cool-gray whitespace-nowrap z-10">
                          {t(`tooltips.${skill}`)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

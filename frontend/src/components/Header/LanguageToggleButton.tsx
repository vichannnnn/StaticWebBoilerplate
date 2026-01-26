'use client';

import { useContext, useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { MediaQueryContext } from '@providers/MediaQueryProvider';
import { Link, usePathname } from '@navigation';

interface LocaleData {
  flag: string;
  name: string;
}

const localeMap: Record<string, LocaleData> = {
  en: { flag: '🇬🇧', name: 'English' },
  ja: { flag: '🇯🇵', name: '日本語' },
};

export const LanguageToggleButton = () => {
  const currentPath = usePathname();
  const { isMedium, isXLarge } = useContext(MediaQueryContext);
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {isMedium ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-cool-gray-dark/50 bg-charcoal/50 backdrop-blur-sm hover:border-tangerine hover:text-tangerine transition-all font-display text-sm"
          >
            <span>{localeMap[locale].flag}</span>
            {isXLarge && <span>{localeMap[locale].name}</span>}
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 py-2 w-40 rounded-xl border border-cool-gray-dark/50 bg-charcoal backdrop-blur-sm shadow-lg z-50">
              {(Object.keys(localeMap) as Array<'en' | 'ja'>).map((key) => (
                <Link
                  key={key}
                  href={currentPath}
                  locale={key}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2 font-display text-sm transition-colors ${
                    key === locale
                      ? 'text-tangerine bg-tangerine/10'
                      : 'text-off-white hover:text-tangerine hover:bg-tangerine/5'
                  }`}
                >
                  <span>{localeMap[key].flag}</span>
                  <span>{localeMap[key].name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2 w-full">
          {(Object.keys(localeMap) as Array<'en' | 'ja'>).map((key) => (
            <Link
              key={key}
              href={currentPath}
              locale={key}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-display transition-colors ${
                key === locale
                  ? 'text-tangerine bg-tangerine/10 border border-tangerine/30'
                  : 'text-off-white hover:text-tangerine hover:bg-tangerine/5 border border-cool-gray-dark/30'
              }`}
            >
              <span className="text-lg">{localeMap[key].flag}</span>
              <span>{localeMap[key].name}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default LanguageToggleButton;

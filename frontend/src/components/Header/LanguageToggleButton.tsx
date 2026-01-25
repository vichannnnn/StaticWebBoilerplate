'use client';

import { MouseEvent, useContext, useState } from 'react';
import { useLocale } from 'next-intl';
import { Button } from '@components/Button';
import { MediaQueryContext } from '@providers/MediaQueryProvider';
import { Link, usePathname } from '@navigation';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isMedium ? (
        <>
          <Button onClick={handleClick}>
            {localeMap[locale].flag} {isXLarge && localeMap[locale].name}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: '#1A1A1A',
                border: '1px solid #666666',
                borderRadius: '12px',
                marginTop: '8px',
              },
            }}
          >
            {(Object.keys(localeMap) as Array<'en' | 'ja'>).map((key) => (
              <MenuItem
                key={key}
                selected={key === locale}
                onClick={handleClose}
                sx={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: '#FAFAFA',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    color: '#FF6B35',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 107, 53, 0.15)',
                    color: '#FF6B35',
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: 'rgba(255, 107, 53, 0.2)',
                  },
                }}
              >
                <Link href={currentPath} locale={key} passHref>
                  {localeMap[key].flag} {localeMap[key].name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <>
          {(Object.keys(localeMap) as Array<'en' | 'ja'>).map((key) => (
            <MenuItem
              key={key}
              selected={key === locale}
              onClick={handleClose}
              sx={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#FAFAFA',
                '&:hover': {
                  backgroundColor: 'rgba(255, 107, 53, 0.1)',
                  color: '#FF6B35',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255, 107, 53, 0.15)',
                  color: '#FF6B35',
                },
                '&.Mui-selected:hover': {
                  backgroundColor: 'rgba(255, 107, 53, 0.2)',
                },
              }}
            >
              <Link href={currentPath} locale={key} passHref>
                <ListItemIcon sx={{ color: 'inherit', minWidth: '32px' }}>
                  {localeMap[key].flag}
                </ListItemIcon>
                {localeMap[key].name}
              </Link>
            </MenuItem>
          ))}
        </>
      )}
    </>
  );
};

export default LanguageToggleButton;

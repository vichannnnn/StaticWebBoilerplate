'use client';

import { useState, MouseEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@components/Button';
import { Link } from '@navigation';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import LinkIcon from '@mui/icons-material/Link';
import DescriptionIcon from '@mui/icons-material/Description';
import { LanguageToggleButton } from './LanguageToggleButton';

export const Dropdown = () => {
  const t = useTranslations('Buttons');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='user-button-container'>
      <Button
        id='right-button'
        className='right-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'right-button',
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#1A1A1A',
            border: '1px solid #666666',
            borderRadius: '12px',
            marginTop: '8px',
          },
        }}
      >
        <Link href='/' passHref>
          <MenuItem
            sx={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#FAFAFA',
              '&:hover': {
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                color: '#FF6B35',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: '32px' }}>
              <InfoIcon fontSize='small' />
            </ListItemIcon>
            {t('about')}
          </MenuItem>
        </Link>
        <Link href='#' passHref>
          <MenuItem
            sx={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#FAFAFA',
              '&:hover': {
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                color: '#FF6B35',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: '32px' }}>
              <ArticleIcon fontSize='small' />
            </ListItemIcon>
            {t('blog')}
          </MenuItem>
        </Link>
        <Link href='/links' passHref>
          <MenuItem
            sx={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#FAFAFA',
              '&:hover': {
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                color: '#FF6B35',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: '32px' }}>
              <LinkIcon fontSize='small' />
            </ListItemIcon>
            {t('links')}
          </MenuItem>
        </Link>
        <Link href='#' passHref>
          <MenuItem
            sx={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#FAFAFA',
              '&:hover': {
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                color: '#FF6B35',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: '32px' }}>
              <DescriptionIcon fontSize='small' />
            </ListItemIcon>
            {t('resume')}
          </MenuItem>
        </Link>
        <LanguageToggleButton />
      </Menu>
    </div>
  );
};

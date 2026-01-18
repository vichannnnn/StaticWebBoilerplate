'use client';

import { useContext } from 'react';
import HomeIcon from '@mui/icons-material/Home';

import { MediaQueryContext } from '@providers/MediaQueryProvider';
import { ButtonsRow } from './ButtonsRow';
import { Dropdown } from './Dropdown';
import { Link } from '@navigation';
import { LanguageToggleButton } from './LanguageToggleButton';

export const Header = () => {
  const { isMedium } = useContext(MediaQueryContext);

  return (
    <header className='w-full flex justify-center items-center mx-auto'>
      <div className='w-3/5 pt-8 pb-8 flex justify-start items-center'>
        <Link className='' href='/' passHref>
          <HomeIcon sx={{ fontSize: 48 }} />
        </Link>
        {isMedium ? (
          <div className='flex mx-auto gap-4'>
            <ButtonsRow />
            <LanguageToggleButton />
          </div>
        ) : (
          <div className='flex items-center ml-auto mr-0'>
            <Dropdown />
          </div>
        )}
      </div>
    </header>
  );
};

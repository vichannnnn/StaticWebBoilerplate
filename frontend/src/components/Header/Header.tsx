'use client';

import { useContext } from 'react';

import { MediaQueryContext } from '@providers/MediaQueryProvider';
import { ButtonsRow } from './ButtonsRow';
import { Dropdown } from './Dropdown';
import { Link } from '@navigation';
import { LanguageToggleButton } from './LanguageToggleButton';

export const Header = () => {
  const { isMedium } = useContext(MediaQueryContext);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 w-full flex justify-center items-center mx-auto bg-void/90 backdrop-blur-md border-b border-charcoal'>
      <div className='w-4/5 py-4 flex justify-start items-center'>
        <Link
          className='font-display font-bold text-off-white text-sm hover:text-tangerine transition-colors duration-200 no-underline'
          href='/'
          passHref
        >
          BOILERPLATE
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

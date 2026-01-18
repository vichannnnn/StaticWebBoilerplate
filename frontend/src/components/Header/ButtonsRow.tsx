import { useTranslations } from 'next-intl';
import { Button } from '@components/Button';
import { Link } from '@navigation';

export const ButtonsRow = () => {
  const t = useTranslations('Buttons');
  return (
    <>
      <Link href='/' passHref>
        <Button>{t('about')}</Button>
      </Link>
      <Link href='#' passHref>
        <Button>{t('blog')}</Button>
      </Link>
      <Link href='/links' passHref>
        <Button>{t('links')}</Button>
      </Link>
      <Link href='#' passHref>
        <Button>{t('resume')}</Button>
      </Link>
    </>
  );
};

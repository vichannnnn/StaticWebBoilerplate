import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PixelButton } from '@components/Button';
import { Link } from '@navigation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderIcon from '@mui/icons-material/Folder';

export const dynamic = 'force-static';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('Links.title'),
    description: t('Links.description'),
    keywords: t('Links.keywords'),
    openGraph: {
      title: t('Links.title'),
      description: t('Links.description'),
    },
  };
}

const Links = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Links' });

  return (
    <div className='flex flex-col items-center gap-6 mb-48'>
      <h1 className='mt-4 mb-4'>{t('personal_title')}</h1>
      <div className='flex flex-col'>
        <Link href='#' passHref>
          <PixelButton>
            <LinkedInIcon fontSize='small' />
            <p className='font-PressStart2P'>{t('linkedin')}</p>
          </PixelButton>
        </Link>
        <br></br>
        <Link href='#' passHref>
          <PixelButton>
            <GitHubIcon fontSize='small' />
            <p className='font-PressStart2P'>{t('github')}</p>
          </PixelButton>
        </Link>
      </div>

      <h1>{t('project_title')}</h1>
      <div className='flex flex-col'>
        <Link href='#' passHref>
          <PixelButton>
            <FolderIcon fontSize='small' />
            <p className='font-PressStart2P'>{t('example_project')}</p>
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Links;

import { getTranslations, setRequestLocale } from 'next-intl/server';
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
    <div className="w-full min-h-screen flex flex-col items-center pt-24 pb-16 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-tangerine to-mint p-[2px]">
            <div className="w-full h-full rounded-full bg-charcoal flex items-center justify-center">
              <span className="text-3xl font-display font-bold text-gradient">H</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-display font-bold">{t('personal_title')}</h1>
          <p className="font-mono text-sm text-cool-gray">@hima</p>
        </div>

        <div className="card-achievement space-y-3">
          <span className="section-label">Social</span>
          <Link href="https://linkedin.com" target="_blank" className="block">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-void/50 border border-cool-gray-dark/30 hover:border-tangerine hover:bg-tangerine/5 transition-all group">
              <LinkedInIcon className="text-tangerine" />
              <span className="font-display font-medium group-hover:text-tangerine transition-colors">
                {t('linkedin')}
              </span>
            </div>
          </Link>
          <Link href="https://github.com" target="_blank" className="block">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-void/50 border border-cool-gray-dark/30 hover:border-tangerine hover:bg-tangerine/5 transition-all group">
              <GitHubIcon className="text-tangerine" />
              <span className="font-display font-medium group-hover:text-tangerine transition-colors">
                {t('github')}
              </span>
            </div>
          </Link>
        </div>

        <div className="card-achievement space-y-3">
          <span className="section-label">Projects</span>
          <Link href="#" className="block">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-void/50 border border-cool-gray-dark/30 hover:border-tangerine hover:bg-tangerine/5 transition-all group">
              <FolderIcon className="text-mint" />
              <span className="font-display font-medium group-hover:text-tangerine transition-colors">
                {t('example_project')}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;

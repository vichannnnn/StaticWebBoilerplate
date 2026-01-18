import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale, getMessages } from 'next-intl/server';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Providers } from '@providers/Providers';
import '../../globals.css';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('Index.title'),
    description: t('Index.description'),
    keywords: t('Index.keywords'),
    openGraph: {
      title: t('Index.title'),
      description: t('Index.description'),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <Providers>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </Providers>
  );
}

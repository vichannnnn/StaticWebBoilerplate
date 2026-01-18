import { Hero } from '@components/Hero';
import { setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }];
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
    </main>
  );
}

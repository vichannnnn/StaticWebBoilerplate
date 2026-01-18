import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://example.com/en',
          ja: 'https://example.com/ja',
        },
      },
    },
    {
      url: 'https://example.com/links',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://example.com/en/links',
          ja: 'https://example.com/ja/links',
        },
      },
    },
  ];
}

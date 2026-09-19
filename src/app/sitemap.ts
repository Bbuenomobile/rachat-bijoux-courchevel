import { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
  const now = new Date().toISOString();

  const routes = [
    // 1 Homepage
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: 'weekly' as const },

    // 7 Services & Lab
    { url: `${baseUrl}/rachat-diamant-courchevel`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-anciens-courchevel`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-haute-joaillerie-signee-courchevel`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-lingots-pieces-or-courchevel`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-montres-luxe-courchevel`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-pierres-precieuses-courchevel`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/laboratoire-gemmologique-courchevel`, priority: 0.85, changeFrequency: 'monthly' as const },

    // 8 Districts & Stations
    { url: `${baseUrl}/rachat-bijoux-courchevel-1850`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-courchevel-jardin-alpin`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-courchevel-moriond-1650`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-courchevel-village-1550`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-courchevel-le-praz-1300`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-la-tania`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-meribel-val-thorens-3-vallees`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-megeve-chamonix`, priority: 0.85, changeFrequency: 'weekly' as const },

    // 7 Institutional
    { url: `${baseUrl}/a-propos`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/comment-ca-marche`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/faq`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/estimation-gratuite`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/mentions-legales`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/politique-confidentialite`, priority: 0.4, changeFrequency: 'yearly' as const },

    // 1 Blog Index + 6 Blog Articles
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog/guide-vendre-diamants-courchevel`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/comprendre-les-4c-du-diamant-courchevel`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/certificats-gia-vs-hrd-ssef-courchevel`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/vendre-montre-luxe-rolex-patek-richard-mille-courchevel`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/valeur-haute-joaillerie-signee-cartier-van-cleef-courchevel`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/fiscalite-or-lingots-pieces-france`, priority: 0.75, changeFrequency: 'monthly' as const },
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

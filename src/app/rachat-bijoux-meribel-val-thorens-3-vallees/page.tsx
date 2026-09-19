import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Méribel & Les 3 Vallées | Diamants, Joaillerie & Montres Suisses",
  description: "Service de rachat de bijoux de luxe, diamants GIA et montres de collection à Méribel, Val Thorens et sur tout le domaine des 3 Vallées. Déplacement VIP.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-meribel-val-thorens-3-vallees`,
  },
};

const introParagraphs = ['Le domaine des 3 Vallées réunit les plus grands fleurons alpins : Méribel et son architecture de chalets cossus, Val Thorens au sommet des Alpes, et Les Menuires.', 'Maison Obagem assure une couverture complète du domaine pour le rachat de haute joaillerie, montres de collection et métaux précieux, directement à votre chalet ou résidence de standing.', "Nous accompagnons une clientèle internationale exigeante dans la vente discrète et immédiate d'actifs de joaillerie de prestige."];
const neighborhoods = ['Méribel Centre', 'Méribel-Mottaret', 'Méribel Village', 'Val Thorens Haut de Station', 'Les Menuires Croisette', 'Saint-Martin-de-Belleville'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-meribel-val-thorens-3-vallees"
      cityName="Méribel & Les 3 Vallées"
      context="Méribel, Val Thorens, Les Menuires & Le Domaine des 3 Vallées"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80"
    />
  );
}

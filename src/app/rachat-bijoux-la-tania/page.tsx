import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux La Tania | Estimation Or, Montres & Haute Joaillerie",
  description: "Cabinet gemmologique pour le rachat de bijoux or, diamants et montres de prestige à La Tania (Savoie). Rendez-vous personnalisé et virement immédiat.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-la-tania`,
  },
};

const introParagraphs = ["Nichée dans une magnifique forêt d'épicéas entre Courchevel et Méribel, la station piétonne de La Tania offre un cadre naturel privilégié au cœur des 3 Vallées.", "Maison Obagem met son expertise gemmologique à la disposition des résidents et propriétaires de La Tania pour l'achat comptant de bijoux précieux, colliers perles, bracelets or et montres suisses.", 'Estimation rapide, transparente et sans engagement sur simple prise de rendez-vous téléphonique ou en ligne.'];
const neighborhoods = ['La Tania Centre Station', 'Route des Teppes Vertes', 'Le Chalet Blanc', 'Secteur Folyères', 'Résidences du Grand Bois', 'Quartier des Chenus Nord'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-la-tania"
      cityName="La Tania"
      context="La Tania · Station Piétonne au Cœur de la Forêt d'Épicéas & 3 Vallées"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=80"
    />
  );
}

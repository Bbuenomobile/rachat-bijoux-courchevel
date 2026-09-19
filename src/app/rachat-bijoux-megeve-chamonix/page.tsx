import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Megève & Chamonix | Haute Joaillerie, Diamants & Montres de Luxe",
  description: "Rachat de haute joaillerie signée, diamants certifiés et montres de collection à Megève et Chamonix-Mont-Blanc. Déplacement confidentiel en chalet privé.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-megeve-chamonix`,
  },
};

const introParagraphs = ["Stations mythiques des Alpes françaises, Megève et Chamonix partagent avec Courchevel une tradition séculaire d'élégance, de villégiature aristocratique et de grands chalets privés.", "Nos gemmologues experts se déplacent régulièrement à Megève (Place de l'Église, Mont d'Arbois) et Chamonix pour évaluer vos joyaux de famille, solitaires diamants et parures de grandes maisons (Van Cleef & Arpels, Chaumet, Bulgari).", 'Transaction confidentielle, évaluation certifiée et règlement immédiat par virement bancaire instantané.'];
const neighborhoods = ["Place de l'Église Megève", "Mont d'Arbois Megève", 'Rochebrune & Jaillet', 'Chamonix Centre', 'Les Praz de Chamonix', 'Argentière'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-megeve-chamonix"
      cityName="Megève & Chamonix"
      context="Megève, Mont d'Arbois, Chamonix-Mont-Blanc & Haute-Savoie"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1600&q=80"
    />
  );
}

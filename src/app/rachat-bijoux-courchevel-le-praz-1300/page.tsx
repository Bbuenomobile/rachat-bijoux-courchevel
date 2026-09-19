import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Courchevel Le Praz 1300 | Successions, Or & Diamants en Savoie",
  description: "Expertise successorale et rachat de bijoux de famille, or d'investissement et diamants certifiés à Courchevel Le Praz (1300). Paiement comptant immédiat.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-courchevel-le-praz-1300`,
  },
};

const introParagraphs = ["Berceau authentique de la station avec ses chalets traditionnels en bois et pierre, Courchevel Le Praz est imprégné d'histoire alpine et de charme préservé.", "Pour les successions familiales, partages notariés ou arbitrages patrimoniaux en Savoie, nos gemmologues délivrent une valorisation précise et un paiement immédiat sans commission d'intermédiaire.", "Évaluation rigoureuse sous vos yeux de vos bijoux sertis, diamants non montés et lingots d'or 999,9."];
const neighborhoods = ['Le Praz Centre Village', 'Rue de la Madelon', 'Lac du Praz', 'Place de la Chapelle', 'Secteur Envolée', 'Tremplins Olympiques'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-courchevel-le-praz-1300"
      cityName="Courchevel Le Praz (1300)"
      context="Courchevel Le Praz 1300 · Village Historique, Tremplins Olympiques & Lac du Praz"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=80"
    />
  );
}

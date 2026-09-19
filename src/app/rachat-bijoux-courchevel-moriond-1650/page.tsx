import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Courchevel Moriond 1650 | Or, Diamants & Montres Suisses",
  description: "Expertise gemmologique et rachat d'or, diamants et montres de collection à Courchevel Moriond (1650). Estimation gratuite et virement bancaire instantané.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-courchevel-moriond-1650`,
  },
};

const introParagraphs = ["Réputé pour son ensoleillement remarquable et son ambiance chaleureuse, Courchevel Moriond (1650) séduit propriétaires d'appartements de standing et familles en villégiature alpine.", "Maison Obagem propose à Courchevel Moriond le rachat immédiat de bijoux anciens en or 18k, bagues solitaires diamant, montres Rolex et pièces d'or d'investissement (Napoléons, Souverains, Lingots).", "Estimation gratuite sans engagement, basée sur les cotations en temps réel de la bourse de l'or et du diamant international Rapaport."];
const neighborhoods = ['Courchevel Moriond Centre', 'Le Belvédère', 'Route du Belvédère', 'Secteur Petit Moriond', "Résidences Domaine de l'Ariondaz", 'Place du Bachal'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-courchevel-moriond-1650"
      cityName="Courchevel Moriond (1650)"
      context="Courchevel Moriond 1650 · Belvédère, Encombres & Résidences Ensoleillées"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80"
    />
  );
}

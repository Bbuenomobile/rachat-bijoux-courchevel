import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Courchevel Village 1550 | Estimation Or, Joaillerie & Montres",
  description: "Rachat immédiat et confidentiel de bijoux anciens, or 18k et montres suisses à Courchevel Village (1550). Déplacement ou accueil en salon privé 1850.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-courchevel-village-1550`,
  },
};

const introParagraphs = ['Courchevel Village (1550) conjugue quiétude savoyarde, accès direct aux pistes et résidences récentes de grand standing reliées à 1850 en quelques minutes.', "Notre cabinet gemmologique rachète vos bijoux anciens Art Déco, montres de manufacture (Jaeger-LeCoultre, Omega, Cartier, Audemars Piguet) et débris d'or au meilleur cours.", 'Service sécurisé et personnalisé, déplacement sur rendez-vous à Courchevel Village ou accueil sur nos salons de Courchevel 1850.'];
const neighborhoods = ['Rue des Rois', 'Place du Forum Village', 'Quartier des Tovets', 'Route des Grangettes', 'Hameau des Brigues', "Secteur de l'Aquamotion"];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-courchevel-village-1550"
      cityName="Courchevel Village (1550)"
      context="Courchevel Village 1550 · Rue des Rois, Grangettes & Écrin Alpin"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80"
    />
  );
}

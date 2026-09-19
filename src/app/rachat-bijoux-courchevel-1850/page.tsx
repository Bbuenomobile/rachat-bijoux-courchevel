import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Courchevel 1850 | Diamants, Haute Joaillerie & Montres de Prestige",
  description: "Cabinet d'expertise et rachat de haute joaillerie, diamants GIA, montres de luxe et or à Courchevel 1850. Salons confidentiels Rue du Rocher et déplacement en chalet/palace.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-courchevel-1850`,
  },
};

const introParagraphs = ["Épicentre mondial de l'élégance alpine et du grand luxe d'hiver, Courchevel 1850 concentre les plus prestigieuses enseignes de haute joaillerie et d'horlogerie d'exception.", "Maison Obagem offre aux résidents des chalets privés et aux hôtes des palaces de Courchevel 1850 un service de rachat sur mesure, dans la plus stricte discrétion : diamants d'investissement GIA, créations signées (Cartier, Graff, Van Cleef & Arpels) et montres suisses de collection.", 'Expertise confidentielle en salon privé ou directement à votre résidence/suite hôtelière sur rendez-vous, avec règlement immédiat par virement bancaire instantané.'];
const neighborhoods = ['Rue du Rocher', 'Place du Tremplin', 'La Croisette', 'Rue des Verdons', 'Rue Park City', 'Route de Bellecôte'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-courchevel-1850"
      cityName="Courchevel 1850 & Centre"
      context="Courchevel 1850 · Rue du Rocher, Place du Tremplin, La Croisette & Palaces"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80"
    />
  );
}

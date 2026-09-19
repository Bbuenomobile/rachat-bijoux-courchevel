import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Courchevel Jardin Alpin & Bellecôte | Expertise Palaces & Chalets",
  description: "Rachat discret et expertise de diamants, parures signées et montres rares au Jardin Alpin et Bellecôte à Courchevel 1850. Déplacement privé sécurisé en palace ou chalet.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-courchevel-jardin-alpin`,
  },
};

const introParagraphs = ["Le Jardin Alpin et le quartier de Bellecôte constituent le sanctuaire résidentiel le plus exclusif de Courchevel 1850, abritant chalets privés d'exception et palaces légendaires au pied des pistes.", "Nous intervenons auprès d'une clientèle internationale et de family offices pour l'expertise gemmologique et le rachat comptant de trésors familiaux, parures de haute joaillerie et solitaires diamants taille brillant ou émeraude.", "Déplacement confidentiel de notre gemmologue expert dans votre chalet ou hôtel de prestige avec matériel d'analyse scientifique portatif."];
const neighborhoods = ['Jardin Alpin', 'Route de Bellecôte', 'Secteur des Chenus', 'Quartier Nogentil', 'Pralong', 'Hameau de Bellecôte'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-courchevel-jardin-alpin"
      cityName="Jardin Alpin & Bellecôte"
      context="Courchevel 1850 · Jardin Alpin, Piste de Bellecôte, Chenus & Palaces K2 / Cheval Blanc / Airelles"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1600&q=80"
    />
  );
}

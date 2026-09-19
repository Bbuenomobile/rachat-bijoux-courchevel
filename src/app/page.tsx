import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { ContactForm } from '@/components/contact-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Bijoux Courchevel — Cabinet Gemmologique & Rachat Haute Joaillerie 1850",
  description: "Cabinet d'expertise gemmologique indépendant à Courchevel 1850 : rachat immédiat de diamants certifiés GIA, haute joaillerie signée (Cartier, Van Cleef & Arpels, Boucheron), montres de prestige (Rolex, Patek, Richard Mille) et or d'investissement. Salons privés confidentiels et déplacements VIP en chalets et palaces.",
  alternates: {
    canonical: site.url,
  },
};

export default function HomePage() {
  const services = [
    {
      title: "Diamants Certifiés (GIA, HRD, SSEF)",
      desc: "Cotation officielle en temps réel sur le Rapaport Diamond Report. Expertise scientifique de carats, couleur, pureté et taille pour solitaires et diamants bruts ou taillés.",
      href: "/rachat-diamant-courchevel",
      tag: "Cours Rapaport",
    },
    {
      title: "Or 18 Carats & Bijoux d'Époque",
      desc: "Estimation de l'or 750 millièmes et valorisation historique de bijoux anciens, créations Art Déco, parures Belle Époque et patrimoines familiaux.",
      href: "/rachat-bijoux-anciens-courchevel",
      tag: "Or 750 / 18K",
    },
    {
      title: "Haute Joaillerie Signée",
      desc: "Rachat et valorisation de pièces de prestige : Cartier, Van Cleef & Arpels, Boucheron, Graff, Bulgari, Chaumet, Chopard, Harry Winston.",
      href: "/rachat-haute-joaillerie-signee-courchevel",
      tag: "Grandes Maisons",
    },
    {
      title: "Lingots & Pièces d'Or d'Investissement",
      desc: "Rachat de lingots certifiés LBMA (10g à 1kg), Napoléons 20 Francs, Souverains, Krugerrands et pièces de collection au cours officiel de l'or en temps réel.",
      href: "/rachat-lingots-pieces-or-courchevel",
      tag: "Or d'Investissement",
    },
    {
      title: "Montres de Prestige & Haute Horlogerie",
      desc: "Estimation et rachat de montres d'exception : Rolex (Daytona, Submariner, GMT), Patek Philippe (Nautilus, Complications), Richard Mille, Audemars Piguet.",
      href: "/rachat-montres-luxe-courchevel",
      tag: "Haute Horlogerie",
    },
    {
      title: "Pierres Précieuses de Couleur & Perles",
      desc: "Analyse gemmologique avancée d'émeraudes de Colombie, saphirs de Ceylan/Birmanie non chauffés, rubis naturels et perles fines d'époque.",
      href: "/rachat-pierres-precieuses-courchevel",
      tag: "Gemmologie de Couleur",
    },
  ];

  const districts = [
    { name: "Courchevel 1850 & Centre", href: "/rachat-bijoux-courchevel-1850" },
    { name: "Jardin Alpin & Bellecôte", href: "/rachat-bijoux-courchevel-jardin-alpin" },
    { name: "Courchevel Moriond (1650)", href: "/rachat-bijoux-courchevel-moriond-1650" },
    { name: "Courchevel Village (1550)", href: "/rachat-bijoux-courchevel-village-1550" },
    { name: "Courchevel Le Praz (1300)", href: "/rachat-bijoux-courchevel-le-praz-1300" },
    { name: "La Tania", href: "/rachat-bijoux-la-tania" },
    { name: "Méribel & Les 3 Vallées", href: "/rachat-bijoux-meribel-val-thorens-3-vallees" },
    { name: "Megève & Chamonix", href: "/rachat-bijoux-megeve-chamonix" },
  ];

  return (
    <>
      <Section className="py-20 md:py-28 bg-[#08162b] text-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="label text-[#d4af37]">Maison Obagem · Courchevel 1850</span>
              <h1 className="h1 text-white">
                Rachat de Bijoux à Courchevel :
                <span className="block text-[#d4af37] mt-2">Cabinet Gemmologique & Achat Immédiat</span>
              </h1>
              <p className="lead text-ink-200 max-w-2xl">
                Plus de quarante ans d'excellence dans l'estimation impartiale et le rachat immédiat de diamants certifiés GIA, haute joaillerie signée (Cartier, Van Cleef & Arpels, Boucheron), or 18 carats et montres de collection suisses à Courchevel et dans les Alpes.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/estimation-gratuite" className="btn-gold py-3.5 px-8 text-xs uppercase tracking-wider font-semibold">
                  Demander une Estimation Confidentielle
                </Link>
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="btn-outline border-white/30 text-white hover:bg-white/10 py-3.5 px-6 text-xs uppercase tracking-wider font-semibold"
                >
                  📞 {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                  alt="Cabinet gemmologique de haute joaillerie à Courchevel 1850"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08162b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#08162b]/85 backdrop-blur border border-white/10 text-xs text-ink-200">
                  <p className="font-semibold text-white">Salons Privés & Visites en Chalets à 1850</p>
                  <p className="mt-1 text-[#d4af37]">Réception et déplacements discrets sur rendez-vous</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Nos Services d'Expertise Gemmologique"
            title="Estimation Indépendante & Rachat Immédiat à Courchevel"
            subtitle="Chaque expertise est réalisée avec des instruments optiques de pointe et une valorisation stricte selon les cours internationaux en vigueur."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((s, i) => (
              <div key={i} className="card p-8 flex flex-col justify-between hover:shadow-xl transition-all border border-ink-900/10 group">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#08162b] px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                  <h3 className="font-display font-semibold text-xl text-ink-900 mt-4 group-hover:text-[#997b24] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-600 mt-3 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-ink-100 flex items-center justify-between">
                  <Link href={s.href} className="text-xs font-semibold uppercase tracking-wider text-ink-900 group-hover:text-[#997b24] flex items-center gap-1">
                    Découvrir l'expertise <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Présence en Station & Région"
            title="Secteurs Desservis à Courchevel & dans les Alpes"
            subtitle="Nos experts vous accueillent dans nos salons de Courchevel 1850 ou se déplacent en toute discrétion dans votre chalet privé, palace ou résidence."
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {districts.map((d, i) => (
              <Link
                key={i}
                href={d.href}
                className="p-5 rounded-xl bg-white border border-ink-900/10 hover:border-[#d4af37] hover:shadow-md transition-all text-center group"
              >
                <span className="font-display font-medium text-sm text-ink-900 group-hover:text-[#997b24] transition-colors block">
                  {d.name}
                </span>
                <span className="text-[11px] text-ink-500 mt-1 block">Conseil & Estimation →</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-4xl">
          <div className="bg-white rounded-2xl border border-ink-900/10 p-8 md:p-12 shadow-sm">
            <ContactForm
              headline="Demandez une Estimation Confidentielle à Courchevel"
              intro="Remplissez les éléments ci-dessous avec les caractéristiques de votre bijou, diamant ou montre pour recevoir une première proposition indicative sous 24 heures."
              source="home-page"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

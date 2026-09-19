import Link from 'next/link';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-[#050f1d] text-ink-100 border-t border-white/10">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#997b24] text-[#081a30] font-serif font-bold text-lg">
              RC
            </span>
            <span className="font-display text-xl text-white font-semibold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-ink-300 leading-relaxed max-w-xs">
            Cabinet gemmologique indépendant et rachat de haute joaillerie à Courchevel 1850 : diamants certifiés GIA / SSEF selon le cours mondial du Rapaport, bijoux anciens et signés (Cartier, Van Cleef & Arpels, Boucheron, Graff), montres suisses d'exception et or d'investissement.
          </p>
          <div className="mt-5 text-sm text-ink-300 space-y-1">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block text-[#d4af37] hover:text-white font-medium">{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</a>
            <p className="pt-2">{site.address.street}</p>
            <p>{site.address.postalCode} {site.address.city} ({site.region}), France</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">Nos Domaines d'Expertise</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/rachat-diamant-courchevel" className="text-ink-300 hover:text-white">Diamants Certifiés (GIA, SSEF)</Link></li>
            <li><Link href="/rachat-bijoux-anciens-courchevel" className="text-ink-300 hover:text-white">Bijoux Anciens & Époque (18k)</Link></li>
            <li><Link href="/rachat-haute-joaillerie-signee-courchevel" className="text-ink-300 hover:text-white">Haute Joaillerie Signée</Link></li>
            <li><Link href="/rachat-lingots-pieces-or-courchevel" className="text-ink-300 hover:text-white">Or d'Investissement & Lingots</Link></li>
            <li><Link href="/rachat-montres-luxe-courchevel" className="text-ink-300 hover:text-white">Montres de Prestige (Rolex, Patek)</Link></li>
            <li><Link href="/rachat-pierres-precieuses-courchevel" className="text-ink-300 hover:text-white">Pierres Précieuses & Perles Fines</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">La Maison</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/a-propos" className="text-ink-300 hover:text-white">À Propos</Link></li>
            <li><Link href="/laboratoire-gemmologique-courchevel" className="text-ink-300 hover:text-white">Laboratoire Gemmologique</Link></li>
            <li><Link href="/comment-ca-marche" className="text-ink-300 hover:text-white">Comment ça Marche</Link></li>
            <li><Link href="/faq" className="text-ink-300 hover:text-white">Questions Fréquentes (FAQ)</Link></li>
            <li><Link href="/blog" className="text-ink-300 hover:text-white">Guides & Analyses du Marché</Link></li>
            <li><Link href="/contact" className="text-ink-300 hover:text-white">Salons Privés & Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">Courchevel & 3 Vallées</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/rachat-bijoux-courchevel-1850" className="text-ink-300 hover:text-white">Courchevel 1850 & Centre</Link></li>
            <li><Link href="/rachat-bijoux-courchevel-jardin-alpin" className="text-ink-300 hover:text-white">Jardin Alpin & Bellecôte</Link></li>
            <li><Link href="/rachat-bijoux-courchevel-moriond-1650" className="text-ink-300 hover:text-white">Courchevel Moriond (1650)</Link></li>
            <li><Link href="/rachat-bijoux-courchevel-village-1550" className="text-ink-300 hover:text-white">Courchevel Village (1550)</Link></li>
            <li><Link href="/rachat-bijoux-courchevel-le-praz-1300" className="text-ink-300 hover:text-white">Courchevel Le Praz (1300)</Link></li>
            <li><Link href="/rachat-bijoux-la-tania" className="text-ink-300 hover:text-white">La Tania</Link></li>
            <li><Link href="/rachat-bijoux-meribel-val-thorens-3-vallees" className="text-ink-300 hover:text-white">Méribel & Les 3 Vallées</Link></li>
            <li><Link href="/rachat-bijoux-megeve-chamonix" className="text-ink-300 hover:text-white">Megève & Chamonix</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-xs text-ink-400">
        <div className="container-x flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés. Maison Obagem Courchevel.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white">Mentions Légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white">Politique de Confidentialité</Link>
            <Link href="/estimation-gratuite" className="hover:text-white">Estimation Gratuite</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

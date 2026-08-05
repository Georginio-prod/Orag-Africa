<script setup lang="ts">
import { useLanguage } from "../composables/useLanguage";

interface Localized {
  fr: string;
  en: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: Localized; // Fonction + établissement + ville
  initials: string; // Avatar de repli (pas de dépendance externe)
  accent: string; // Dégradé Tailwind de l'avatar
  text: Localized;
  rating: number;
}

const { locale } = useLanguage();

// =====================================================
// TEXTES DE SECTION (traduits)
// =====================================================
const copy = {
  eyebrow: { fr: "Ils nous font confiance", en: "They trust us" },
  title: { fr: "Témoignages", en: "Testimonials" },
  subtitle: {
    fr: "Des restaurateurs du Togo gèrent leurs paiements, leurs commandes et leur croissance avec OrgaAfrica.",
    en: "Restaurant owners across Togo run their payments, orders and growth with OrgaAfrica.",
  },
};

const stats: { value: Localized; label: Localized }[] = [
  {
    value: { fr: "30+", en: "30+" },
    label: { fr: "Restaurants partenaires", en: "Partner restaurants" },
  },
  {
    value: { fr: "4,8/5", en: "4.8/5" },
    label: { fr: "Note moyenne", en: "Average rating" },
  },
  {
    value: { fr: "-40%", en: "-40%" },
    label: { fr: "Temps d'attente", en: "Waiting time" },
  },
];

// =====================================================
// TÉMOIGNAGES (bilingues, alignés sur l'app :
// Mobile Money, commande par QR code, POS hors-ligne, analytics)
// =====================================================
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ama Adjoyi",
    role: {
      fr: "Gérante · Chez Mama Béatrice, Lomé",
      en: "Manager · Chez Mama Béatrice, Lomé",
    },
    initials: "AA",
    accent: "from-red-500 to-orange-500",
    text: {
      fr: "Avec Flooz et T-Money intégrés à la caisse, mes comptes tombent juste chaque soir. Fini les écarts et les paiements introuvables.",
      en: "With Flooz and T-Money built into the till, my accounts balance every night. No more gaps or untraceable payments.",
    },
    rating: 5,
  },
  {
    id: 2,
    name: "Kossi Amouzou",
    role: {
      fr: "Propriétaire · Le Terminus, Kara",
      en: "Owner · Le Terminus, Kara",
    },
    initials: "KA",
    accent: "from-rose-500 to-red-600",
    text: {
      fr: "Les files d'attente ont disparu. Les clients commandent par QR code et nous servons presque deux fois plus de couverts le midi.",
      en: "The queues are gone. Customers order by QR code and we serve nearly twice as many covers at lunch.",
    },
    rating: 5,
  },
  {
    id: 3,
    name: "Afi Mensah",
    role: {
      fr: "Responsable de salle · Le Palmier, Lomé",
      en: "Floor manager · Le Palmier, Lomé",
    },
    initials: "AM",
    accent: "from-amber-500 to-red-500",
    text: {
      fr: "Le POS continue de tourner même quand la connexion coupe. Depuis qu'on utilise OrgaAfrica, on n'a plus jamais perdu une commande.",
      en: "The POS keeps running even when the connection drops. Since we started using OrgaAfrica, we've never lost an order.",
    },
    rating: 4,
  },
  {
    id: 4,
    name: "Komla Dossou",
    role: {
      fr: "Fondateur · Braise & Saveurs, Sokodé",
      en: "Founder · Braise & Saveurs, Sokodé",
    },
    initials: "KD",
    accent: "from-red-600 to-pink-600",
    text: {
      fr: "Les tableaux de bord m'ont permis d'obtenir un financement : la banque avait enfin des chiffres fiables sur mon activité.",
      en: "The dashboards helped me secure funding — the bank finally had reliable numbers on my business.",
    },
    rating: 5,
  },
  {
    id: 5,
    name: "Adjo Lawson",
    role: {
      fr: "Gérante · Le Flamboyant, Kpalimé",
      en: "Manager · Le Flamboyant, Kpalimé",
    },
    initials: "AL",
    accent: "from-orange-500 to-red-600",
    text: {
      fr: "L'appli m'aide vraiment à suivre mes ventes à distance. La formation de l'équipe a pris quelques jours, mais aujourd'hui on ne reviendrait pas en arrière.",
      en: "The app really helps me track sales remotely. Training the team took a few days, but today we wouldn't go back.",
    },
    rating: 3,
  },
  {
    id: 6,
    name: "Yao Agbeko",
    role: {
      fr: "Chef d'équipe · Grillades du Golfe, Atakpamé",
      en: "Team lead · Grillades du Golfe, Atakpamé",
    },
    initials: "YA",
    accent: "from-red-500 to-rose-600",
    text: {
      fr: "Moins d'erreurs de commande, un service plus fluide, des serveurs moins stressés. L'équipe a adopté l'outil dès le premier jour.",
      en: "Fewer order mistakes, smoother service, less stressed waiters. The team adopted it from day one.",
    },
    rating: 5,
  },
];

const t = (value: Localized) => value[locale.value];
</script>

<template>
  <section
    class="bg-black text-white py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24"
  >
    <div class="max-w-7xl mx-auto">
      <!-- ===== EN-TÊTE ===== -->
      <div class="max-w-2xl mb-10 md:mb-14">
        <span
          class="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-red-400"
        >
          <span class="h-px w-6 bg-red-500"></span>
          {{ t(copy.eyebrow) }}
        </span>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight"
        >
          {{ t(copy.title) }}
        </h2>
        <p class="text-gray-400 text-base sm:text-lg leading-relaxed">
          {{ t(copy.subtitle) }}
        </p>
      </div>

      <!-- ===== BANDEAU DE CONFIANCE ===== -->
      <div
        class="grid grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-14 border-y border-white/10 py-6"
      >
        <div v-for="stat in stats" :key="stat.label.en" class="text-center">
          <div
            class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            {{ t(stat.value) }}
          </div>
          <div class="text-xs sm:text-sm text-gray-400 mt-1">
            {{ t(stat.label) }}
          </div>
        </div>
      </div>

      <!-- ===== GRILLE DE TÉMOIGNAGES ===== -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <article
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="group relative bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-red-900/30 hover:border-red-600/60 transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
          <!-- Guillemet décoratif -->
          <svg
            class="w-8 h-8 text-red-600/40 mb-3"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6Z"
            />
          </svg>

          <!-- Étoiles -->
          <div class="flex space-x-1 mb-3" aria-label="Note">
            <svg
              v-for="i in 5"
              :key="i"
              class="w-4 h-4 sm:w-5 sm:h-5"
              :class="
                i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-700'
              "
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <!-- Texte -->
          <p
            class="text-gray-200 leading-relaxed text-sm sm:text-base flex-grow"
          >
            {{ t(testimonial.text) }}
          </p>

          <!-- Auteur -->
          <div class="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
            <div
              class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br flex items-center justify-center text-sm font-bold text-white shrink-0"
              :class="testimonial.accent"
            >
              {{ testimonial.initials }}
            </div>
            <div class="min-w-0">
              <h3 class="font-semibold text-white text-sm sm:text-base truncate">
                {{ testimonial.name }}
              </h3>
              <p class="text-xs sm:text-sm text-gray-400 truncate">
                {{ t(testimonial.role) }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

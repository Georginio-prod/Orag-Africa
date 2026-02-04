<template>
  <!-- <img
    src="/public/Group 2.png"
    alt=""
    class="absolute transform translate-y-6/6 z-0 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-xl xl:max-w-xl object-contain overflow-hidden"
  /> -->

  <div class="py-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
    <div class="w-full mx-auto">
      <!-- Header -->
      <div class="mb-8 sm:mb-12 md:mb-16">
        <h1
          class="text-3xl sm:text-4xl md:text-xl lg:text-5xl font-bold text-white mb-4"
        >
          Nos Solutions
        </h1>
        <p
          class="text-gray-400 text-base sm:text-lg md:text-xl lg:text-xl max-w-2xl font-semibold"
        >
          OrgaAfrica regroupe tout ce dont un restaurant a besoin dans un
          système unique et connecté.
        </p>
      </div>

      <!-- SECTION 1 -->
      <div class="flex flex-col gap-32 sm:gap-48 md:gap-64">
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 z-10"
        >
          <div
            class="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-50 w-full lg:w-1/2"
          >
            <SolutionCard
              v-for="solution in firstSolutions"
              :key="solution.title"
              :title="solution.title"
              :description="solution.description"
            />
          </div>

          <!-- Mobile Mockups -->
          <div
            class="relative flex justify-center items-center w-full lg:w-1/2"
          >
            <img
              src="/public/image 14.png"
              alt=""
              class="relative object-cover"
            />
          </div>
        </div>

        <!-- SECTION 2 -->

        <div class="flex flex-col lg:flex-row items-center w-full">
          <!-- IMAGE -->
          <div
            class="relative w-full lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <img
              src="/public/O1.png"
              alt=""
              class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>

          <!-- CARDS -->
          <div
            class="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div
              class="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-50 max-w-lg"
            >
              <SolutionCard
                v-for="solution in secondSolutions"
                :key="solution.title"
                :title="solution.title"
                :description="solution.description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SolutionCard from "./SolutionCard.vue";

interface SolutionItem {
  title: string;
  description: string;
}

const firstSolutions: SolutionItem[] = [
  {
    title: "Paiements digitaux sécurisés et rapides",
    description:
      "Les paiements en cash sont difficiles à tracer et limitent votre croissance. OrgaAfrica accepte Mobile Money, cartes bancaires et cryptomonnaies, avec une réconciliation simplifiée et des virements rapides, pour une gestion transparente et efficace.",
  },
  {
    title: "Commandes rapides sans attente",
    description:
      "Les longues files frustrent vos clients et ralentissent le service. Avec notre système de commande via QR code, vos clients passent commande instantanément, suivent leur position en file en temps réel, et peuvent même accéder prioritairement grâce au paiement digital",
  },
];

const secondSolutions: SolutionItem[] = [
  {
    title: "POS simple et efficace",
    description:
      "Les commandes manuelles causent erreurs et retards qui impactent votre performance. Notre point de vente intuitif vous permet de gérer menus, serveurs, factures instantanées, et fonctionne même hors ligne pour assurer un service fluide à tout moment.",
  },
  {
    title: "Analyse et reporting clairs",
    description:
      "Sans données fiables, il est difficile d'accéder à des financements ou d'optimiser vos opérations. Nos tableaux de bord vous offrent des analyses précises pour suivre vos ventes, comprendre votre activité et convaincre vos partenaires financiers.",
  },
];
</script>

<style scoped>
/* Empêcher le débordement horizontal */
img {
  max-width: 100%;
  height: auto;
}
</style>

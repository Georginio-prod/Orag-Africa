<template>
  <img src="/public/Group 2.png" alt="" class="absolute transform translate-y-6/6 z-0 max-w-xl" />

  <div class="py-4 px-20">
    <div class="w-full mx-auto">
      <!-- Header -->
      <div class="mb-16">
        <h1 class="text-5xl font-bold text-white mb-4">Nos Solutions</h1>
        <p class="text-gray-400 text-2xl max-w-2xl font-semibold">
          OrgaAfrica regroupe tout ce dont un restaurant a besoin dans un système unique et
          connecté.
        </p>
      </div>

      <!-- SECTION 1 -->
      <div class="flex flex-col gap-64">
        <div class="flex justify-between items-center z-10">
          <div class="space-y-50">
            <SolutionCard
              v-for="solution in firstSolutions"
              :key="solution.title"
              :title="solution.title"
              :description="solution.description"
            />
          </div>

          <!-- Mobile Mockups -->
          <div class="relative flex justify-center items-center">
            <img src="/public/image 14.png" alt="" />
          </div>
        </div>
        <!-- SECTION 2 -->
        <div class="flex justify-between items-center z-10">
          <!-- Mobile Mockups -->
          <div class="relative flex justify-center items-center">
            <img src="/public/image 17.png" alt="" />
          </div>
          <div class="space-y-50">
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
</template>

<script setup lang="ts">
import SolutionCard from './SolutionCard.vue'

interface SolutionItem {
  title: string
  description: string
}

const firstSolutions: SolutionItem[] = [
  {
    title: 'Paiements digitaux sécurisés et rapides',
    description:
      'Les paiements en cash sont difficiles à tracer et limitent votre croissance. OrgaAfrica accepte Mobile Money, cartes bancaires et cryptomonnaies, avec une réconciliation simplifiée et des virements rapides, pour une gestion transparente et efficace.',
  },
  {
    title: 'Commandes rapides sans attente',
    description:
      'Les longues files frustrent vos clients et ralentissent le service. Avec notre système de commande via QR code, vos clients passent commande instantanément, suivent leur position en file en temps réel, et peuvent même accéder prioritairement grâce au paiement digital',
  },
]

const secondSolutions: SolutionItem[] = [
  {
    title: 'POS simple et efficace',
    description:
      'Les commandes manuelles causent erreurs et retards qui impactent votre performance. Notre point de vente intuitif vous permet de gérer menus, serveurs, factures instantanées, et fonctionne même hors ligne pour assurer un service fluide à tout moment.',
  },
  {
    title: 'Analyse et reporting clairs',
    description:
      "Sans données fiables, il est difficile d'accéder à des financements ou d'optimiser vos opérations. Nos tableaux de bord vous offrent des analyses précises pour suivre vos ventes, comprendre votre activité et convaincre vos partenaires financiers.",
  },
]
</script>

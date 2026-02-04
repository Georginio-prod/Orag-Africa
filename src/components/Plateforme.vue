<template>
  <div class="text-white py-16 px-6 md:px-12 lg:px-20">
    <!-- Header -->
    <div class="max-w-7xl mx-auto mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-3">Les Modules de la Plateforme</h1>
      <p class="text-lg text-gray-400 font-semibold">Commandes & Gestion de file d'attente</p>
    </div>

    <!-- Main Content Grid -->
    <div class="flex justify-between items-start">
      <div class="">
        <!-- Left Column - Modules Info -->
        <div class="space-y-8">
          <div
            v-for="module in modules"
            :key="module.title"
            class="bg-black rounded-3xl p-6 border border-zinc-800"
          >
            <h2 class="text-3xl font-semibold mb-3">{{ module.title }}</h2>
            <p class="text-[#EFFDF5] text-sm mb-4">{{ module.description }}</p>

            <ul class="space-y-3">
              <li v-for="item in module.items" :key="item" class="flex items-start text-sm">
                <span class="text-gray-400 mr-3">•</span>
                <span class="text-white">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Column - Phone Mockup -->
      </div>

      <div class="relative transform -translate-y-2/12">
        <!-- Phone Frame -->
        <img src="/public/Rectangle 4221 (2).png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PlatformModule {
  title: string
  description: string
  items: string[]
}

const modules: PlatformModule[] = [
  {
    title: "Commandes & Gestion de file d'attente",
    description: 'Permettez aux clients de commander sans attendre.',
    items: [
      'Scan de QR code',
      'Position en temps réel dans la file',
      'Suivi de commande',
      'Accès prioritaire via paiement digital',
    ],
  },
  {
    title: 'Infrastructure Paiements',
    description: 'Acceptez tous les moyens de paiement utilisés par vos clients',
    items: [
      'Mobile Money (Flooz, TMoney, Mix…)',
      'Cartes bancaires',
      'Cryptomonnaies',
      'Réconciliation du cash',
      'Virements rapides (J+1 / J+3)',
    ],
  },
]
</script>

<style scoped>
/* Animations et effets supplémentaires si nécessaire */
</style>

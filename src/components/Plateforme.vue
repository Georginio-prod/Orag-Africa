<template>
  <section
    class="py-6 sm:py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20"
  >
    <!-- Header -->
    <div class="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
      <h1
        class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3"
      >
        Les Modules de la Plateforme
      </h1>
      <p class="text-base sm:text-xl text-gray-400 font-semibold">
        Commandes & Gestion de file d'attente
      </p>
    </div>

    <!-- Content -->
    <div
      class="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-8 lg:gap-12"
    >
      <!-- Modules -->
      <div class="w-full lg:w-1/2 xl:w-3/5">
        <div class="space-y-6 sm:space-y-8">
          <div
            v-for="module in modules"
            :key="module.title"
            class="bg-black border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 transition hover:border-zinc-700"
          >
            <h2
              class="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3"
            >
              {{ module.title }}
            </h2>

            <p class="text-gray-400 text-xs sm:text-sm lg:text-lg mb-3 sm:mb-4">
              {{ module.description }}
            </p>

            <ul class="space-y-2 sm:space-y-3 text-gray-400">
              <li
                v-for="item in module.items"
                :key="item"
                class="flex items-start text-xs sm:text-sm lg:text-md"
              >
                <span class="text-gray-400 mr-2 sm:mr-3">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- desktop -->
      <div class="w-full hidden lg:flex justify-center lg:justify-end">
        <div class="relative object-cover">
          <img
            src="/public/Rectangle 4221 (2).png"
            alt="Mockup de l'application mobile"
            class="w-full h-auto object-contain lg:-translate-y-12 xl:-translate-y-16"
          />
        </div>
      </div>

      <!-- mobile -->
      <div class="w-full flex lg:hidden justify-center items-center">
        <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <img
            src="/public/E1.png"
            alt="Mockup de l'application mobile"
            class="w-64 h-64 object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PlatformModule {
  title: string;
  description: string;
  items: string[];
}

const modules: PlatformModule[] = [
  {
    title: "Commandes & Gestion de file d'attente",
    description: "Permettez aux clients de commander sans attendre.",
    items: [
      "Scan de QR code",
      "Position en temps réel dans la file",
      "Suivi de commande",
      "Accès prioritaire via paiement digital",
    ],
  },
  {
    title: "Infrastructure Paiements",
    description:
      "Acceptez tous les moyens de paiement utilisés par vos clients",
    items: [
      "Mobile Money (Flooz, TMoney, Mix…)",
      "Cartes bancaires",
      "Cryptomonnaies",
      "Réconciliation du cash",
      "Virements rapides (J+1 / J+3)",
    ],
  },
];
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>

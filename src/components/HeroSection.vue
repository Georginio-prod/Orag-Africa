<template>
  <!-- ===== SECTION TEXTE ===== -->
  <section
    class="w-full px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 lg:pt-20 flex items-center justify-center relative overflow-hidden"
  >
    <div class="max-w-6xl w-full">
      <!-- Badge utilisateurs -->
      <div class="flex justify-center mb-4 sm:mb-5">
        <img src="/Container.png" alt="users" class="w-48 sm:w-56 lg:w-64" />
      </div>

      <!-- Titre + Description + Boutons -->
      <div class="text-center mb-8 sm:mb-12 lg:mb-16 relative z-10">
        <!-- Titre -->
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight px-2 sm:px-8 md:px-16 lg:px-40 mb-4 sm:mb-5 lg:mb-6"
        >
          OrgaAfrica propose deux solutions formant le système d'exploitation
          des restaurants et points de vente en Afrique.
        </h1>

        <!-- Description -->
        <p
          class="text-base sm:text-lg lg:text-xl text-[#F1F5F9] leading-relaxed mx-auto px-2 sm:px-6 md:px-20 lg:px-60 mb-6 sm:mb-8 lg:mb-12"
        >
          Gérez commandes, paiements, files d'attente, réservations, fidélité et
          croissance sur une seule plateforme, pensée pour l'Afrique
        </p>

        <!-- Boutons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6"
        >
          <button
            @click="openDemo"
            class="w-full sm:w-auto bg-red-500 text-white px-6 lg:px-3 py-3 lg:py-4 rounded-2xl text-base sm:text-lg lg:text-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Demander une démo
          </button>

          <button
            class="w-full sm:w-auto bg-transparent text-white border border-red-500 px-6 lg:px-3 py-3 lg:py-4 rounded-2xl text-base sm:text-lg lg:text-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Commencer gratuitement
          </button>
        </div>
      </div>
    </div>
  </section>

  <div class="sm:hidden flex flex-col items-center -mt-6 px-4 gap-3">
    <img
      src="/public/Rectangle 4221.png"
      alt="Orga App Left"
      class="w-48 object-contain"
    />
    <div class="grid grid-cols-2 gap-2 justify-center">
      <img
        src="/public/Frame 33.png"
        alt="Orga App Center"
        class="w-28 object-contain"
      />
      <img
        src="/public/Frame 33.png"
        alt="Orga App Center"
        class="w-28 object-contain"
      />
    </div>
    <div>
      <img
        src="/public/Frame 33.png"
        alt="Orga App Center"
        class="w-28 object-contain"
      />
    </div>
  </div>

  <!-- ══ TABLET (sm → md) : 3 colonnes avec overlap léger ══ -->
  <div
    class="hidden sm:flex md:hidden justify-center items-end relative -mt-8 px-4"
  >
    <!-- Left Phone -->
    <div class="relative z-10">
      <img
        src="/public/orgaR 1.png"
        alt="Orga App Left"
        class="w-48 object-contain"
      />
    </div>

    <!-- Center (3 frames) -->
    <div class="absolute z-20 flex flex-col gap-3 -translate-x-2">
      <img
        src="/public/Frame 35.png"
        alt="Stats Card 1"
        class="w-36 object-contain translate-y-2 translate-x-12"
      />
      <img
        src="/public/Frame 35.png"
        alt="Stats Card 2"
        class="w-36 object-contain translate-x-6"
      />
      <img
        src="/public/Frame 35.png"
        alt="Stats Card 3"
        class="w-36 object-contain -translate-y-2"
      />
    </div>

    <!-- Right Phone -->
    <div class="relative z-10 -ml-8">
      <img
        src="/public/orgaR2.png"
        alt="Orga App Right"
        class="w-48 object-contain"
      />
    </div>
  </div>

  <!-- ══ TABLET grand (md → lg) : plus d'espace, overlap plus prononcé ══ -->
  <div
    class="hidden md:flex lg:hidden justify-center items-center relative -mt-12 px-4"
  >
    <!-- Left Phone -->
    <div class="relative z-10">
      <img
        src="/public/orgaR 1.png"
        alt="Orga App Left"
        class="w-56 object-contain"
      />
    </div>

    <!-- Center (3 frames stacked) -->
    <div class="absolute z-20 flex flex-col gap-4">
      <img
        src="/public/Frame 35.png"
        alt="Stats Card 1"
        class="w-44 object-contain translate-y-4 translate-x-16"
      />
      <img
        src="/public/Frame 35.png"
        alt="Stats Card 2"
        class="w-44 object-contain translate-x-8"
      />
      <img
        src="/public/Frame 35.png"
        alt="Stats Card 3"
        class="w-44 object-contain -translate-y-4"
      />
    </div>

    <!-- Right Phone -->
    <div class="relative z-10 -ml-12">
      <img
        src="/public/orgaR2.png"
        alt="Orga App Right"
        class="w-56 object-contain"
      />
    </div>
  </div>

  <!-- ══ GRAND ÉCRAN (≥lg) : layout exact de référence ══ -->
  <div
    class="hidden lg:flex justify-center items-center relative -mt-20 xl:-mt-24 px-4 gap-96"
  >
    <!-- Left Phone -->
    <div class="relative z-10">
      <img
        src="/public/orgaR 1.png"
        alt="Orga App Left"
        class="w-64 xl:w-10/12 object-contain transform -translate-y-16 -translate-x-8"
      />
    </div>

    <!-- Center (3 frames stacked vertically) -->
    <div class="absolute z-20 flex flex-col gap-5 xl:gap-6">
      <img
        src="/public/Frame 35.png"
        alt="Stats Card 1"
        class="w-48 xl:w-64 object-contain translate-y-8 -translate-x-72"
      />
      <img
        src="/public/Frame 35.png"
        alt="Stats Card 2"
        class="w-48 xl:w-64 object-contain translate-x-64"
      />
      <img
        src="/public/Frame 35.png"
        alt="Stats Card 3"
        class="w-48 xl:w-64 object-contain -translate-y-8 -translate-x-48"
      />
    </div>

    <!-- Right Phone -->
    <div class="relative z-10 -ml-16 xl:-ml-20">
      <img
        src="/public/orgaR2.png"
        alt="Orga App Right"
        class="w-64 xl:w-10/12 object-contain -translate-y-16 translate-x-14"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const openDemo = () => {
  window.open("/demo", "_blank");
};
</script>

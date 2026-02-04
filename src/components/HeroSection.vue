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
          OrgaAfrica propose deux solutions formant le système d'exploitation des restaurants et
          points de vente en Afrique.
        </h1>

        <!-- Description -->
        <p
          class="text-base sm:text-lg lg:text-xl text-[#F1F5F9] leading-relaxed mx-auto px-2 sm:px-6 md:px-20 lg:px-60 mb-6 sm:mb-8 lg:mb-12"
        >
          Gérez commandes, paiements, files d'attente, réservations, fidélité et croissance sur une
          seule plateforme, pensée pour l'Afrique
        </p>

        <!-- Boutons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6">
          <button
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
    <img src="/public/orgaR 1.png" alt="Orga App Left" class="w-48 object-contain" />
    <div class="flex gap-2 justify-center">
      <img src="/public/Frame 35.png" alt="Orga App Center" class="w-28 object-contain" />
      <img src="/public/Frame 35.png" alt="Orga App Center" class="w-28 object-contain" />
      <img src="/public/Frame 35.png" alt="Orga App Center" class="w-28 object-contain" />
    </div>
    <img src="/public/orgaR2.png" alt="Orga App Right" class="w-48 object-contain" />
  </div>

  <!-- ══ TABLET (sm → md) : 3 colonnes avec overlap léger ══ -->
  <div class="hidden sm:flex md:hidden justify-center items-end relative -mt-10 px-6 gap-2">
    <!-- Left -->
    <div class="relative z-10">
      <img
        src="/public/orgaR 1.png"
        alt="Orga App Left"
        class="w-52 object-contain translate-x-6"
      />
    </div>
    <!-- Center (3 frames superposées) -->
    <div class="relative z-20 flex">
      <img
        src="/public/Frame 35.png"
        alt="Orga App Center"
        class="w-44 object-contain -translate-y-16 translate-x-8"
      />
      <img
        src="/public/Frame 35.png"
        alt="Orga App Center"
        class="w-44 object-contain -translate-y-4 -translate-x-2"
      />
      <img
        src="/public/Frame 35.png"
        alt="Orga App Center"
        class="w-44 object-contain -translate-y-12 -translate-x-6"
      />
    </div>
    <!-- Right -->
    <div>
      <img
        src="/public/orgaR2.png"
        alt="Orga App Right"
        class="w-52 object-contain -translate-x-8 -translate-y-6"
      />
    </div>
  </div>

  <!-- ══ TABLET grand (md → lg) : plus d'espace, overlap plus prononcé ══ -->
  <div class="hidden md:flex lg:hidden justify-center items-end relative -mt-16 px-4 gap-0">
    <!-- Left -->
    <div class="relative z-10">
      <img
        src="/public/orgaR 1.png"
        alt="Orga App Left"
        class="w-64 object-contain translate-x-10"
      />
    </div>
    <!-- Center -->
    <div class="absolute flex z-20">
      <img
        src="/public/Frame 35.png"
        alt="Orga App Center"
        class="w-56 object-contain -translate-y-24 translate-x-14"
      />
      <img
        src="/public/Frame 35.png"
        alt="Orga App Center"
        class="w-56 object-contain -translate-y-6 -translate-x-3"
      />
      <img
        src="/public/Frame 35.png"
        alt="Orga App Center"
        class="w-56 object-contain -translate-y-20 -translate-x-8"
      />
    </div>
    <!-- Right -->
    <div>
      <img
        src="/public/orgaR2.png"
        alt="Orga App Right"
        class="w-64 object-contain -translate-x-14 -translate-y-8"
      />
    </div>
  </div>

  <!-- ══ GRAND ÉCRAN (≥lg) : layout exact de référence ══ -->
  <div
    class="hidden lg:flex justify-center items-end relative -mt-[26%] lg:-mt-[16%] md:-mt-[10%] px-1 gap-0"
  >
    <!-- Left Phone -->
    <div class="relative z-10">
      <img src="/public/orgaR 1.png" alt="Orga App Left" class="translate-x-14" />
    </div>

    <!-- Center (3 frames) -->
    <div class="absolute flex z-20">
      <div>
        <img
          src="/public/Frame 35.png"
          alt="Orga App Center"
          class="relative -translate-y-[91.6%] translate-x-[75%]"
        />
      </div>
      <div>
        <img
          src="/public/Frame 35.png"
          alt="Orga App Center"
          class="relative -translate-y-[16.6%] -translate-x-[16.6%]"
        />
      </div>
      <div>
        <img
          src="/public/Frame 35.png"
          alt="Orga App Center"
          class="relative -translate-y-[75%] -translate-x-[41.6%]"
        />
      </div>
    </div>

    <!-- Right Phone -->
    <div>
      <img src="/public/orgaR2.png" alt="Orga App Right" class="-translate-x-18 -translate-y-10" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>

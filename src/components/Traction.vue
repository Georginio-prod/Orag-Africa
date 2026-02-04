<script setup lang="ts">
import StoreButtons from './StoreButtons.vue'

interface TractionItem {
  id: string
  text: string
  highlight: string
  icon: string
}

const tractionItems: TractionItem[] = [
  {
    id: 'users',
    text: '+500 Utilisateurs',
    highlight: '+500 Utilisateurs',
    icon: 'users',
  },
  {
    id: 'money',
    text: 'Millions de FCFA traités',
    highlight: 'Millions de FCFA traités',
    icon: 'money',
  },
  {
    id: 'restaurants',
    text: 'Restaurants et vendeurs très actifs',
    highlight: 'Restaurants et vendeurs très actifs',
    icon: 'restaurants',
  },
  {
    id: 'expansion',
    text: 'Expansion prévue en Afrique',
    highlight: 'Expansion prévue en Afrique',
    icon: 'expansion',
  },
]

const getIconPath = (iconType: string): string => {
  const icons: Record<string, string> = {
    users:
      'M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z',
    money:
      'M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267zM10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z',
    restaurants:
      'M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z',
    expansion:
      'M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z',
  }
  return icons[iconType] || ''
}
</script>

<template>
  <section class="text-white py-12 md:py-16 lg:pt-20 px-4 sm:px-6 lg:px-12">
    <div class="max-w-7xl mx-auto">
      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
        <!-- Image Section -->
        <div class="order-2 lg:order-1 w-full">
          <img src="/public/image 18.png" alt="Traction visuelle" class="w-full h-auto" />
        </div>

        <!-- Content Section -->
        <div class="order-1 lg:order-2 space-y-6 md:space-y-8">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Traction & Confiance
          </h2>

          <!-- Traction Items -->
          <div class="space-y-4 md:space-y-6">
            <div
              v-for="item in tractionItems"
              :key="item.id"
              class="flex items-center gap-3 sm:gap-4"
            >
              <!-- Icon Container -->
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-900/30 flex items-center justify-center border border-red-500/30 hover:bg-red-900/50 transition-colors duration-200"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path :d="getIconPath(item.icon)" fill-rule="evenodd" clip-rule="evenodd" />
                </svg>
              </div>

              <!-- Text -->
              <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
                <span class="font-bold">{{ item.highlight }}</span>
              </p>
            </div>
          </div>

          <!-- Boutons Store - collés aux traction items -->
          <div class="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <StoreButtons class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center" />
          </div>
        </div>
      </div>

      <!-- Image du téléphone - en dessous -->
      <!-- <div class="flex justify-center lg:justify-start mt-8 lg:mt-0">
        <div class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <img
            src="/public/E2.png"
            alt="Application Orga Pro"
            class="w-full h-auto object-contain"
          />
        </div>
      </div> -->
    </div>
  </section>
</template>
<style scoped>
/* Responsive adjustments */
@media (max-width: 640px) {
  section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

/* Smooth transitions */
.transition-colors {
  transition: background-color 0.2s ease-in-out;
}
</style>

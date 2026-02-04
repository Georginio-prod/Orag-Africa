<template>
  <nav
    class="bg-white mx-3 sm:mx-6 lg:mx-10 my-4 sm:my-6 lg:my-8 py-3 lg:py-4 px-4 lg:px-5 rounded-2xl"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <!-- ===== LOGO ===== -->
      <img
        src="/public/Orga.png"
        alt="OrgaAfrica Logo"
        class="w-32 sm:w-40 lg:w-52 flex-shrink-0"
      />

      <!-- ===== NAVIGATION DESKTOP ===== -->
      <nav
        class="hidden lg:flex items-center gap-10 flex-1 justify-center"
        aria-label="Navigation principale"
      >
        <a
          v-for="link in navLinks"
          :key="link.text"
          :href="link.href"
          class="py-2 text-black text-base font-normal hover:border-t-2 hover:border-b-2 hover:border-black transition-all whitespace-nowrap"
        >
          {{ link.text }}
        </a>
      </nav>

      <!-- ===== ACTIONS DESKTOP ===== -->
      <div class="hidden lg:flex items-center gap-8 flex-shrink-0">
        <!-- Language Switcher Desktop -->
        <div class="relative">
          <button
            type="button"
            @click.stop="toggleLanguageMenu"
            class="text-black text-base font-medium cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
            aria-haspopup="listbox"
            :aria-expanded="isLanguageOpen"
          >
            {{ selectedLanguage }}
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ 'rotate-180': isLanguageOpen }"
              class="transition-transform duration-200"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <!-- Dropdown Desktop -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="isLanguageOpen"
              class="absolute right-0 mt-2 w-28 rounded-xl bg-[#6f6e6e] border border-white/10 shadow-lg py-2 z-10"
              role="listbox"
            >
              <button
                v-for="lang in languages"
                :key="lang"
                type="button"
                @click.stop="selectLanguage(lang)"
                class="w-full px-3 py-2 text-left text-white text-sm hover:bg-white/10 transition-colors"
                :class="lang === selectedLanguage ? 'font-semibold' : 'font-normal'"
                role="option"
                :aria-selected="lang === selectedLanguage"
              >
                {{ lang }}
              </button>
            </div>
          </transition>
        </div>

        <!-- CTA Button Desktop -->
        <button
          class="bg-red-500 hover:bg-red-600 transition-colors text-white px-8 py-3.5 rounded-xl text-base font-medium whitespace-nowrap"
        >
          Demander une démo
        </button>
      </div>

      <!-- ===== HAMBURGER BUTTON MOBILE ===== -->
      <button
        type="button"
        @click.stop="toggleMobileMenu"
        class="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer"
        aria-label="Menu"
        :aria-expanded="isMobileOpen"
      >
        <span
          class="block h-[2px] bg-black rounded-full transition-all duration-300 ease-in-out"
          :class="isMobileOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-6'"
        />
        <span
          class="block h-[2px] bg-black rounded-full transition-all duration-300 ease-in-out"
          :class="isMobileOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'"
        />
        <span
          class="block h-[2px] bg-black rounded-full transition-all duration-300 ease-in-out"
          :class="isMobileOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-6'"
        />
      </button>
    </div>

    <!-- ===== MENU MOBILE ===== -->
    <div
      @click.stop
      class="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
      :class="isMobileOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'"
    >
      <!-- Separator -->
      <div class="border-t border-gray-200 mb-3" />

      <!-- Navigation Links Mobile -->
      <nav class="flex flex-col gap-1" aria-label="Navigation mobile">
        <a
          v-for="link in navLinks"
          :key="link.text"
          :href="link.href"
          @click="closeMobileMenu"
          class="text-black text-base font-normal px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {{ link.text }}
        </a>
      </nav>

      <!-- Separator -->
      <div class="border-t border-gray-200 my-3" />

      <!-- Actions Mobile (Language + CTA) -->
      <div class="flex items-center justify-between px-3 pb-2">
        <!-- Language Switcher Mobile -->
        <div class="relative">
          <button
            type="button"
            @click.stop="toggleLanguageMenu"
            class="text-black text-base font-medium cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
            aria-haspopup="listbox"
            :aria-expanded="isLanguageOpen"
          >
            {{ selectedLanguage }}
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ 'rotate-180': isLanguageOpen }"
              class="transition-transform duration-200"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <!-- Dropdown Mobile (opens upward) -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="isLanguageOpen"
              class="absolute bottom-full left-0 mb-2 w-28 rounded-xl bg-white border border-gray-200 shadow-lg py-2 z-10"
              role="listbox"
            >
              <button
                v-for="lang in languages"
                :key="lang"
                type="button"
                @click.stop="selectLanguage(lang)"
                class="w-full px-3 py-2 text-left text-black text-sm hover:bg-gray-100 transition-colors"
                :class="lang === selectedLanguage ? 'font-semibold' : 'font-normal'"
                role="option"
                :aria-selected="lang === selectedLanguage"
              >
                {{ lang }}
              </button>
            </div>
          </transition>
        </div>

        <!-- CTA Button Mobile -->
        <button
          @click="closeMobileMenu"
          class="bg-red-500 hover:bg-red-600 transition-colors text-white px-5 py-2.5 rounded-xl text-sm font-medium"
        >
          Demander une démo
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// =====================================================
// TYPES
// =====================================================
interface NavLink {
  text: string
  href: string
}

type Language = 'FR' | 'EN'

// =====================================================
// CONSTANTS
// =====================================================
const languages: readonly Language[] = ['FR', 'EN']

const navLinks: readonly NavLink[] = [
  { text: 'Accueil', href: '#' },
  { text: 'Nos services', href: '#' },
  { text: 'Solution', href: '#' },
  { text: 'Qui sommes nous ?', href: '#' },
]

// =====================================================
// STATE
// =====================================================
const selectedLanguage = ref<Language>('FR')
const isLanguageOpen = ref(false)
const isMobileOpen = ref(false)

// =====================================================
// METHODS
// =====================================================
const toggleLanguageMenu = () => {
  isLanguageOpen.value = !isLanguageOpen.value
}

const selectLanguage = (lang: Language) => {
  selectedLanguage.value = lang
  isLanguageOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
  // Fermer le menu langue quand on ouvre le menu mobile
  if (isMobileOpen.value) {
    isLanguageOpen.value = false
  }
}

const closeMobileMenu = () => {
  isMobileOpen.value = false
  isLanguageOpen.value = false
}

const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  // Fermer les menus si on clique en dehors de la navbar
  if (!target.closest('nav')) {
    isLanguageOpen.value = false
    isMobileOpen.value = false
  }
}

// =====================================================
// LIFECYCLE HOOKS
// =====================================================
onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Optionnel : Styles supplémentaires si nécessaire */
</style>

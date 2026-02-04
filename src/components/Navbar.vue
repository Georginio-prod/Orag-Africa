<template>
  <!-- Barre de progression de scroll - Améliorée pour mobile -->
  <div
    class="fixed top-0 left-0 w-full h-1 sm:h-1 z-[110] bg-gray-200/30"
    :style="{
      pointerEvents: 'none',
      touchAction: 'none',
    }"
  >
    <div
      class="h-full transition-all duration-150 ease-out"
      :style="{
        width: scrollProgress + '%',
        background: 'linear-gradient(to right, #ef4444, #ffffff, #ef4444)',
        boxShadow: '0 2px 8px rgba(239, 68, 68, 0.3)',
      }"
    ></div>
  </div>

  <nav
    class="bg-white mx-3 sm:mx-6 lg:mx-10 my-4 sm:my-6 lg:my-8 py-3 lg:py-4 px-4 lg:px-5 rounded-2xl relative z-50"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <!-- ===== LOGO ===== -->
      <img
        src="/public/Orga.png"
        alt="OrgaAfrica Logo"
        class="w-24 xs:w-28 sm:w-36 md:w-40 lg:w-52 object-contain"
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
                :class="
                  lang === selectedLanguage ? 'font-semibold' : 'font-normal'
                "
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
        class="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer z-50"
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
      :class="
        isMobileOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'
      "
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
                :class="
                  lang === selectedLanguage ? 'font-semibold' : 'font-normal'
                "
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
import { ref, onMounted, onBeforeUnmount } from "vue";

// =====================================================
// TYPES
// =====================================================
interface NavLink {
  text: string;
  href: string;
}

type Language = "FR" | "EN";

// =====================================================
// CONSTANTS
// =====================================================
const languages: readonly Language[] = ["FR", "EN"];

const navLinks: readonly NavLink[] = [
  { text: "Accueil", href: "#accueil" },
  { text: "Solution", href: "#solution" },
  { text: "Nos services", href: "#nos-services" },
  { text: "Qui sommes nous ?", href: "#qui-sommes-nous" },
];

// =====================================================
// STATE
// =====================================================
const selectedLanguage = ref<Language>("FR");
const isLanguageOpen = ref(false);
const isMobileOpen = ref(false);
const scrollProgress = ref(0);
let ticking = ref(false);

// =====================================================
// METHODS
// =====================================================
const toggleLanguageMenu = () => {
  isLanguageOpen.value = !isLanguageOpen.value;
};

const selectLanguage = (lang: Language) => {
  selectedLanguage.value = lang;
  isLanguageOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value;
  // Fermer le menu langue quand on ouvre le menu mobile
  if (isMobileOpen.value) {
    isLanguageOpen.value = false;
  }
};

const closeMobileMenu = () => {
  isMobileOpen.value = false;
  isLanguageOpen.value = false;
};

const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  // Fermer les menus si on clique en dehors de la navbar
  if (!target.closest("nav")) {
    isLanguageOpen.value = false;
    isMobileOpen.value = false;
  }
};

const updateScrollProgress = () => {
  if (!ticking.value) {
    window.requestAnimationFrame(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (docHeight > 0) {
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.value = Math.min(100, Math.max(0, scrollPercent));
      } else {
        scrollProgress.value = 0;
      }

      ticking.value = false;
    });

    ticking.value = true;
  }
};

// Gestion spécifique du scroll sur mobile
const handleTouchMove = () => {
  updateScrollProgress();
};

// =====================================================
// LIFECYCLE HOOKS
// =====================================================
onMounted(() => {
  window.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: true });

  // Calcul initial
  updateScrollProgress();

  // Recalcul lors du redimensionnement
  window.addEventListener("resize", updateScrollProgress, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", updateScrollProgress);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("resize", updateScrollProgress);
});
</script>

<style scoped>
/* Assurer que la barre de scroll est toujours visible sur mobile */
@media (max-width: 1024px) {
  /* Force le recalcul du scroll sur les appareils tactiles */
  html {
    -webkit-overflow-scrolling: touch;
  }
}
</style>

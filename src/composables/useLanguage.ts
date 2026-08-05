import { computed, ref } from "vue";

export type Language = "FR" | "EN";
export type LocaleKey = "fr" | "en";

const STORAGE_KEY = "orga-africa-lang";

function getInitialLanguage(): Language {
  if (typeof window !== "undefined") {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "FR" || saved === "EN") {
      return saved;
    }
  }
  return "FR";
}

// Singleton réactif partagé par toute l'application.
// Défini au niveau du module pour que chaque composant qui appelle
// useLanguage() lise et écrive la même source de vérité.
const currentLang = ref<Language>(getInitialLanguage());

// Clé bas-de-casse pratique pour indexer les dictionnaires ({ fr, en }).
const locale = computed<LocaleKey>(() =>
  currentLang.value === "EN" ? "en" : "fr"
);

export function useLanguage() {
  const setLanguage = (lang: Language) => {
    currentLang.value = lang;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  return { currentLang, locale, setLanguage };
}

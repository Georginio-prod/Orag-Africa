<script setup lang="ts">
import { ref } from "vue";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const formData = ref({
  fullName: "",
  email: "",
  companyName: "",
  message: "",
  acceptEmail: false,
});

const faqItems = ref<FAQItem[]>([
  {
    id: 1,
    question: "Qu'est ce que  Orga/Orga pro ?",
    answer:
      "Orga/Orga pro est une application mobile , une POS qui aide les commercant qu'il soit dans le formel ou  t'informel, à gérer de manière efficace  la clientèle et  la ventes",
    isOpen: false,
  },
  {
    id: 2,
    question: "Temps de réponse ?",
    answer:
      "Notre équipe répond généralement dans un délai de 24 à 48 heures ouvrables.",
    isOpen: false,
  },
  {
    id: 3,
    question: "Offrez vous un essai gratuit ?",
    answer:
      "Oui, nous offrons une période d'essai gratuite de 30 jours pour tous nos nouveaux utilisateurs.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Comment ça marche ?",
    answer:
      "Notre plateforme est simple à utiliser. Après inscription, vous pouvez commencer immédiatement à gérer votre activité.",
    isOpen: false,
  },
]);

const toggleFAQ = (id: number) => {
  faqItems.value = faqItems.value.map((item) => ({
    ...item,
    isOpen: item.id === id ? !item.isOpen : item.isOpen,
  }));
};

const handleSubmit = () => {
  console.log("Form submitted:", formData.value);
};
</script>

<template>
  <!-- Mini Navbar -->
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
    >
      <a href="/" class="flex items-center">
        <img
          src="/public/Orga.png"
          alt="OrgaAfrica Logo"
          class="w-32 sm:w-40 lg:w-48"
        />
      </a>
      <a
        href="/"
        class="text-gray-700 hover:text-red-600 font-medium flex items-center gap-2 transition-colors"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Retour à l'accueil
      </a>
    </div>
  </nav>

  <div class="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-10 left-10 w-32 h-32 border-4 border-orange-300 rotate-45"
      ></div>
      <div
        class="absolute top-40 right-20 w-24 h-24 bg-gray-400 rounded-full"
      ></div>
      <div
        class="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-gray-300"
      ></div>
      <div class="absolute top-1/2 right-1/3 w-28 h-28 bg-orange-300"></div>
      <div
        class="absolute bottom-32 right-10 w-36 h-36 border-4 border-orange-300 rotate-12"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="bg-black rounded-lg shadow-2xl overflow-hidden">
        <div class="px-6 py-12 sm:px-12 lg:px-16">
          <div class="text-center mb-12">
            <p class="text-sm text-gray-400 mb-2">Contactez nous</p>
            <h1
              class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Vous avez des questions ? Notre équipe est prête<br
                class="hidden sm:block"
              />à vous aider
            </h1>
            <p class="text-gray-300 text-lg">
              Contactez-nous par email, téléphone ou via le formulaire
              ci-dessous.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="fullName"
                      class="block text-sm font-medium text-white mb-2"
                    >
                      Nom Complet
                    </label>
                    <input
                      id="fullName"
                      v-model="formData.fullName"
                      type="text"
                      placeholder="Jonh DOE"
                      class="w-full px-4 py-3 bg-gray-800 text-white border-2 border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      placeholder="exemple@exemple.com"
                      class="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="companyName"
                    class="block text-sm font-medium text-white mb-2"
                  >
                    Nom de votre structure
                  </label>
                  <input
                    id="companyName"
                    v-model="formData.companyName"
                    type="text"
                    placeholder="Elite Burger"
                    class="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 transition-all placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="5"
                    placeholder="Message"
                    class="w-full px-4 py-3 bg-gray-800 text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-700 transition-all placeholder:text-gray-400"
                  ></textarea>
                </div>

                <div class="flex items-start">
                  <input
                    id="acceptEmail"
                    v-model="formData.acceptEmail"
                    type="checkbox"
                    class="mt-1 h-4 w-4 border-2 border-gray-400 rounded focus:ring-2 focus:ring-red-500 accent-red-500"
                  />
                  <label for="acceptEmail" class="ml-3 text-sm text-gray-300">
                    j'accepte recevoir le mail en retour
                  </label>
                </div>

                <button
                  type="submit"
                  class="w-full bg-red-600 text-white py-4 px-6 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium text-lg"
                >
                  Demander une démo
                </button>
              </form>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-white mb-6">
                Questions Fréquentes (FAQ)
              </h2>
              <div class="space-y-4">
                <div
                  v-for="item in faqItems"
                  :key="item.id"
                  class="border-2 rounded-lg overflow-hidden transition-all duration-200"
                  :class="item.isOpen ? 'border-red-400' : 'border-gray-700'"
                >
                  <button
                    @click="toggleFAQ(item.id)"
                    class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                  >
                    <span class="font-medium text-white">{{
                      item.question
                    }}</span>
                    <svg
                      class="w-6 h-6 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-45': item.isOpen }"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                  <div
                    v-if="item.isOpen"
                    class="px-6 py-4 bg-gray-900 border-t-2 border-gray-800"
                  >
                    <p class="text-gray-300 leading-relaxed">
                      {{ item.answer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t-2 border-gray-800 pt-12">
            <h2 class="text-2xl font-bold text-white mb-8">
              Vous pouvez nous contacter Via
            </h2>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg
                    class="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-white font-medium">mailorgaafrica@gmail.com</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg
                    class="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-white font-medium">
                    +228 98 89 87 77 / 90 00 01 10
                  </p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg
                    class="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-white font-medium">Localisation</p>
                  <p class="text-gray-400 text-sm">Agoé Avédji, Lomé TOGO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-900 border-t-2 border-gray-800 px-6 py-6 sm:px-12 lg:px-16"
        >
          <div
            class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <p class="text-sm text-gray-400">
              © 2026 OrgaAfrica. Tous droits réservés.
            </p>
            <div class="flex space-x-6">
              <a
                href="#"
                class="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium"
              >
                Instagram
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

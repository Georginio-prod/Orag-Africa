<template>
  <footer class="text-white bg-[#191919] overflow-hidden">
    <div class="w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-10 md:py-16">
      <div class="mb-8 md:mb-12">
        <!-- Desktop: Grid 4 colonnes | Mobile: Flex vertical -->
        <div class="hidden md:grid md:grid-cols-4 md:gap-12">
          <div>
            <h3 class="text-lg font-bold mb-4">OrgaAfrica</h3>
            <p class="text-white text-sm leading-relaxed">
              Le système d'exploitation des restaurants africains.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">Lien Utile</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="#accueil"
                  class="text-white hover:text-gray-400 transition-colors"
                  >Accueil</a
                >
              </li>
              <li>
                <a
                  href="#solution"
                  class="text-white hover:text-gray-400 transition-colors"
                  >Solution</a
                >
              </li>
              <li>
                <a
                  href="#nos-services"
                  class="text-white hover:text-gray-400 transition-colors"
                  >Nos Services</a
                >
              </li>
              <li>
                <a
                  href="#qui-sommes-nous"
                  class="text-white hover:text-gray-400 transition-colors"
                  >Qui somme nous</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-white hover:text-gray-400 transition-colors"
                  >Carrière</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">Legal</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-white hover:text-gray-400 transition-colors"
                  >Confidentialité</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-white hover:text-gray-400 transition-colors"
                  >Condition</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-white hover:text-gray-400 transition-colors"
                  >Cookies</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">Contacts</h3>
            <div class="space-y-3">
              <p
                class="text-white text-sm flex flex-col sm:flex-row gap-1 sm:gap-2"
              >
                <span class="block font-semibold text-white">Mail :</span>
                <a
                  href="mailto:mailorgafrica@gmail.com"
                  class="hover:text-gray-400 transition-colors break-all"
                >
                  mailorgafrica@gmail.com
                </a>
              </p>
              <p
                class="text-white text-sm flex flex-col sm:flex-row gap-1 sm:gap-2"
              >
                <span class="block font-semibold text-white">Tel :</span>
                <a
                  href="tel:+22896699696"
                  class="hover:text-gray-400 transition-colors"
                >
                  +228 96 69 96 96
                </a>
              </p>
            </div>
          </div>
        </div>

        <!-- Mobile Layout -->
        <div class="flex flex-col gap-8 md:hidden">
          <!-- OrgaAfrica -->
          <div>
            <h3 class="text-lg font-bold mb-4">OrgaAfrica</h3>
            <p class="text-white text-sm leading-relaxed">
              Le système d'exploitation des restaurants africains.
            </p>
          </div>

          <!-- Lien Utile & Legal en flex -->
          <div class="flex gap-8">
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-4">Lien Utile</h3>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#accueil"
                    class="text-white hover:text-gray-400 transition-colors text-sm"
                    >Accueil</a
                  >
                </li>
                <li>
                  <a
                    href="#solution"
                    class="text-white hover:text-gray-400 transition-colors text-sm"
                    >Solution</a
                  >
                </li>
                <li>
                  <a
                    href="#nos-services"
                    class="text-white hover:text-gray-400 transition-colors text-sm"
                    >Nos Services</a
                  >
                </li>
                <li>
                  <a
                    href="#qui-sommes-nous"
                    class="text-white hover:text-gray-400 transition-colors text-sm"
                    >Qui somme nous</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-gray-400 transition-colors text-sm"
                    >Carrière</a
                  >
                </li>
              </ul>
            </div>

            <div class="flex-1">
              <h3 class="text-lg font-bold mb-4">Legal</h3>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-gray-400 transition-colors text-sm"
                    >Confidentialité</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-gray-400 transition-colors text-sm"
                    >Condition</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-white hover:text-gray-400 transition-colors text-sm"
                    >Cookies</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Contacts -->
          <div>
            <h3 class="text-lg font-bold mb-4">Contacts</h3>
            <div class="space-y-3">
              <p class="text-white text-sm flex flex-col gap-1">
                <span class="block font-semibold text-white">Mail :</span>
                <a
                  href="mailto:mailorgafrica@gmail.com"
                  class="hover:text-gray-400 transition-colors break-all"
                >
                  mailorgafrica@gmail.com
                </a>
              </p>
              <p class="text-white text-sm flex flex-col gap-1">
                <span class="block font-semibold text-white">Tel :</span>
                <a
                  href="tel:+22896699696"
                  class="hover:text-gray-400 transition-colors"
                >
                  +228 96 69 96 96
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-white text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2026 OrgaAfrica. Tous droits réservés.
          </p>

          <div class="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <a
              href="#"
              class="text-white hover:text-gray-400 transition-colors font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="#"
              class="text-white hover:text-gray-400 transition-colors font-semibold"
            >
              Instagram
            </a>
            <a
              href="#"
              class="text-white hover:text-gray-400 transition-colors font-semibold"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

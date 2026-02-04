<script setup lang="ts">
import { ref } from 'vue'

interface Testimonial {
  id: number
  name: string
  username: string
  avatar: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Faisal Ahmed',
    username: '@faisalahmed',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: "Les files d'attente ont presque disparu. Les clients commandent plus vite et nous servons mieux.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Faisal Ahmed',
    username: '@faisalahmed',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: "Les files d'attente ont presque disparu. Les clients commandent plus vite et nous servons mieux. Les files d'attente ont presque disparu. Les clients commandent plus vite et nous servons mieux.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Faisal Ahmed',
    username: '@faisalahmed',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: "Les files d'attente ont presque disparu. Les clients commandent plus vite et nous servons mieux.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Faisal Ahmed',
    username: '@faisalahmed',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: "Les files d'attente ont presque disparu. Les clients commandent plus vite et nous servons mieux. Les files d'attente ont presque disparu. Les clients commandent plus vite et nous servons mieux.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Faisal Ahmed',
    username: '@faisalahmed',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: "Les files d'attente ont presque disparu. Les clients commandent plus vite et nous servons mieux.",
    rating: 4,
  },
  {
    id: 6,
    name: 'Faisal Ahmed',
    username: '@faisalahmed',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: "Les files d'attente ont presque disparu. Les clients commandent plus vite et nous servons mieux.",
    rating: 4,
  },
]

const currentIndex = ref(0)

const nextSlide = () => {
  if (currentIndex.value < testimonials.length - 3) {
    currentIndex.value++
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<template>
  <section class="bg-black text-white py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16">Témoignages</h2>

      <div class="relative">
        <div class="overflow-hidden">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }"
          >
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              class="bg-gradient-to-br from-red-950/40 to-red-900/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-red-900/30 hover:border-red-700/50 transition-all duration-300 hover:scale-105 flex-shrink-0"
            >
              <div class="flex items-center space-x-3 mb-3 sm:mb-4">
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-red-500/30"
                />
                <div>
                  <h3 class="font-semibold text-white text-sm sm:text-base">
                    {{ testimonial.name }}
                  </h3>
                  <p class="text-xs sm:text-sm text-gray-400">{{ testimonial.username }}</p>
                </div>
              </div>

              <p class="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                {{ testimonial.text }}
              </p>

              <div class="flex space-x-1">
                <svg
                  v-for="i in 5"
                  :key="i"
                  class="w-4 h-4 sm:w-5 sm:h-5"
                  :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-600'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center sm:justify-end space-x-4 mt-6 sm:mt-8">
          <button
            @click="prevSlide"
            :disabled="currentIndex === 0"
            class="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="nextSlide"
            :disabled="currentIndex >= testimonials.length - 3"
            class="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

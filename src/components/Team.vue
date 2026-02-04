<template>
  <section class="py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-white">
        L'Équipe
      </h2>

      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        <div v-for="member in teamMembers" :key="member.id" class="group relative">
          <div
            class="relative rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
            :class="{
              'bg-gradient-to-br from-gray-800 to-black': member.id === 1,
              'bg-gradient-to-br from-amber-200 to-amber-400': member.id === 2,
              'bg-gradient-to-br from-gray-700 to-gray-900': member.id === 3,
              'bg-gradient-to-br from-gray-400 to-gray-600': member.id === 4,
            }"
          >
            <div class="aspect-[3/4]">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover" />
            </div>

            <div
              v-if="member.id === 1"
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 text-center text-white"
            >
              <h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
              <p class="text-sm text-gray-300 mb-3">{{ member.role }}</p>

              <div
                v-if="member.linkedin || member.facebook || member.instagram"
                class="flex justify-center space-x-3"
              >
                <a
                  v-if="member.linkedin"
                  :href="member.linkedin"
                  class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </a>
                <a
                  v-if="member.facebook"
                  :href="member.facebook"
                  class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                    />
                  </svg>
                </a>
                <a
                  v-if="member.instagram"
                  :href="member.instagram"
                  class="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-colors"
                >
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  linkedin?: string
  facebook?: string
  instagram?: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Andrey TOGBE',
    role: 'UI/UX Designer',
    image:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: '#',
    facebook: '#',
    instagram: '#',
  },
  {
    id: 2,
    name: 'Jean KOUAME',
    role: 'Frontend Developer',
    image:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Michel DIOP',
    role: 'Backend Developer',
    image:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'David MENSAH',
    role: 'Product Manager',
    image:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]
</script>

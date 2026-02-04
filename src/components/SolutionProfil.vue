<script setup lang="ts">
interface ProfileSolution {
  title: string
  description: string
  inlineText: boolean
}

const profileSolutions: ProfileSolution[] = [
  {
    title: 'Pour les restaurants :',
    description: "Augmentez vos revenus, réduisez l'attente et reprenez le contrôle.",
    inlineText: true,
  },
  {
    title: 'Pour les vendeurs & commerçants informels :',
    description: 'Passez au digital sans matériel ni complexité.',
    inlineText: false,
  },
  {
    title: 'Pour les entreprises :',
    description: 'Offrez des avantages repas intelligents et maîtrisez les dépenses.',
    inlineText: false,
  },
]
</script>

<template>
  <div class="text-white py-16 px-8 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative">
      <h1 class="text-5xl font-bold mb-16">Solutions par profil</h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center z-10">
        <div class="bg-[#FC0A02] rounded-4xl">
          <img src="/public/Rectangle 4221.png" alt="" class="w-full h-full object-cover" />
        </div>

        <div class="space-y-6 z-10">
          <div
            v-for="profile in profileSolutions"
            :key="profile.title"
            class="bg-black border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all"
          >
            <div class="flex items-start gap-4">
              <div v-if="profile.inlineText">
                <div class="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">
                  <img src="/public/award.png" alt="" />
                </div>
              </div>
              <div v-else class="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">
                <img src="/public/award.png" alt="" />
              </div>

              <div v-if="profile.inlineText">
                <h3 class="text-xl font-bold mb-2">{{ profile.title }}</h3>
                <p class="text-base leading-relaxed">{{ profile.description }}</p>
              </div>
              <div v-if="!profile.inlineText">
                <h3 class="text-xl font-bold mb-2">{{ profile.title }}</h3>
                <p class="leading-relaxed">{{ profile.description }}</p>
              </div>
            </div>
          </div>

          <button
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-colors text-lg shadow-lg shadow-red-900/50"
          >
            Télécharger
          </button>
        </div>
      </div>
      <img
        src="/public/Group 2.png"
        alt=""
        class="absolute right-0 top-1/2 translate-y-1/4 translate-x-4/4 z-0 max-w-[16%]"
      />
    </div>
  </div>
</template>

<style scoped></style>

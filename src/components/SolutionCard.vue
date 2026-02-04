<script setup lang="ts">
interface SolutionCardProps {
  title: string
  description: string
}

defineProps<SolutionCardProps>()
</script>

<template>
  <div
    class="bg-black rounded-xl p-4 sm:p-6 border border-zinc-800 transition-all w-full max-w-full sm:max-w-[350px]"
  >
    <div class="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
      <img
        src="/gg_check-o.png"
        alt="check"
        class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-1"
      />
      <h3 class="text-sm sm:text-base font-semibold text-white">
        {{ title }}
      </h3>
    </div>
    <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

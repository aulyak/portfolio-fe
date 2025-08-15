<template>
  <Transition
    name="loading"
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isLoading" 
      class="fixed top-0 left-0 w-full h-1 z-50 bg-gradient-to-r from-blue-500 to-purple-500"
    >
      <div class="h-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  isLoading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false
})
</script>

<style scoped>
/* Custom loading animation */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-pulse {
  animation: shimmer 1.5s ease-in-out infinite;
}
</style>

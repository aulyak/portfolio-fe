<template>
  <div class="layout-default min-h-screen transition-opacity duration-200" :class="{ 'opacity-100': isReady, 'opacity-0': !isReady }">
    <LoadingIndicator :isLoading="isTransitioning" />
    <slot />
  </div>
</template>

<script setup lang="ts">
const isReady = ref(false)
const isTransitioning = ref(false)
const route = useRoute()

// Handle page readiness
onMounted(() => {
  // Minimal delay to prevent FOUC
  nextTick(() => {
    isReady.value = true
  })
})

// Handle route transitions
watch(() => route.path, () => {
  isTransitioning.value = true
  
  // Hide loading indicator after transition
  setTimeout(() => {
    isTransitioning.value = false
  }, 400) // Match transition duration
})
</script>

<style scoped>
.layout-default {
  position: relative;
  overflow-x: hidden; /* Prevent horizontal scroll during transitions */
}
</style>

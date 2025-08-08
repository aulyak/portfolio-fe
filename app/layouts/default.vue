<template>
  <div class="min-h-screen transition-opacity duration-200" :class="{ 'opacity-100': isReady, 'opacity-0': !isReady }">
    <slot />
  </div>
</template>

<script setup>
const isReady = ref(false)

onMounted(() => {
  // Minimal delay to prevent FOUC
  nextTick(() => {
    isReady.value = true
  })
})
</script>

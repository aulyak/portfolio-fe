<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-gray-900 dark:to-gray-800">
    <UContainer>
      <div class="max-w-md mx-auto bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-10 text-center">
        <UIcon name="i-heroicons-wrench-screwdriver" class="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Under Construction</h1>
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">This page is currently being built. Please check back soon for updates!</p>
        <UButton to="/" color="primary" variant="solid">Back to Home</UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Under Construction',
  description: 'This page is currently being built. Please check back soon for updates!'
})

definePageMeta({
  title: 'Under Construction'
})
</script>

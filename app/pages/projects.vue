<!-- <template>
  <div class="min-h-screen flex items-center justify-center">
    <UContainer>
      <div class="text-center">
        <UHeading size="2xl" class="mb-4">My Projects</UHeading>
        <p class="text-gray-600 dark:text-gray-300 mb-8">Explore my portfolio of creative and technical work.</p>
        <UButton to="/" variant="outline">Back to Home</UButton>
      </div>
    </UContainer>
  </div>
</template> -->

<template>
  <UnderConstruction />
</template>

<script setup>
// useSeoMeta({
//   title: 'My Projects',
//   description: 'Explore my portfolio of creative and technical work.',
// });

definePageMeta({
  title: 'Projects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  }
});

import UnderConstruction from '@/components/under-construction.vue';
</script>

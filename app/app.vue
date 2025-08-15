<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
// Add meta for better loading
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [{charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width, initial-scale=1'}, {name: 'theme-color', content: '#667eea'}],
  link: [{rel: 'icon', type: 'image/png', href: '/programmer.png'}],
});

// Handle route changes for smooth transitions
const route = useRoute();
const {handleScrollOnTransition} = usePageTransitions();

// Scroll to top on route change for better UX
watch(
  () => route.path,
  () => {
    handleScrollOnTransition();
  },
);
</script>

<style>
/* Ensure critical styles are always applied */
html {
  scroll-behavior: smooth;
}

body {
  font-feature-settings: 'kern' 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Improve transition performance */
* {
  backface-visibility: hidden;
}

/* Ensure layouts don't interfere with transitions */
.layout-default {
  min-height: 100vh;
  position: relative;
}
</style>

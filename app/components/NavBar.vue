<template>
  <nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50 dark:bg-gray-800/90 dark:border-gray-700/50">
    <div class="flex items-center gap-6">
      <NuxtLink 
        to="/" 
        class="text-sm font-medium transition-colors hover:text-blue-600"
        :class="{ 'text-blue-600': $route.path === '/' }"
        @mouseenter="preloadRoute('/')"
      >
        Home
      </NuxtLink>
      <NuxtLink 
        to="/about" 
        class="text-sm font-medium transition-colors hover:text-blue-600"
        :class="{ 'text-blue-600': $route.path === '/about' }"
        @mouseenter="preloadRoute('/about')"
      >
        About
      </NuxtLink>
      <NuxtLink 
        to="/projects" 
        class="text-sm font-medium transition-colors hover:text-blue-600"
        :class="{ 'text-blue-600': $route.path === '/projects' }"
        @mouseenter="preloadRoute('/projects')"
      >
        Projects
      </NuxtLink>
      <NuxtLink 
        to="/contact" 
        class="text-sm font-medium transition-colors hover:text-blue-600"
        :class="{ 'text-blue-600': $route.path === '/contact' }"
        @mouseenter="preloadRoute('/contact')"
      >
        Contact
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { preloadRoute } = usePageTransitions()
</script>

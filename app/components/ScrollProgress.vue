<template>
  <div class="scroll-progress-container">
    <!-- Scroll Progress Bar -->
    <div 
      class="scroll-progress-bar fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 transition-all duration-300"
      :style="{ width: scrollProgress + '%' }"
    ></div>
    
    <!-- Section Indicators -->
    <div class="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      <div 
        v-for="section in sections" 
        :key="section.id"
        class="section-indicator w-3 h-3 rounded-full border-2 border-white/30 cursor-pointer transition-all duration-300 hover:scale-125"
        :class="{ 
          'bg-white scale-125 border-white': activeSection === section.id,
          'bg-transparent': activeSection !== section.id 
        }"
        @click="scrollToSection(section.id)"
        :title="section.name"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  activeSection: string
  scrollToSection: (id: string) => void
}

const props = defineProps<Props>()

const scrollProgress = ref(0)

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'expertise', name: 'Expertise' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' }
]

onMounted(() => {
  const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (scrollTop / docHeight) * 100
    scrollProgress.value = Math.min(Math.max(progress, 0), 100)
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollProgress)
  })
})
</script>

<style scoped>
.scroll-progress-bar {
  box-shadow: 0 2px 10px rgba(59, 130, 246, 0.3);
}

.section-indicator {
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.section-indicator:hover {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}
</style>

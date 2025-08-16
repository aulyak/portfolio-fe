<template>
  <section id="projects" class="section min-h-screen flex items-center relative overflow-hidden">
    <!-- Cyberpunk background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-cyan-900">
      <div class="cyber-grid opacity-40"></div>
    </div>
    
    <UContainer class="relative z-10">
      <div class="section-content py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <!-- Glitch title -->
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 glitch-text" data-text="[PROJECTS]">
            [PROJECTS]
          </h2>
          <div class="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p class="text-gray-300 font-mono text-sm sm:text-base">&gt; showcasing_digital_craftsmanship.exe</p>
        </div>

        <!-- Project Categories Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          <!-- Web Applications Category -->
          <div class="cyber-project-card group">
            <div class="cyber-project-header">
              <div class="flex items-center justify-between mb-3 sm:mb-4">
                <UIcon name="i-heroicons-folder" class="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                <UIcon name="i-simple-icons-github" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white font-mono mb-2">WEB_APPLICATION</h3>
              <p class="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">Modern, responsive web applications built with cutting-edge technologies</p>
            </div>
            <div class="cyber-project-content">
              <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span class="tech-tag text-xs sm:text-sm">Vue.js</span>
                <span class="tech-tag text-xs sm:text-sm">Nuxt.js</span>
                <span class="tech-tag text-xs sm:text-sm">TypeScript</span>
              </div>
              <div class="cyber-project-links">
                <button class="cyber-link text-sm sm:text-base py-2 sm:py-3" @click="toggleCategory('web-applications')">
                  EXPLORE_{.}_
                  <UIcon 
                    name="i-heroicons-chevron-down" 
                    class="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Backend APIs Category -->
          <div class="cyber-project-card group">
            <div class="cyber-project-header">
              <div class="flex items-center justify-between mb-3 sm:mb-4">
                <UIcon name="i-heroicons-folder" class="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                <UIcon name="i-simple-icons-github" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white font-mono mb-2">BACKEND_API</h3>
              <p class="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">Scalable backend solutions and RESTful APIs for robust applications</p>
            </div>
            <div class="cyber-project-content">
              <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span class="tech-tag text-xs sm:text-sm">Node.js</span>
                <span class="tech-tag text-xs sm:text-sm">Express</span>
                <span class="tech-tag text-xs sm:text-sm">PostgreSQL</span>
              </div>
              <div class="cyber-project-links">
                <button class="cyber-link text-sm sm:text-base py-2 sm:py-3" @click="toggleCategory('backend-apis')">
                  EXPLORE_{.}_
                  <UIcon 
                    name="i-heroicons-chevron-down" 
                    class="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Blog Category -->
          <div class="cyber-project-card group">
            <div class="cyber-project-header">
              <div class="flex items-center justify-between mb-3 sm:mb-4">
                <UIcon name="i-heroicons-folder" class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <UIcon name="i-simple-icons-github" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white font-mono mb-2">BLOG</h3>
              <p class="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">Technical articles and insights from development experiences</p>
            </div>
            <div class="cyber-project-content">
              <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span class="tech-tag text-xs sm:text-sm">Writing</span>
                <span class="tech-tag text-xs sm:text-sm">Tech</span>
                <span class="tech-tag text-xs sm:text-sm">Insights</span>
              </div>
              <div class="cyber-project-links">
                <button class="cyber-link text-sm sm:text-base py-2 sm:py-3" @click="toggleCategory('blog')">
                  EXPLORE_{.}_
                  <UIcon 
                    name="i-heroicons-chevron-down" 
                    class="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <!-- Project Modal Component -->
    <ProjectModal 
      :expandedCategory="expandedCategory" 
      @close="closeCategory"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// State for expanded category
const expandedCategory = ref<string | null>(null)

// Store the original scroll position
let scrollPosition = 0

// Methods for handling category expansion
const toggleCategory = (category: string) => {
  // Save current scroll position and lock body
  scrollPosition = window.pageYOffset
  expandedCategory.value = category
  
  // Lock scroll when modal opens
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollPosition}px`
  document.body.style.width = '100%'
  document.body.classList.add('modal-open')
}

const closeCategory = () => {
  expandedCategory.value = null
  
  // Restore scroll position and unlock body
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  document.body.classList.remove('modal-open')
  window.scrollTo(0, scrollPosition)
}

// Handle escape key to close modal
onMounted(() => {
  console.log('ProjectsSection mounted successfully!')
  
  // Emit to parent that component is ready for navigation tracking
  setTimeout(() => {
    console.log('ProjectsSection ready for navigation tracking')
  }, 100)
  
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && expandedCategory.value) {
      closeCategory()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
    // Ensure body is unlocked when component unmounts
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.classList.remove('modal-open')
  })
})
</script>

<style scoped>
/* Cyberpunk Grid Background */
.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-flow 20s linear infinite;
}

@keyframes grid-flow {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Glitch text effect */
.glitch-text {
  position: relative;
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
               -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
               0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  animation: glitch 2s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  animation: glitch-1 0.5s infinite;
  color: rgba(255, 0, 0, 0.75);
  z-index: -1;
}

.glitch-text::after {
  animation: glitch-2 0.5s infinite;
  color: rgba(0, 0, 255, 0.75);
  z-index: -2;
}

@keyframes glitch {
  0%, 90%, 100% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                 -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                 0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  5% {
    text-shadow: 0.025em 0 0 rgba(255, 0, 0, 0.75),
                 -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                 0.05em 0.025em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.025em -0.05em 0 rgba(255, 0, 0, 0.75),
                 0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                 -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
}

@keyframes glitch-1 {
  0%, 90%, 100% {
    transform: none;
  }
  10% {
    transform: translate(-2px, -2px);
  }
  20% {
    transform: translate(2px, 2px);
  }
  30% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  50% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  70% {
    transform: translate(-2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
}

@keyframes glitch-2 {
  0%, 90%, 100% {
    transform: none;
  }
  5% {
    transform: translate(2px, 2px);
  }
  15% {
    transform: translate(-2px, -2px);
  }
  25% {
    transform: translate(2px, -2px);
  }
  35% {
    transform: translate(-2px, 2px);
  }
  45% {
    transform: translate(2px, 2px);
  }
  55% {
    transform: translate(-2px, -2px);
  }
  65% {
    transform: translate(2px, -2px);
  }
  75% {
    transform: translate(-2px, 2px);
  }
  85% {
    transform: translate(2px, 2px);
  }
}
</style>

<style scoped>
/* Cyberpunk Grid Background */
.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-flow 20s linear infinite;
}

@keyframes grid-flow {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Glitch Text Effect */
.glitch-text {
  position: relative;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #00ffff;
  text-shadow: 
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 40px #00ffff;
  animation: glitch 2s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  animation: glitch-top 1s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

.glitch-text::after {
  animation: glitch-bottom 1.5s infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitch {
  0%, 100% {
    text-shadow: 
      0.05em 0 0 #ff00ff, 
      -0.05em -0.025em 0 #00ffff,
      0.025em 0.05em 0 #ffff00;
  }
  15% {
    text-shadow: 
      0.05em 0 0 #ff00ff, 
      -0.05em -0.025em 0 #00ffff,
      0.025em 0.05em 0 #ffff00;
  }
  16% {
    text-shadow: 
      -0.05em -0.025em 0 #ff00ff, 
      0.025em 0.025em 0 #00ffff,
      -0.05em -0.05em 0 #ffff00;
  }
  49% {
    text-shadow: 
      -0.05em -0.025em 0 #ff00ff, 
      0.025em 0.025em 0 #00ffff,
      -0.05em -0.05em 0 #ffff00;
  }
  50% {
    text-shadow: 
      0.025em 0.05em 0 #ff00ff, 
      0.05em 0 0 #00ffff,
      0 -0.05em 0 #ffff00;
  }
  99% {
    text-shadow: 
      0.025em 0.05em 0 #ff00ff, 
      0.05em 0 0 #00ffff,
      0 -0.05em 0 #ffff00;
  }
}

@keyframes glitch-top {
  0%, 100% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
}

@keyframes glitch-bottom {
  0%, 100% {
    transform: translate(0);
  }
  20% {
    transform: translate(2px, 2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-2px, 2px);
  }
  80% {
    transform: translate(-2px, -2px);
  }
}

/* Section Content */
.section-content {
  position: relative;
  z-index: 10;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .glitch-text {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
}
</style>

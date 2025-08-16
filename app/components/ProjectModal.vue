<template>
  <!-- Project Modal Popup -->
  <transition name="modal-fade">
    <div v-if="expandedCategory" class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/80 backdrop-blur-sm"
        @click="$emit('close')"
        @wheel.prevent
        @touchmove.prevent
      ></div>
      
      <!-- Modal Content -->
      <div class="relative w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden mx-2 sm:mx-4">
        <!-- Terminal-style project browser -->
        <div class="cyber-terminal-window">
          <div class="cyber-terminal-header">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2 sm:space-x-4">
                <div class="flex space-x-1 sm:space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span class="font-mono text-cyan-400 text-xs sm:text-sm truncate max-w-[150px] sm:max-w-none">
                  ~/projects/{{ expandedCategory }}/
                </span>
              </div>
              <button 
                @click="$emit('close')"
                class="text-gray-400 hover:text-white transition-colors duration-200 p-1"
                aria-label="Close terminal"
              >
                <UIcon name="i-heroicons-x-mark" class="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
          
          <div class="cyber-terminal-content bg-black/90 text-green-400 p-3 sm:p-6 font-mono text-xs sm:text-sm overflow-auto max-h-[75vh] sm:max-h-[70vh] min-h-[300px]">
            <!-- Terminal content -->
            <div class="space-y-3 sm:space-y-4 min-w-max">
              <!-- Terminal prompt and title -->
              <div class="flex items-center space-x-2 whitespace-nowrap">
                <span class="text-cyan-400">root@portfolio:</span>
                <span class="text-white">~/projects/{{ expandedCategory }}</span>
                <span class="text-cyan-400">$</span>
                <span class="text-yellow-400">ls -la</span>
              </div>
              
              <!-- Under construction message -->
              <div class="bg-yellow-900/20 border border-yellow-500/30 rounded p-3 sm:p-4 my-3 sm:my-4 min-w-0">
                <div class="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <UIcon name="i-heroicons-exclamation-triangle" class="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                  <span class="text-yellow-400 font-bold text-sm sm:text-base">UNDER CONSTRUCTION</span>
                </div>
                <p class="text-gray-300 mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                  This section is currently being developed. Check back soon for exciting updates!
                </p>
                <div class="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div class="bg-gradient-to-r from-cyan-400 to-purple-500 h-1.5 sm:h-2 rounded-full animate-pulse" style="width: 65%"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Progress: 65%</span>
                  <span>ETA: Soon™</span>
                </div>
              </div>
              
              <!-- Mock directory listing -->
              <div class="space-y-1 overflow-x-auto">
                <div class="text-gray-500 text-xs sm:text-sm">total 42</div>
                <div class="flex space-x-3 sm:space-x-4 whitespace-nowrap min-w-max">
                  <span class="text-blue-400 w-20 sm:w-24 flex-shrink-0">drwxr-xr-x</span>
                  <span class="text-gray-400 w-16 sm:w-20 flex-shrink-0">2 dev dev</span>
                  <span class="text-gray-400 w-10 sm:w-12 flex-shrink-0">4096</span>
                  <span class="text-gray-400 w-24 sm:w-28 flex-shrink-0">{{ getCurrentDate() }}</span>
                  <span class="text-cyan-400 ml-4 sm:ml-6">.</span>
                </div>
                <div class="flex space-x-3 sm:space-x-4 whitespace-nowrap min-w-max">
                  <span class="text-blue-400 w-20 sm:w-24 flex-shrink-0">drwxr-xr-x</span>
                  <span class="text-gray-400 w-16 sm:w-20 flex-shrink-0">2 dev dev</span>
                  <span class="text-gray-400 w-10 sm:w-12 flex-shrink-0">4096</span>
                  <span class="text-gray-400 w-24 sm:w-28 flex-shrink-0">{{ getCurrentDate() }}</span>
                  <span class="text-cyan-400 ml-4 sm:ml-6">..</span>
                </div>
                <div class="flex space-x-3 sm:space-x-4 whitespace-nowrap min-w-max">
                  <span class="text-green-400 w-20 sm:w-24 flex-shrink-0">-rw-r--r--</span>
                  <span class="text-gray-400 w-16 sm:w-20 flex-shrink-0">1 dev dev</span>
                  <span class="text-gray-400 w-10 sm:w-12 flex-shrink-0">1337</span>
                  <span class="text-gray-400 w-24 sm:w-28 flex-shrink-0">{{ getCurrentDate() }}</span>
                  <span class="text-white ml-4 sm:ml-6">README.md</span>
                </div>
                <div class="flex space-x-3 sm:space-x-4 whitespace-nowrap min-w-max">
                  <span class="text-yellow-400 w-20 sm:w-24 flex-shrink-0">-rw-r--r--</span>
                  <span class="text-gray-400 w-16 sm:w-20 flex-shrink-0">1 dev dev</span>
                  <span class="text-gray-400 w-10 sm:w-12 flex-shrink-0">2048</span>
                  <span class="text-gray-400 w-24 sm:w-28 flex-shrink-0">{{ getCurrentDate() }}</span>
                  <span class="text-purple-400 ml-4 sm:ml-6">package.json</span>
                </div>
                <div class="flex space-x-3 sm:space-x-4 whitespace-nowrap min-w-max">
                  <span class="text-blue-400 w-20 sm:w-24 flex-shrink-0">drwxr-xr-x</span>
                  <span class="text-gray-400 w-16 sm:w-20 flex-shrink-0">3 dev dev</span>
                  <span class="text-gray-400 w-10 sm:w-12 flex-shrink-0">4096</span>
                  <span class="text-gray-400 w-24 sm:w-28 flex-shrink-0">{{ getCurrentDate() }}</span>
                  <span class="text-cyan-400 ml-4 sm:ml-6">src/</span>
                </div>
                <div class="flex space-x-3 sm:space-x-4 whitespace-nowrap min-w-max">
                  <span class="text-red-400 w-20 sm:w-24 flex-shrink-0">-rwx------</span>
                  <span class="text-gray-400 w-16 sm:w-20 flex-shrink-0">1 dev dev</span>
                  <span class="text-gray-400 w-10 sm:w-12 flex-shrink-0">8192</span>
                  <span class="text-gray-400 w-24 sm:w-28 flex-shrink-0">{{ getCurrentDate() }}</span>
                  <span class="text-red-400 ml-4 sm:ml-6">build.sh</span>
                </div>
              </div>
              
              <!-- Cursor -->
              <div class="flex items-center space-x-2 mt-4">
                <span class="text-cyan-400">root@portfolio:</span>
                <span class="text-white">~/projects/{{ expandedCategory }}</span>
                <span class="text-cyan-400">$</span>
                <span class="animate-pulse">█</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
interface Props {
  expandedCategory: string | null
}

interface Emits {
  (e: 'close'): void
}

defineProps<Props>()
defineEmits<Emits>()

// Helper function to get current date
const getCurrentDate = () => {
  return new Date().toLocaleDateString('en-US', { 
    month: 'short', 
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
/* Modal transition effects */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

/* Terminal window styling */
.cyber-terminal-window {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  border: 2px solid #00ffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.3),
    0 0 60px rgba(0, 255, 255, 0.1),
    inset 0 0 30px rgba(0, 255, 255, 0.05);
  transform: translateZ(0);
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cyber-terminal-header {
  background: linear-gradient(90deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
  padding: 12px 20px;
  border-bottom: 1px solid #00ffff;
  position: relative;
}

.cyber-terminal-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #00ffff 50%, transparent 100%);
}

.cyber-terminal-content {
  min-height: 400px;
  scrollbar-width: thin;
  scrollbar-color: #00ffff #1a1a2e;
}

.cyber-terminal-content::-webkit-scrollbar {
  width: 8px;
}

.cyber-terminal-content::-webkit-scrollbar-track {
  background: #1a1a2e;
}

.cyber-terminal-content::-webkit-scrollbar-thumb {
  background: #00ffff;
  border-radius: 4px;
}

.cyber-terminal-content::-webkit-scrollbar-thumb:hover {
  background: #ff00ff;
}
</style>

<template>
  <!-- Project Modal Popup -->
  <transition name="modal-fade">
    <div v-if="expandedCategory" class="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/80 backdrop-blur-sm"
        @click="$emit('close')"
        @wheel.prevent
        @touchmove.prevent
      ></div>
      
      <!-- Modal Content -->
      <div class="relative w-full max-w-6xl max-h-[95vh] overflow-hidden">
        <!-- Terminal-style project browser -->
        <div class="cyber-terminal-window">
          <div class="cyber-terminal-header">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="flex space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span class="font-mono text-cyan-400 text-sm">
                  ~/projects/{{ expandedCategory }}/
                </span>
              </div>
              <button 
                @click="$emit('close')"
                class="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close terminal"
              >
                <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div class="cyber-terminal-content bg-black/90 text-green-400 p-6 font-mono text-sm overflow-y-auto max-h-[75vh]">
            <!-- Terminal content -->
            <div class="space-y-4">
              <!-- Terminal prompt and title -->
              <div class="flex items-center space-x-2">
                <span class="text-cyan-400">root@portfolio:</span>
                <span class="text-white">~/projects/{{ expandedCategory }}</span>
                <span class="text-cyan-400">$</span>
                <span class="text-yellow-400">ls -la</span>
              </div>
              
              <!-- Under construction message -->
              <div class="bg-yellow-900/20 border border-yellow-500/30 rounded p-4 my-4">
                <div class="flex items-center space-x-3 mb-3">
                  <UIcon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-yellow-400" />
                  <span class="text-yellow-400 font-bold">UNDER CONSTRUCTION</span>
                </div>
                <p class="text-gray-300 mb-3">
                  This section is currently being developed. Check back soon for exciting updates!
                </p>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full animate-pulse" style="width: 65%"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Progress: 65%</span>
                  <span>ETA: Soon™</span>
                </div>
              </div>
              
              <!-- Mock directory listing -->
              <div class="space-y-1">
                <div class="text-gray-500">total 42</div>
                <div class="flex space-x-4">
                  <span class="text-blue-400">drwxr-xr-x</span>
                  <span class="text-gray-400">2 dev dev 4096</span>
                  <span class="text-gray-400">{{ getCurrentDate() }}</span>
                  <span class="text-cyan-400">.</span>
                </div>
                <div class="flex space-x-4">
                  <span class="text-blue-400">drwxr-xr-x</span>
                  <span class="text-gray-400">2 dev dev 4096</span>
                  <span class="text-gray-400">{{ getCurrentDate() }}</span>
                  <span class="text-cyan-400">..</span>
                </div>
                <div class="flex space-x-4">
                  <span class="text-green-400">-rw-r--r--</span>
                  <span class="text-gray-400">1 dev dev 1337</span>
                  <span class="text-gray-400">{{ getCurrentDate() }}</span>
                  <span class="text-white">README.md</span>
                </div>
                <div class="flex space-x-4">
                  <span class="text-yellow-400">-rw-r--r--</span>
                  <span class="text-gray-400">1 dev dev 2048</span>
                  <span class="text-gray-400">{{ getCurrentDate() }}</span>
                  <span class="text-purple-400">package.json</span>
                </div>
                <div class="flex space-x-4">
                  <span class="text-blue-400">drwxr-xr-x</span>
                  <span class="text-gray-400">3 dev dev 4096</span>
                  <span class="text-gray-400">{{ getCurrentDate() }}</span>
                  <span class="text-cyan-400">src/</span>
                </div>
                <div class="flex space-x-4">
                  <span class="text-red-400">-rwx------</span>
                  <span class="text-gray-400">1 dev dev 8192</span>
                  <span class="text-gray-400">{{ getCurrentDate() }}</span>
                  <span class="text-red-400">build.sh</span>
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

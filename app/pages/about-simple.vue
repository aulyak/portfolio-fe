<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <h2 class="text-xl md:text-2xl mb-6 opacity-90">Full Stack Developer & Creative Problem Solver</h2>
            <p class="text-lg opacity-80 mb-8 leading-relaxed">
              I'm passionate about crafting exceptional digital experiences through clean code, 
              innovative design, and user-centered thinking. With expertise spanning both frontend 
              and backend development, I bring ideas to life with modern technologies.
            </p>
            <div class="flex gap-4">
              <a href="/contact" class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get In Touch
              </a>
              <a href="/projects" class="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View My Work
              </a>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative">
              <div class="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div class="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                  <span class="text-6xl">👨‍💻</span>
                </div>
              </div>
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span class="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and digital solutions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <span class="text-2xl">💻</span>
              </div>
              <h3 class="text-xl font-semibold">Frontend Development</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Vue.js</span>
              <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Nuxt.js</span>
              <span class="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">React</span>
              <span class="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">TypeScript</span>
              <span class="bg-cyan-100 text-cyan-800 text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <span class="text-2xl">🔧</span>
              </div>
              <h3 class="text-xl font-semibold">Backend Development</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Node.js</span>
              <span class="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Express.js</span>
              <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">PostgreSQL</span>
              <span class="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">MongoDB</span>
              <span class="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Redis</span>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <span class="text-2xl">☁️</span>
              </div>
              <h3 class="text-xl font-semibold">DevOps & Tools</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Docker</span>
              <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">AWS</span>
              <span class="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Git</span>
              <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">CI/CD</span>
              <span class="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Professional Journey</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My career highlights and key milestones in software development.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-4 h-4 bg-blue-600 rounded-full"></div>
                <div class="w-px h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
              </div>
              <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex-1">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h3 class="text-xl font-semibold">Senior Full Stack Developer</h3>
                    <p class="text-gray-600 dark:text-gray-400">Tech Company Inc.</p>
                  </div>
                  <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">2022 - Present</span>
                </div>
                <p class="text-gray-700 dark:text-gray-300">
                  Leading development of scalable web applications using Vue.js, Node.js, and cloud technologies. 
                  Mentoring junior developers and establishing best practices for code quality and deployment.
                </p>
              </div>
            </div>

            <div class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-4 h-4 bg-green-600 rounded-full"></div>
                <div class="w-px h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
              </div>
              <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex-1">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h3 class="text-xl font-semibold">Full Stack Developer</h3>
                    <p class="text-gray-600 dark:text-gray-400">Startup Solutions</p>
                  </div>
                  <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">2020 - 2022</span>
                </div>
                <p class="text-gray-700 dark:text-gray-300">
                  Developed and maintained multiple client projects using React, Express.js, and PostgreSQL. 
                  Collaborated with design teams to create responsive and user-friendly interfaces.
                </p>
              </div>
            </div>

            <div class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-4 h-4 bg-purple-600 rounded-full"></div>
              </div>
              <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg flex-1">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h3 class="text-xl font-semibold">Frontend Developer</h3>
                    <p class="text-gray-600 dark:text-gray-400">Digital Agency</p>
                  </div>
                  <span class="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">2018 - 2020</span>
                </div>
                <p class="text-gray-700 dark:text-gray-300">
                  Built interactive web applications and landing pages using modern JavaScript frameworks. 
                  Focused on performance optimization and cross-browser compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">Let's Create Something Amazing Together</h2>
          <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with fellow creators. 
            Whether you have a specific idea or just want to chat about possibilities, I'd love to hear from you.
          </p>
          <div class="flex gap-4 justify-center">
            <a href="/contact" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start a Conversation
            </a>
            <a href="/projects" class="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              See My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags for SEO
useSeoMeta({
  title: 'About Me - Full Stack Developer',
  ogTitle: 'About Me - Full Stack Developer',
  description: 'Learn more about my journey as a full stack developer, my skills, experience, and passions beyond coding.',
  ogDescription: 'Learn more about my journey as a full stack developer, my skills, experience, and passions beyond coding.',
  ogImage: '/og-about.jpg',
  twitterCard: 'summary_large_image',
})

// Page title and custom transition
definePageMeta({
  title: 'About Me',
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  }
})
</script>

<style scoped>
/* Ensure immediate styling */
section {
  opacity: 1;
  transform: translateY(0);
}

/* Smooth transitions */
a, button {
  transition: all 0.2s ease;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .bg-white {
    background-color: #1f2937;
  }
  
  .text-gray-700 {
    color: #d1d5db;
  }
  
  .text-gray-600 {
    color: #9ca3af;
  }
}
</style>

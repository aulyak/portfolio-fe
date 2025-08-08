<template>
  <div>
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <UContainer>
        <div class="py-24">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <UButton
                to="/"
                size="xl"
                variant="ghost"
                color="neutral"
                icon="i-heroicons-home"
                class="text-white/80 hover:bg-white/10"
                iconOnly
                />
              <div class="mb-1">
                <div class="flex items-center gap-3 mb-4">
                  <h1 class="text-6xl font-black text-white drop-shadow-lg">About Me</h1>
                </div>
              </div>
              <div class="mb-3">
                <h2 class="text-2xl opacity-90 font-semibold text-white">Full Stack Developer & Creative Problem Solver</h2>
              </div>
              <p
                class="text-lg font-normal text-white/90 mb-8 leading-relaxed max-w-xl backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10"
              >
                I'm passionate about crafting exceptional digital experiences through clean code, innovative design, and user-centered thinking. With
                expertise spanning both frontend and backend development, I bring ideas to life with modern technologies.
              </p>
              <div class="flex gap-4">
                <UButton to="/contact" color="primary" variant="solid" size="lg"> Get In Touch </UButton>
                <UButton to="/projects" variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-purple-600">
                  View My Work
                </UButton>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="relative">
                <!-- Simple elegant coding avatar -->
                <div
                  class="w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                >
                  <div class="relative">
                    <!-- Central code bracket icon -->
                    <UIcon name="i-heroicons-code-bracket" class="w-24 h-24 text-white/90" />
                    <!-- Simple floating elements -->
                    <div class="absolute -top-3 -right-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <div class="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div class="absolute -bottom-3 -left-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <div class="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <!-- Single elegant accent -->
                <div class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400/80 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-sparkles" class="w-4 h-4 text-yellow-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Skills Section -->
    <section class="skills py-16">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern web applications and digital solutions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard class="group hover:shadow-lg transition-all duration-300">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <UIcon name="i-heroicons-code-bracket" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <UHeading size="lg">Frontend Development</UHeading>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">Vue.js</UBadge>
              <UBadge color="success" variant="soft">Nuxt.js</UBadge>
              <UBadge color="warning" variant="soft">JavaScript</UBadge>
              <UBadge color="info" variant="soft">TypeScript</UBadge>
              <UBadge color="secondary" variant="soft">Tailwind CSS</UBadge>
            </div>
          </UCard>

          <UCard class="group hover:shadow-lg transition-all duration-300">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <UIcon name="i-heroicons-server" class="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <UHeading size="lg">Backend Development</UHeading>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">Node.js</UBadge>
              <UBadge color="success" variant="soft">Express.js</UBadge>
              <UBadge color="info" variant="soft">Go</UBadge>
              <UBadge color="primary" variant="soft">PHP</UBadge>
              <UBadge color="warning" variant="soft">Python</UBadge>
              <UBadge color="primary" variant="soft">PostgreSQL</UBadge>
              <UBadge color="warning" variant="soft">MongoDB</UBadge>
              <UBadge color="error" variant="soft">Redis</UBadge>
            </div>
          </UCard>

          <UCard class="group hover:shadow-lg transition-all duration-300">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <UIcon name="i-heroicons-cloud" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <UHeading size="lg">DevOps & Tools</UHeading>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge color="warning" variant="soft">Docker</UBadge>
              <UBadge color="primary" variant="soft">AWS</UBadge>
              <UBadge color="neutral" variant="soft">Git</UBadge>
              <UBadge color="success" variant="soft">CI/CD</UBadge>
              <UBadge color="info" variant="soft">Linux</UBadge>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Experience Timeline -->
    <section class="experience py-16 bg-gray-50 dark:bg-gray-800">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">My career highlights and key milestones in software development.</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-4 h-4 bg-blue-600 rounded-full"></div>
                <div class="w-px h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
              </div>
              <UCard class="flex-1">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <UHeading size="lg">Senior Full Stack Developer (Kintone)</UHeading>
                    <p class="text-gray-600 dark:text-gray-400">AsiaQuest Indonesia</p>
                  </div>
                  <UBadge color="primary" variant="soft">2019 - Present</UBadge>
                </div>
                <p class="text-gray-700 dark:text-gray-300">
                    Lead end-to-end Kintone solution delivery—from requirements and workflow design to customization, integrations (incl. banking), and optimization—while also building backend services (Laravel) that use Kintone as a data source; delivered HRIS, finance, and manufacturing modules (quotations, PO/DO, production, inventory, audits), developed plugins (PDF Reader, Attachment Downloader, Auto Task Assignment, Excel Importer), and elevated team practices via internal tools, GitLab adoption, API-token concealment, SOPs, and a reusable workflow guide.
                </p>
              </UCard>
            </div>

            <div class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-4 h-4 bg-green-600 rounded-full"></div>
                <div class="w-px h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
              </div>
              <UCard class="flex-1">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <UHeading size="lg">Full Stack Web Developer</UHeading>
                    <p class="text-gray-600 dark:text-gray-400">Faspay</p>
                  </div>
                  <UBadge color="success" variant="soft">2018 - 2019</UBadge>
                </div>
                <p class="text-gray-700 dark:text-gray-300">
                    Built internal tooling including a merchant SMS registration page, a finance top-up pilot, and an automated accounting journal pipeline (DB design, stored procedures, and dispute handling). Integrated Faspay with BNI by adding an API library and a reconciliation service to compare system transactions with bank statements and surface mismatches.
                </p>
              </UCard>
            </div>

            <div class="flex gap-6">
              <div class="flex flex-col items-center">
                <div class="w-4 h-4 bg-purple-600 rounded-full"></div>
              </div>
              <UCard class="flex-1">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <UHeading size="lg">Backend Intern</UHeading>
                    <p class="text-gray-600 dark:text-gray-400">BRI Satelit</p>
                  </div>
                  <UBadge color="info" variant="soft">2017 - 2017</UBadge>
                </div>
                <p class="text-gray-700 dark:text-gray-300">
                  Built a ticketing web app for BRI's Satellite Division with integrated Satellite and IT databases to let operators create and track problem tickets; also troubleshot Cacti plugin installation issues for the network monitoring stack.
                </p>
              </UCard>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Call to Action -->
    <section class="cta py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <UContainer>
        <div class="text-center">
        <p class="uppercase tracking-widest text-white/70 text-xs md:text-sm font-semibold mb-2">Open to collaboration</p>
        <UHeading
        size="2xl"
        class="mb-4 text-2xl md:text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
        >
        Let's Create Something Amazing Together
        </UHeading>
        <p class="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
        I'm always excited to work on new projects and collaborate with fellow creators. Whether you have a specific idea or want to explore
        possibilities, I'd love to hear from you.
        </p>
          <div class="flex gap-6 justify-center">
        <UButton to="/contact" color="primary" variant="solid" size="lg"> Start a Conversation </UButton>
        <UButton to="/projects" variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-blue-600">
          See My Projects
        </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script lang="ts" setup>
// Meta tags for SEO
useSeoMeta({
  title: 'About Me - Full Stack Developer',
  ogTitle: 'About Me - Full Stack Developer',
  description: 'Learn more about my journey as a full stack developer, my skills, experience, and passions beyond coding.',
  ogDescription: 'Learn more about my journey as a full stack developer, my skills, experience, and passions beyond coding.',
  ogImage: '/og-about.jpg',
  twitterCard: 'summary_large_image',
});

// Page title
definePageMeta({
  title: 'About Me',
});
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>

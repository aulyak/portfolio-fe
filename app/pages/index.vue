<template>
  <div>
    <section class="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen flex items-center">
      <UContainer>
        <div class="w-full text-center">
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-white drop-shadow-2xl bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text">
            Welcome to My Portfolio
          </h1>
          <!-- Logo icons row -->
          <div class="flex justify-center gap-6 mb-8">
            <UIcon name="i-heroicons-code-bracket" class="w-12 h-12 text-white/90" />
            <UIcon name="i-heroicons-cpu-chip" class="w-12 h-12 text-white/80" />
            <UIcon name="i-heroicons-command-line" class="w-12 h-12 text-white/80" />
            <UIcon name="i-heroicons-cloud" class="w-12 h-12 text-white/80" />
            <UIcon name="i-heroicons-rocket-launch" class="w-12 h-12 text-white/80" />
          </div>
          <div>
          </div>
          <div>
            <UHeading size="xl" class="mb-8 opacity-90">Full Stack Developer</UHeading>
          </div>
          <p class="mb-10 opacity-80 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code and design.
          </p>
          <div class="flex gap-4 justify-center">
            <UButton to="/about" color="primary" size="lg" class="text-blue-600">About Me</UButton>
            <UButton to="/projects" variant="outline" size="lg" class="border-white text-white hover:bg-white hover:text-blue-600">View Projects</UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
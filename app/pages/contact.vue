<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
    <UContainer>
      <div class="max-w-lg mx-auto bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">Contact Me</h1>
          <p class="text-gray-600 dark:text-gray-300">I'd love to hear from you! Fill out the form below or reach out directly.</p>
        </div>
        <form class="space-y-6">
          <div>
            <label class="block text-left text-gray-700 dark:text-gray-200 mb-1 font-medium" for="name">Name</label>
            <UInput id="name" type="text" placeholder="Your Name" class="w-full" required />
          </div>
          <div>
            <label class="block text-left text-gray-700 dark:text-gray-200 mb-1 font-medium" for="email">Email</label>
            <UInput id="email" type="email" placeholder="you@email.com" class="w-full" required />
          </div>
          <div>
            <label class="block text-left text-gray-700 dark:text-gray-200 mb-1 font-medium" for="message">Message</label>
            <UTextarea id="message" placeholder="Your message..." class="w-full" rows="4" required />
          </div>
          <UButton type="submit" color="primary" variant="solid" class="w-full">Send Message</UButton>
        </form>
        <!-- Alternative contact section -->
        <div class="mt-10 text-center">
          <div class="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-blue-100 dark:bg-blue-900/40 shadow">
            <UIcon name="i-heroicons-link" class="w-6 h-6 text-blue-600 dark:text-blue-300" />
            <span class="font-medium text-blue-700 dark:text-blue-200">Or connect with me on</span>
            <a href="https://www.linkedin.com/in/aulyak" target="_blank" rel="noopener" class="font-semibold text-blue-800 dark:text-blue-100 underline hover:text-blue-500 transition">LinkedIn</a>
          </div>
        </div>
        <div class="mt-6 text-center">
          <UButton to="/" variant="outline">Back to Home</UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact Me',
  description: 'Get in touch for collaborations and opportunities.'
})

definePageMeta({
  title: 'Contact',
  pageTransition: {
    name: 'slide',
    mode: 'out-in'
  }
})
</script>

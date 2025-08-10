// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],
  css: ['@/assets/css/main.css'],
  
  // Ensure proper hydration
  ssr: true,

  // Production optimizations
  nitro: {
    minify: true,
    compressPublicAssets: {
      gzip: true,
      brotli: true
    },
  },

  // Reduce bundle size
  experimental: {
    payloadExtraction: false,
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp'],
    // Only load images when needed
    provider: 'ipx'
  },

  // Build optimizations
  build: {
    transpile: [],
  },

  // Runtime optimizations
  runtimeConfig: {
    public: {
      // Reduce runtime bundle
    }
  }
})
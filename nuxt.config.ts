export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      titleTemplate: (title) => title ? `${title} — Clichín` : 'Clichín',
      meta: [
        { name: 'theme-color', content: '#282828' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
})

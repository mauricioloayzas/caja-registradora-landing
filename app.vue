<script setup lang="ts">
</script>

<template>
  <div class="navbar">
    <div class="container navbar-inner">
      <NuxtLink to="/" class="brand" style="display:flex;align-items:center;gap:0.6rem;">
        <img src="/logo.png" alt="Clichín" class="logo">
        Clichín
      </NuxtLink>
      <a href="https://webapp.clichin.app" class="btn-cta">Ir a la app</a>
    </div>
  </div>
  <NuxtPage />
  <footer>
    <div class="container">
      <div class="social-links">
        <a href="https://www.instagram.com/clichinapp" target="_blank" rel="noopener noreferrer" aria-label="Clichín en Instagram (@clichinapp)" title="Instagram @clichinapp">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href="https://www.facebook.com/clichinapp" target="_blank" rel="noopener noreferrer" aria-label="Clichín en Facebook (@clichinapp)" title="Facebook @clichinapp">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.9v3h2.6V21h3z" />
          </svg>
        </a>
      </div>
      <p>&copy; {{ new Date().getFullYear() }} Clichín. Todos los derechos reservados.</p>
      <p class="footer-note">
        clichin.app y webapp.clichin.app son propiedad de
        <a href="https://www.mauloasan.com" target="_blank" rel="noopener">Mauloasan</a>,
        quien posee todos los derechos de uso y autoría.
      </p>
    </div>
  </footer>
</template>

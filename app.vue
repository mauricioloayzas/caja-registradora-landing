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
      <p>&copy; {{ new Date().getFullYear() }} Clichín. Todos los derechos reservados.</p>
      <p class="footer-note">
        clichin.app y webapp.clichin.app son propiedad de
        <a href="https://www.mauloasan.com" target="_blank" rel="noopener">Mauloasan</a>,
        quien posee todos los derechos de uso y autoría.
      </p>
    </div>
  </footer>
</template>

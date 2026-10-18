<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>

<template>
  <header class="site-header">
    <div class="nav-shell">
      <RouterLink class="brand" to="/" aria-label="Gats del Món, inici">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="m7 18 1-10q0-2 2-1l6 6m8 0 6-6q2-1 2 1l1 10" fill="#F6BD60" />
            <path d="M7 22c0-8 5-13 13-13s13 5 13 13-5 12-13 12S7 30 7 22" fill="#F6BD60" />
            <ellipse cx="15" cy="22" rx="1.7" ry="2.4" fill="#3D405B" />
            <ellipse cx="25" cy="22" rx="1.7" ry="2.4" fill="#3D405B" />
            <path d="m18 27 2-2 2 2-2 1zM20 28c0 2-2 3-4 2m4-2c0 2 2 3 4 2" fill="none" stroke="#3D405B" stroke-linecap="round" stroke-width="1.3" />
          </svg>
        </span>
        <span>gats del <strong>món</strong></span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        :aria-label="menuOpen ? 'Tanca el menú' : 'Obre el menú'"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
      </button>

      <nav id="main-navigation" class="main-navigation" :class="{ 'is-open': menuOpen }">
        <RouterLink to="/" exact-active-class="is-active" @click="menuOpen = false">Home</RouterLink>
        <RouterLink to="/gats" active-class="is-active" @click="menuOpen = false">Gats</RouterLink>
        <RouterLink to="/about" active-class="is-active" @click="menuOpen = false">Sobre nosaltres</RouterLink>
        <RouterLink class="nav-cta" to="/gats" @click="menuOpen = false">
          Explora les races <span aria-hidden="true">↗</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

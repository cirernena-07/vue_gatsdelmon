<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <router-view />
  <footer class="site-footer">
    <div class="footer-shell">
      <RouterLink class="brand footer-brand" to="/">
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
      <p>Un petit racó per a tothom qui estima els gats. <span aria-hidden="true">♡</span></p>
      <span class="footer-note">Fet amb estima i curiositat <span aria-hidden="true">✦</span></span>
    </div>
  </footer>
</template>
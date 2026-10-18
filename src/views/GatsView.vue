<script setup>
import GatList from '../components/GatList.vue'
</script>

<template>
  <main class="section-shell page-section breeds-page">
    <div class="page-intro" v-reveal>
      <span class="eyebrow"><span class="eyebrow-dot"></span> GUIA DE RACES FELINES</span>
      <h1>Una raça per a<br /><span>cada personalitat</span></h1>
      <p>De companys tranquils a petits aventurers: troba la teva pròxima història felina.</p>
      <div class="intro-count"><span>✳</span> 10 races per descobrir</div>
    </div>
    <GatList />
  </main>
</template>

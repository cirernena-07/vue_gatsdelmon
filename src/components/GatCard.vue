<script setup>
import CatIllustration from './CatIllustration.vue'

defineProps({
  nom: { type: String, required: true },
  descripcio: { type: String, required: true },
  fact: { type: String, required: true },
  category: { type: String, required: true },
  breed: { type: String, required: true },
  fur: { type: String, required: true },
  inner: { type: String, required: true },
  eyes: { type: String, default: '#526174' },
  number: { type: String, required: true },
})
</script>

<template>
  <article class="breed-card" v-reveal>
    <div class="breed-card-art">
      <span class="breed-number">{{ number }}</span>
      <span class="breed-category">{{ category }}</span>
      <CatIllustration
        class="breed-cat"
        :breed="breed"
        :label="`un gat ${nom}`"
        :fur="fur"
        :inner="inner"
        :eyes="eyes"
      />
    </div>
    <div class="breed-card-content">
      <h3>{{ nom }}</h3>
      <p class="breed-description">{{ descripcio }}</p>
      <div class="fun-fact">
        <span class="fact-icon" aria-hidden="true">✦</span>
        <div>
          <span class="fact-label">Fun fact</span>
          <p>{{ fact }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

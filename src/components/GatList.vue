<script setup>
import GatCard from './GatCard.vue'

const gats = [
  { nom: 'Misu', raca: 'Europeu' },
  { nom: 'Luna', raca: 'Siamès' },
  { nom: 'Simba', raca: 'Persa' }
]
</script>

<template>
  <div>
    <h2>Llista de gats</h2>

    <GatCard
      v-for="gat in gats"
      :key="gat.nom"
      :nom="gat.nom"
      :raca="gat.raca"
    />
  </div>
</template>
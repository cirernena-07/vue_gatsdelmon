<script setup>
defineProps({
  nom: String,
  raca: String
})
</script>

<template>
  <div class="card">
    <h3>{{ nom }}</h3>
    <p>{{ raca }}</p>
  </div>
</template>

<style>
.card {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}
</style>

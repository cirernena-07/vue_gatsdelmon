<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import GatCard from './GatCard.vue'

const gats = ref([])

onMounted(async () => {
  console.log("Entrant")

  try {
    const querySnapshot = await getDocs(collection(db, 'Gats'))

    console.log("Número de documents:", querySnapshot.size)

    gats.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    console.log("Dades:", gats.value)
  } catch (error) {
    console.error("Error Firebase:", error)
  }
})
</script>

<template>
  <div>
    <h2>Llista de gats</h2>

    <GatCard
      v-for="gat in gats"
      :key="gat.id"
      :nom="gat.nom"
      :raca="gat.raca"
    />
  </div>
</template>

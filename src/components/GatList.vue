<script setup>
import { computed, ref } from 'vue'
import GatCard from './GatCard.vue'

const search = ref('')
const coatFilter = ref('Tots')
const filters = ['Tots', 'Pèl curt', 'Pèl llarg']

const gats = [
  {
    id: 'siames',
    nom: 'Siamès',
    breed: 'siamese',
    category: 'Comunicatiu',
    coat: 'Pèl curt',
    descripcio: 'Elegant, curiós i molt sociable. Li encanta formar part de la família.',
    fact: 'Té una veu molt expressiva i sovint sembla que et respongui.',
    fur: '#EAD7BF',
    inner: '#554B4A',
    eyes: '#5AA7D9',
  },
  {
    id: 'persa',
    nom: 'Persa',
    breed: 'persian',
    category: 'Tranquilo',
    coat: 'Pèl llarg',
    descripcio: 'Un company dolç i serè, reconeixible pel seu pelatge llarg i abundant.',
    fact: 'El seu pelatge necessita una bona raspallada cada dia.',
    fur: '#F2E8D8',
    inner: '#D6BFA4',
  },
  {
    id: 'maine-coon',
    nom: 'Maine Coon',
    breed: 'maine',
    category: 'Gegant amable',
    coat: 'Pèl llarg',
    descripcio: 'Gran de mida i de cor: juganer, afectuós i molt sociable.',
    fact: 'És una de les races de gat domèstic més grans del món.',
    fur: '#9D7157',
    inner: '#634B3D',
  },
  {
    id: 'british-shorthair',
    nom: 'British Shorthair',
    breed: 'british',
    category: 'Equilibrat',
    coat: 'Pèl curt',
    descripcio: 'Robust, afectuós i independent; gaudeix de la calma i la companyia.',
    fact: 'El seu pelatge és tan dens que sembla de vellut.',
    fur: '#849A98',
    inner: '#607874',
  },
  {
    id: 'ragdoll',
    nom: 'Ragdoll',
    breed: 'ragdoll',
    category: 'Amorós',
    coat: 'Pèl llarg',
    descripcio: 'D’ulls blaus i caràcter dolç, sovint segueix la família per casa.',
    fact: 'El seu nom vol dir “nina de drap”: es relaxa quan l’agafen en braços.',
    fur: '#F0E3D3',
    inner: '#78645D',
    eyes: '#5AA7D9',
  },
  {
    id: 'bengali',
    nom: 'Bengalí',
    breed: 'bengal',
    category: 'Aventurer',
    coat: 'Pèl curt',
    descripcio: 'Actiu i atlètic, llueix un pelatge clapejat que recorda el d’un felí salvatge.',
    fact: 'A molts bengalins els encanta jugar amb l’aigua.',
    fur: '#D9A36F',
    inner: '#A86F45',
  },
  {
    id: 'sphynx',
    nom: 'Sphynx',
    breed: 'sphynx',
    category: 'Extrovertit',
    coat: 'Pèl curt',
    descripcio: 'Afectuós i enèrgic, destaca per la pell nua i una gran personalitat.',
    fact: 'No té pèl, tot i que la pell està coberta d’un borrissol molt fi.',
    fur: '#E4B4A8',
    inner: '#C98F83',
  },
  {
    id: 'scottish-fold',
    nom: 'Scottish Fold',
    breed: 'scottish',
    category: 'Afable',
    coat: 'Pèl curt',
    descripcio: 'De cara rodona i caràcter dolç, és tranquil i s’adapta amb facilitat.',
    fact: 'Les orelles plegades cap endavant són el seu tret més distintiu.',
    fur: '#C9BCA9',
    inner: '#A39481',
  },
  {
    id: 'angora-turco',
    nom: 'Angora turc',
    breed: 'angora',
    category: 'Elegant',
    coat: 'Pèl llarg',
    descripcio: 'Àgil i intel·ligent, combina un pelatge sedós amb molta curiositat.',
    fact: 'És una raça natural originària de la regió d’Ankara, a Turquia.',
    fur: '#F2EFE8',
    inner: '#D5C4B2',
  },
  {
    id: 'atigrado',
    nom: 'Gat tigrat',
    breed: 'tabby',
    category: 'Clàssic',
    coat: 'Pèl curt',
    descripcio: 'Les ratlles i els remolins del pelatge fan que cada gat tigrat tingui un dibuix únic.',
    fact: 'La marca en forma de “M” del front apareix en molts gats tigrats.',
    fur: '#C69A73',
    inner: '#966D4E',
  },
]

const gatsFiltrats = computed(() => {
  const terme = search.value.trim().toLocaleLowerCase('ca')

  return gats.filter((gat) => {
    const coincideixAmbNom = `${gat.nom} ${gat.descripcio}`.toLocaleLowerCase('ca').includes(terme)
    const coincideixAmbPel = coatFilter.value === 'Tots' || gat.coat === coatFilter.value

    return coincideixAmbNom && coincideixAmbPel
  })
})
</script>

<template>
  <div class="breed-explorer">
    <div class="breed-toolbar">
      <label class="search-field">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 4.5 4.5" />
        </svg>
        <input v-model="search" type="search" placeholder="Cerca una raça..." aria-label="Cerca una raça" />
      </label>
      <div class="filter-chips" role="group" aria-label="Filtra per llargada del pèl">
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          :class="{ 'is-selected': coatFilter === filter }"
          @click="coatFilter = filter"
        >
          {{ filter }}
        </button>
      </div>
    </div>
    <GatCard
      v-for="(gat, index) in gatsFiltrats"
      :key="gat.id"
      :nom="gat.nom"
      :descripcio="gat.descripcio"
      :fact="gat.fact"
      :category="gat.category"
      :breed="gat.breed"
      :fur="gat.fur"
      :inner="gat.inner"
      :eyes="gat.eyes"
      :number="String(index + 1).padStart(2, '0')"
    />
    <p v-if="gatsFiltrats.length === 0" class="empty-state">
      No hem trobat cap raça amb aquesta cerca. Prova amb un altre nom!
    </p>
  </div>
</template>

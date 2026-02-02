<template>
  <div class="page">

    <header class="page-header">
      <MainNavigation/>
    </header>

    <section v-if="plants && plants.length > 0">
      <div class="controls">
        <div class="form-group">
          <span class="form-group__label">Tri</span>
          <select class="form-item form-item__select" v-model="selectedSort">
            <option value="">Défaut</option>
            <option value="scientific">Nom scientifique</option>
            <option value="vernacular">Nom vernaculaire</option>
            <option value="family">Famille</option>
          </select>
        </div>
        <div class="form-group^">
          <span class="form-group__label">Filtre</span>
          <select class="form-item form-item__select" v-model="selectedFamily">
            <option value="">Familles</option>
            <option
              v-for="family in families"
              :key="family"
              :value="family"
            >
              {{ family }}
            </option>
          </select>
          <select class="form-item form-item__select" v-model="selectedType">
            <option value="">Types</option>
            <option
              v-for="type in types"
              :key="type"
              :value="type"
            >
              {{ type }}
            </option>
          </select>
          <label class="form-item form-item__checkbox">
            <input
              type="checkbox"
              v-model="onlyInvasive"
            />
            Invasives
          </label>
        </div>
      </div>
      <div class="gallery">
        <button
          @click="randomize"
          class="random-button">
          <span>🎁</span>
        </button>
        <button
          @click="toggleNames"
          class="toggle-names-button">
          <span>👀</span>
        </button>
        <Plant
          v-for="(plant, index) in displayedPlants"
          :key="plant.id"
          :item="plant"
          :itemIndex="index"
          :itemsTotal="plants.length"
          :reveal="isRevealed"
        />
      </div>
    </section>

    <section v-else class="empty-state">
      <p>Aucune plante trouvée pour le moment.</p>
    </section>

  </div>
</template>

<script setup>
import plants from '~/assets/data/plants.json'
import { ref, computed, onMounted, watch } from 'vue'

const isRevealed = ref(false)

// Original source that does not change.
const originalPlants = plants

// Displayed list.
const displayedPlants = ref([])

// UI state
const selectedSort = ref('')
const selectedFamily = ref('')
const selectedType = ref('')
const onlyInvasive = ref(false)

// Uniques families (auto)
const families = computed(() => {
  return [...new Set(originalPlants.map(p => p.family))]
    .sort((a, b) => a.localeCompare(b, 'fr'))
})

// Uniques types (auto)
const types = computed(() => {
  return [...new Set(originalPlants.map(p => p.type))]
    .sort((a, b) => a.localeCompare(b, 'fr'))
})

// Initialisation SSR-safe (Default order)
onMounted(() => {
  displayedPlants.value = [...originalPlants]
})

function applyFiltersAndSort() {
  let result = [...originalPlants]

  // Filter family
  if (selectedFamily.value) {
    result = result.filter(
      plant => plant.family === selectedFamily.value
    )
  }

  // Filter type
  if (selectedType.value) {
    result = result.filter(
      plant => plant.type === selectedType.value
    )
  }

  // Filter invasives
  if (onlyInvasive.value) {
    result = result.filter(plant => plant.invasive === true)
  }

  // Sort alphabtically
  if (selectedSort.value) {
    result.sort((a, b) => {
      let fieldA = ''
      let fieldB = ''

      switch (selectedSort.value) {
        case 'scientific':
          fieldA = a.scientificName
          fieldB = b.scientificName
          break
        case 'vernacular':
          fieldA = a.vernacularName
          fieldB = b.vernacularName
          break
        case 'family':
          fieldA = a.family
          fieldB = b.family
          break
      }

      return fieldA.localeCompare(fieldB, 'fr')
    })
  }

  displayedPlants.value = result
}

// Watch automatique
watch([selectedSort, selectedFamily, selectedType, onlyInvasive], applyFiltersAndSort)

// Random
function shuffleArray(items) {
  const array = [...items]

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

function randomize() {
  selectedSort.value = ''
  selectedFamily.value = ''
  selectedType.value = ''
  onlyInvasive.value = false
  displayedPlants.value = shuffleArray(originalPlants)
}

// UI
const toggleNames = () => {
  let elems = document.querySelectorAll('.gallery-item');

  isRevealed.value = !isRevealed.value;
}

</script>

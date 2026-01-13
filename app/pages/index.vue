<template>
  <div class="page">
    <header class="page-header">
      <MainNavigation/>
    </header>


    <section v-if="plants && plants.length > 0">
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
import { ref } from 'vue'

const isRevealed = ref(false)

// Original source that does not change.
const originalPlants = plants

// Displayed list.
const displayedPlants = ref([])

// Default order (SSR-safe)
onMounted(() => {
  displayedPlants.value = [...originalPlants]
})

function shuffleArray(items) {
  const array = [...items]

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

function randomize() {
  displayedPlants.value = shuffleArray(originalPlants)
}



const toggleNames = () => {
  let elems = document.querySelectorAll('.gallery-item');

  isRevealed.value = !isRevealed.value;

  // console.log(elems);

  // if (this.solutionShown) {
  //   this.solutionShown = false;

  //   elems.forEach(function (elem) {
  //     elem.classList.remove('is-revealed');
  //   });
  // } else {
  //   this.solutionShown = true;

  //   elems.forEach(function (elem) {
  //     elem.classList.add('is-revealed');
  //   });
  // }
}

</script>

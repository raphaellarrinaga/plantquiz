<template>
  <div class="page">
    <header class="page-header">
      <MainNavigation/>
    </header>
    <section>
      <div class="gallery">
        <!-- <button
          @click="randomize"
          class="random-button">
          <span>🎁</span>
        </button>
        <button
          @click="toggleNames"
          class="toggle-names-button">
          <span>👀</span>
        </button> -->
        <Plant
          v-for="(plant, index) in plants"
          :key="plant.id"
          :item="plant"
          :itemIndex="index"
          :itemsTotal="plants.length"
        />
      </div>
      <!-- <div v-if="plants.length" class="gallery">
      </div>
      <div v-else>
        <p>No plants</p>
      </div> -->
    </section>

  </div>
</template>

<script setup>
import plants from '~/assets/data/plants.json'

import { ref } from 'vue'

const solutionShown = ref(false)

const randomize = () => {
  return this.plants.sort(function(){return 0.5 - Math.random()});
}

const toggleNames = () => {
  let elems = document.querySelectorAll('.gallery-item');

  // console.log(this.solutionShown);

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

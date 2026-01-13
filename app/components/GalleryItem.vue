<template>
  <div class="content">
    <!-- <header class="page-header">
      <div class="gallery-nav">
        <button class="gallery-nav__button" @click="setAll">Tout</button>
        <button class="gallery-nav__button" @click="setBfg">BFG</button>
        <button class="gallery-nav__button" @click="setVivaces">Viv</button>
        <button class="gallery-nav__button" @click="setAromatiques">Aro</button>
        <button class="gallery-nav__button" @click="setBulbes">Bulb</button>
        <button class="gallery-nav__button" @click="setAquatiques">Aqua</button>
        <button class="gallery-nav__button" @click="setArbres">Arb</button>
        <button class="gallery-nav__button" @click="setArbustes">Per</button>
        <button class="gallery-nav__button" @click="setCaducs">Cad</button>
      </div>
      <MainNavigation/>
    </header> -->
    <div v-if="plants.length" class="gallery">
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
      <div
        v-for="(item, index) in plants"
        class="gallery-item"
        :key="item.id">
        <button
          @click="toggleName"
          class="gallery-item__solution-toggle button-gallery">
          <span>👀</span>
        </button>
        <div class="gallery-item__infos">
          <h1 class="gallery-item__botanical">{{ item.botanicalName }} ({{ index + 1 }}/{{ plants.length }})</h1>
          <h2 class="gallery-item__familiar">{{ item.familiarName }}</h2>
          <div class="gallery-item__metas">
            <p class="gallery-item__type">
              <span class="gallery-item__label">Type: </span>{{ item.type }}<span v-if="item.propagation"> ({{ item.propagation }})</span></p>
            <p class="gallery-item__season">
              <span class="gallery-item__label">Saison: </span>{{ item.season }}<span v-if="item.propagation"> ({{ item.propagation }})</span></p>
            <p class="gallery-item__density">
              <span class="gallery-item__label">Densité: </span>{{ item.density }}</p>
            <p class="gallery-item__depth">
              <span class="gallery-item__label">Profondeur: </span>{{ item.depth }}</p>
            <p class="gallery-item__height">
              <span class="gallery-item__label">Hauteur: </span>{{ item.height }}cm</p>
            <p class="gallery-item__ground">
              <span class="gallery-item__label">Sol: </span>{{ item.ground }}</p>
            <p class="gallery-item__exposition">
              <span class="gallery-item__label">Exposition: </span>{{ item.exposition }}</p>
            <p class="gallery-item__usage">
              <span class="gallery-item__label">Intérêt: </span>{{ item.usage }}</p>
            <p class="gallery-item__bloom">
              <span class="gallery-item__label">Floraison: </span>{{ item.bloom }}</p>
            <p class="gallery-item__color">
              <span class="gallery-item__label">Couleur: </span>{{ item.color }}</p>
          </div>
        </div>
        <div class="gallery-item__front">
          <button
            @click="toggleImage"
            class="gallery-item__image-toggle">
            Change image
          </button>
          <img
            v-for="(image, index) in item.images"
            class="gallery-item__image"
            :class="{ 'is-active': index === 0 }"
            :src="image"
            :key="image.id">
        </div>
      </div>
    </div>
    <div v-else>
      <p>No plants</p>
    </div>
  </div>

  <div class="overflow-hidden rounded-lg cursor-pointer group">
    <NuxtImg
      :src="src"
      alt="Gallery image"
      class="w-full h-full object-cover transform group-hover:scale-105 transition"
      width="300"
      height="300"
      quality="80"
    />
  </div>
</template>




<script>

defineProps({
  src: { type: String, required: true },
  plants: []
})

// import { VueAgile } from 'vue-agile'
// const axios = require('axios')

export default {
  name: 'Gallery',
  // data () {
  //   return {
  //     plants: [],
  //     allPlants: [],
  //     bfg: [],
  //     vivaces: [],
  //     aromatiques: [],
  //     bulbes: [],
  //     aquatiques: [],
  //     arbres: [],
  //     arbustes: [],
  //     caducs: [],
  //     solutionShown: false,
  //   }
  // },
  async asyncData () {
    // const allPlants = await axios.get('/quizRenacData.json').then(res => res.data)
    // const bfg = await axios.get('/quizRenacData-bfg.json').then(res => res.data)
    // const vivaces = await axios.get('/quizRenacData-vivaces.json').then(res => res.data)
    // const aromatiques = await axios.get('/quizRenacData-aromatiques.json').then(res => res.data)
    // const bulbes = await axios.get('/quizRenacData-bulbes.json').then(res => res.data)
    // const aquatiques = await axios.get('/quizRenacData-aquatiques.json').then(res => res.data)
    // const arbres = await axios.get('/quizRenacData-arbres.json').then(res => res.data)
    // const arbustes = await axios.get('/quizRenacData-arbustes.json').then(res => res.data)
    // const caducs = await axios.get('/quizRenacData-arbustesCaduc.json').then(res => res.data)
    // const plants = allPlants
    // return { plants, bfg, vivaces, aromatiques, bulbes, aquatiques, arbres, arbustes, caducs, allPlants }
  },
  // components: {
  //   agile: VueAgile
  // },
  methods: {
    // setAll: function() {
    //   this.plants = this.allPlants;
    // },
    // setBfg: function() {
    //   this.plants = this.bfg;
    // },
    // setVivaces: function() {
    //   this.plants = this.vivaces;
    // },
    // setAromatiques: function() {
    //   this.plants = this.aromatiques;
    // },
    // setBulbes: function() {
    //   this.plants = this.bulbes;
    // },
    // setAquatiques: function() {
    //   this.plants = this.aquatiques;
    // },
    // setArbres: function() {
    //   this.plants = this.arbres;
    // },
    // setArbustes: function() {
    //   this.plants = this.arbustes;
    // },
    // setCaducs: function() {
    //   this.plants = this.caducs;
    // },
    // randomize: function() {
    //   return this.plants.sort(function(){return 0.5 - Math.random()});
    // },
    // toggleNames: function() {
    //   let elems = document.querySelectorAll('.gallery-item');

    //   if (this.solutionShown) {
    //     this.solutionShown = false;

    //     elems.forEach(function (elem) {
    //       elem.classList.remove('is-revealed');
    //     });
    //   } else {
    //     this.solutionShown = true;

    //     elems.forEach(function (elem) {
    //       elem.classList.add('is-revealed');
    //     });
    //   }

    // },
    // toggleName: function(el) {
    //   el.target.closest(".gallery-item").classList.toggle('is-revealed')
    // },
    // toggleImage: function(el) {
    //   let parent = el.target.closest(".gallery-item__front")
    //   let images = parent.querySelectorAll(".gallery-item__image")
    //   let activeItem = parent.querySelectorAll(".gallery-item__image.is-active")

    //   if (images.length > 1) {
    //     for (let index = 0; index < images.length; index++) {
    //       const element = images[index];

    //       if (element.classList.contains('is-active') && index < images.length - 1) {
    //         element.nextElementSibling.classList.add('is-active')
    //         element.classList.remove('is-active')
    //         return false
    //       } else if (element.classList.contains('is-active') && index == images.length - 1) {
    //         images[0].classList.add('is-active')
    //         element.classList.remove('is-active')
    //         return false
    //       }
    //     }
    //   }
    // },
  }
}
</script>

<template>
  <div class="gallery-item">
    <button
      @click="toggleName"
      class="gallery-item__solution-toggle button-gallery">
      <span>👀</span>
    </button>

    <div class="gallery-item__infos" :class="{ 'is-invasive': item.invasive, 'is-noninvasive': !item.invasive }">
      <h1 class="gallery-item__botanical">{{ item.botanicalName }} ({{ itemIndex + 1 }}/{{ itemsTotal }})</h1>
      <h2 class="gallery-item__familiar">
        {{ item.vernacularName }}
        <span v-if="item.invasive" class="gallery-item__invasive">Invasive</span>
      </h2>
      <div class="gallery-item__metas">
        <p class="gallery-item__type">
          <span class="gallery-item__label">Type: </span>{{ item.type }}</p>
        <p class="gallery-item__height">
          <span class="gallery-item__label">Hauteur: </span>{{ item.heightCm }}cm</p>
        <p class="gallery-item__ground">
          <span class="gallery-item__label">Sol: </span>{{ item.soil }}</p>
        <p class="gallery-item__exposition">
          <span class="gallery-item__label">Exposition: </span>{{ item.exposure }}</p>
        <p class="gallery-item__bloom">
          <span class="gallery-item__label">Floraison: </span>{{ item.flowering }}</p>
        <p class="gallery-item__color">
          <span class="gallery-item__label">Couleur: </span>{{ item.color }}</p>
        <p class="gallery-item__usage">
          <span class="gallery-item__label">Intérêt: </span>{{ item.interest }}</p>
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

</template>

<script setup>

// defineProps({
//   src: { type: String, required: true },
//   plants: []
// })

// plants.forEach(plant => {
//   console.log(plant.scientificName)
// })

defineProps({
  item: {
    type: Object,
    required: true
  },
  itemsTotal: {
    type: Number,
    required: true
  },
  itemIndex: {
    type: Number,
    required: true
  }
})

const toggleName = (el) => {
  el.target.closest(".gallery-item").classList.toggle('is-revealed')
}

const toggleImage = (el) => {
  let parent = el.target.closest(".gallery-item__front")
  let images = parent.querySelectorAll(".gallery-item__image")
  let activeItem = parent.querySelectorAll(".gallery-item__image.is-active")

  if (images.length > 1) {
    for (let index = 0; index < images.length; index++) {
      const element = images[index];

      if (element.classList.contains('is-active') && index < images.length - 1) {
        element.nextElementSibling.classList.add('is-active')
        element.classList.remove('is-active')
        return false
      } else if (element.classList.contains('is-active') && index == images.length - 1) {
        images[0].classList.add('is-active')
        element.classList.remove('is-active')
        return false
      }
    }
  }
}

// export default {
//   name: 'Plant',
//   // data () {
//   //   return {
//   //     plants: [],
//   //     allPlants: [],
//   //     bfg: [],
//   //     vivaces: [],
//   //     aromatiques: [],
//   //     bulbes: [],
//   //     aquatiques: [],
//   //     arbres: [],
//   //     arbustes: [],
//   //     caducs: [],
//   //     solutionShown: false,
//   //   }
//   // },
//   methods: {
//   },
// }
</script>

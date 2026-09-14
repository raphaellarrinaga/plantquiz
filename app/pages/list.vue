<template>
  <div class="page">
    <header class="page-header">
      <h1 class="page-title">
        <NuxtLink to="/" class="nav-list__link">
          <span class="page-title__text">Ecoplants</span>
          <img src="~/assets/images/logo.svg" data-not-lazy />
        </NuxtLink>
      </h1>
      <MainNavigation/>
    </header>


    <ul v-if="plants.length" class="plants-list l-constrain">
      <li
        v-for="(item, index) in plants"
        :class="{
        'is-invasive': item.invasive,
        'is-noninvasive': !item.invasive
        }"
        class="plant-list__item"
        :key="item.id">
        <span class="plant-list__item-count">{{ index + 1 }}</span>
        <span class="plant-list__item-scientific-name">{{ item.scientificName }}</span>
        <span class="plant-list__item-vernacular-name">{{ item.vernacularName }}</span>
      </li>
    </ul>

    <section v-else class="empty-state">
      <p>Aucune plante trouvée pour le moment.</p>
    </section>

  </div>
</template>

<script setup>
import plants from '~/assets/data/plants.json'
</script>

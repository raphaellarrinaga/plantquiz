<template>
  <div class="page">
    <header class="page-header">
      <MainNavigation/>
    </header>


    <ul v-if="plants.length" class="plants-list">
      <li
        v-for="(item, index) in plants"
        :key="item.id">
        {{ index + 1 }}/{{ plants.length }}. {{ item.scientificName }} — {{ item.vernacularName }}
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

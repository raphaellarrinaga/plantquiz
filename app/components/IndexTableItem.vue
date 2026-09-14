<template>
  <div class="plant__inner">
    <div
      class="plant__item plant__item-name has-value">
      <div class="plant__item-image">
        <div
          class="plant__images-count"
          v-if="lead.images">
          {{ Object.keys(lead.images).length }}
        </div>
        <client-only
          v-if="lead.images">
          <LightGallery
            :images="Object.values(lead.images)"
            :index="index"
            :disable-scroll="true"
            @close="index = null"
          />
        </client-only>
        <picture
          class="plant__image-sm"
          @click="index = 0"
          v-if="lead.small">
          <img :src="lead.small" alt="">
        </picture>
        <picture
          class="plant__thumb"
          @click="index = 0"
          v-if="lead.thumb">
          <!-- <nuxt-img
            loading="lazy"
            :src="lead.thumb"
            /> -->
          <img :src="lead.thumb" alt="">
        </picture>
        <div v-else class="plant__thumb-placeholder"></div>
      </div>
      <div class="plant__header">
        <p class="plant__latin">
          {{ order === 'NomVernaculaire' ? lead.NomVernaculaire : lead.Nom }}

          <span v-if="lead.Toxique">☠️</span>
          <span v-if="lead.Invasive">⛔️</span>
          <span v-if="lead.Comestible">😋</span>
          <span v-if="lead.Mellifere">🐝</span>
          <span v-if="lead.Origine === 'Indigène'">🇧🇪</span>
        </p>
        <p class="plant__vernaculaire">
          {{ order === 'NomVernaculaire' ? lead.Nom : lead.NomVernaculaire }}
        </p>
      </div>
    </div>
    <div
      :class="{ 'has-value' : lead.hasOwnProperty('Categorie') && lead['Categorie'] }"
      class="plant__item plant__item-categorie">
      <h3><span v-if="lead.hasOwnProperty('Categorie') && lead['Categorie']">Categorie</span></h3>
      <p class="plant__categorie">{{ lead.Categorie }}</p>
    </div>
    <div
      :class="{ 'has-value' : lead.hasOwnProperty('Type') && lead['Type'] }"
      class="plant__item plant__item-type">
      <h3>Type</h3>
      <p class="plant__type">{{ lead.Type }}</p>
    </div>
    <div
      :class="{ 'has-value' : lead.hasOwnProperty('Hauteur') && lead['Hauteur'] }"
      class="plant__item plant__item-hauteur">
      <h3>Taille</h3>
      <p class="plant__hauteur">{{ lead.Hauteur }}</p>
    </div>
    <div
      :class="{ 'has-value' : lead.hasOwnProperty('Floraison') && lead['Floraison'] }"
      class="plant__item plant__item-floraison">
      <h3>Floraison</h3>
      <p class="plant__floraison">{{ lead.Floraison }}</p>
    </div>
    <div
      :class="{ 'has-value' : lead.hasOwnProperty('Fleur') && lead['Fleur'] }"
      class="plant__item plant__item-color">
      <h3>Fleur</h3>
      <p class="plant__color">{{ lead.Fleur }}</p>
    </div>
    <!-- <div
      :class="{ 'has-value' : lead.hasOwnProperty('Semis') && lead['Semis'] }"
      class="plant__item plant__item-semis">
      <h3>Semis</h3>
      <p class="plant__semis">{{ lead.Semis }}</p>
    </div> -->
    <div class="plant__item plant__item-actions">
      <button
        v-if="
          lead.hasOwnProperty('Type') && lead['Type'] ||
          lead.hasOwnProperty('Famille') && lead['Famille'] ||
          lead.hasOwnProperty('Origine') && lead['Origine'] ||
          lead.hasOwnProperty('Cycle') && lead['Cycle'] ||
          lead.hasOwnProperty('Rusticite') && lead['Rusticite'] ||
          lead.hasOwnProperty('Feuillage') && lead['Feuillage'] ||
          lead.hasOwnProperty('Exposition') && lead['Exposition'] ||
          lead.hasOwnProperty('Biotope') && lead['Biotope'] ||
          lead.hasOwnProperty('Sol') && lead['Sol'] ||
          lead.hasOwnProperty('Acidite') && lead['Acidite'] ||
          lead.hasOwnProperty('Humidite') && lead['Humidite'] ||
          lead.hasOwnProperty('Fleur') && lead['Fleur'] ||
          lead.hasOwnProperty('Semis') && lead['Semis'] ||
          lead.hasOwnProperty('Utilisation') && lead['Utilisation'] ||
          lead.hasOwnProperty('Remarques') && lead['Remarques'] ||
          lead.hasOwnProperty('Comestible') && lead['Comestible'] ||
          lead.hasOwnProperty('Mellifere') && lead['Mellifere'] ||
          lead.hasOwnProperty('Medicinale') && lead['Medicinale'] ||
          lead.hasOwnProperty('Invasive') && lead['Invasive'] ||
          lead.hasOwnProperty('Toxique') && lead['Toxique'] ||
          lead.hasOwnProperty('Description') && lead['Description']"
        @click="toggleMore"
        class="button plants-toggle">Détail <i>▾</i></button>
      <button
        v-else
        class="button plants-toggle-disabled">Détail <i>▾</i></button>
    </div>
    <div
      v-if="
        lead.hasOwnProperty('Type') && lead['Type'] ||
        lead.hasOwnProperty('Famille') && lead['Famille'] ||
        lead.hasOwnProperty('Origine') && lead['Origine'] ||
        lead.hasOwnProperty('Cycle') && lead['Cycle'] ||
        lead.hasOwnProperty('Rusticite') && lead['Rusticite'] ||
        lead.hasOwnProperty('Feuillage') && lead['Feuillage'] ||
        lead.hasOwnProperty('Exposition') && lead['Exposition'] ||
        lead.hasOwnProperty('Biotope') && lead['Biotope'] ||
        lead.hasOwnProperty('Sol') && lead['Sol'] ||
        lead.hasOwnProperty('Acidite') && lead['Acidite'] ||
        lead.hasOwnProperty('Humidite') && lead['Humidite'] ||
        lead.hasOwnProperty('Fleur') && lead['Fleur'] ||
        lead.hasOwnProperty('Semis') && lead['Semis'] ||
        lead.hasOwnProperty('Remarques') && lead['Remarques'] ||
        lead.hasOwnProperty('Utilisation') && lead['Utilisation'] ||
        lead.hasOwnProperty('Comestible') && lead['Comestible'] ||
        lead.hasOwnProperty('Mellifere') && lead['Mellifere'] ||
        lead.hasOwnProperty('Medicinale') && lead['Medicinale'] ||
        lead.hasOwnProperty('Invasive') && lead['Invasive'] ||
        lead.hasOwnProperty('Toxique') && lead['Toxique'] ||
        lead.hasOwnProperty('Description') && lead['Description']"
      class="plant__more">
      <div
        v-if="lead.hasOwnProperty('Type') && lead['Type']"
        class="plant__more-item plant__more-item--type">
        <h3>Type</h3>
        <p class="plant__type">{{ lead.Type }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Origine') && lead['Origine']"
        class="plant__more-item plant__more-item--origine">
        <h3>Origine</h3>
        <p class="plant__origine">{{ lead.Origine }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Famille') && lead['Famille']"
        class="plant__more-item plant__more-item--famille">
        <h3>Famille</h3>
        <p class="plant__famille">{{ lead.Famille }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Cycle') && lead['Cycle']"
        class="plant__more-item plant__more-item--cycle">
        <h3>Cycle</h3>
        <p class="plant__cycle">{{ lead.Cycle }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Rusticite') && lead['Rusticite']"
        class="plant__more-item plant__more-item--rusticite">
        <h3>Rusticité</h3>
        <p class="plant__rusticite">{{ lead.Rusticite }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Feuillage') && lead['Feuillage']"
        class="plant__more-item plant__more-item--feuillage">
        <h3>Feuillage</h3>
        <p class="plant__feuillage">{{ lead.Feuillage }}</p>
      </div>
      <hr class="separator">
      <div
        v-if="lead.hasOwnProperty('Exposition') && lead['Exposition']"
        class="plant__more-item plant__more-item--exposition">
        <h3>Exposition</h3>
        <p class="plant__exposition">{{ lead.Exposition }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Biotope') && lead['Biotope']"
        class="plant__more-item plant__more-item--biotope">
        <h3>Biotope</h3>
        <p class="plant__biotope">{{ lead.Biotope }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Sol') && lead['Sol']"
        class="plant__more-item plant__more-item--sol">
        <h3>Sol</h3>
        <p class="plant__sol">{{ lead.Sol }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Acidite') && lead['Acidite']"
        class="plant__more-item plant__more-item--acidite">
        <h3>Acidité</h3>
        <p class="plant__acidite">{{ lead.Acidite }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Humidite') && lead['Humidite']"
        class="plant__more-item plant__more-item--humidite">
        <h3>Humidité</h3>
        <p class="plant__humidite">{{ lead.Humidite }}</p>
      </div>
      <hr class="separator">
      <div
        v-if="lead.hasOwnProperty('Ecosem') && lead['Ecosem']"
        class="plant__more-item plant__more-item--database">
        <h3>Source</h3>
        <p class="plant__database">
          <span v-if="lead.hasOwnProperty('Ecosem') && lead['Ecosem']">Ecosem</span><span v-if="lead.hasOwnProperty('Ecoflora') && lead['Ecoflora']">Ecoflora</span><span v-if="lead.hasOwnProperty('ifapme') && lead['ifapme']">IFAPME</span><span v-if="lead.hasOwnProperty('natagora') && lead['natagora']">Natagora</span><span v-if="lead.hasOwnProperty('sourceOther') && lead['sourceOther']">Autre</span>
        </p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Semis') && lead['Semis']"
        class="plant__more-item plant__more-item--semis">
        <h3>Semis</h3>
        <p class="plant__semis">{{ lead.Semis }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Remarques') && lead['Remarques']"
        class="plant__more-item plant__more-item--remarques">
        <h3>Remarques</h3>
        <p class="plant__remarques">{{ lead.Remarques }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Comestible') && lead['Comestible']"
        class="plant__more-item plant__more-item--comestible">
        <h3>Comestible</h3>
        <p class="plant__comestible">{{ lead.Comestible }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Mellifere') && lead['Mellifere']"
        class="plant__more-item plant__more-item--mellifere">
        <h3>Mellifere</h3>
        <p class="plant__mellifere">{{ lead.Mellifere }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Invasive') && lead['Invasive']"
        class="plant__more-item plant__more-item--invasive">
        <h3>Invasive</h3>
        <p class="plant__invasive">{{ lead.Invasive }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Toxique') && lead['Toxique']"
        class="plant__more-item plant__more-item--toxique">
        <h3>Toxique</h3>
        <p class="plant__toxique">{{ lead.Toxique }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Medicinale') && lead['Medicinale']"
        class="plant__more-item plant__more-item--medicinale">
        <h3>Medicinale</h3>
        <p class="plant__medicinale">{{ lead.Medicinale }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Utilisation') && lead['Utilisation']"
        class="plant__more-item plant__more-item--utilisation">
        <h3>Utilisation</h3>
        <p class="plant__utilisation">{{ lead.Utilisation }}</p>
      </div>
      <div
        v-if="lead.hasOwnProperty('Description') && lead['Description']"
        class="plant__more-item plant__more-item--description">
        <h3>Description</h3>
        <p class="plant__description">{{ lead.Description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: null,
    };
  },
  props: {
    lead: {
      type: Object,
      required: true
    }
  },
  computed: {
    order () {
      return this.$store.state.leads.filter.order
    },
    layout () {
      return this.$store.state.leads.layout
    },
  },
  methods: {
    toggleMore: function(el) {
      this.$el.closest(".plant").classList.toggle('is-open')
    },
  },
}
</script>

<style lang="scss">
</style>

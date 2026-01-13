<template>
  <div class="content">
    <div class="page">
      <header class="page-header">
        <!-- <h1 class="page-title">
          <NuxtLink to="/" class="nav-list__link">
            <span class="page-title__text">Plant quiz</span>
            <img src="~/assets/images/logo.svg" data-not-lazy />
          </NuxtLink>
        </h1> -->
        <MainNavigation/>
      </header>

      <div class="main-text">
        <h3>À propos</h3>
        <p>Application réalisée dans le cadre de la formation <a href="https://www.natagora.be/news/biodiversite-en-espaces-verts-une-formation-pour-les-professionnels-du-secteur">Biodiversité en espaces verts</a> de Natagora.</p>
        <p>La liste des plantes a été extraite du pdf "Plantes à connaître pour examen.pdf".</p>
        <p>Les données, styles, fonctionnalités, pages seront probablement mise à jour.</p>
        <p>Note importante. Les informations ont été générées via chatgpt. Des erreurs sont possibles.</p>
        <p>Pour les remarques, suggestions, etc. : <a href="mailto:contact@raphlarri.com">contact@raphlarri.com</a> ou message au <a href="tel:0485990961">0485990961</a>.</p>
        <h3>Liens</h3>
        <ul>
          <li><a href="https://github.com/raphaellarrinaga/plantquiz/">Code source</a> ➚</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Infos',
}
</script>

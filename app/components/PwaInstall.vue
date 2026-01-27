<script setup>
const installPrompt = ref(null)

onMounted(() => {
  // On écoute l'événement d'installation
  window.addEventListener('beforeinstallprompt', (e) => {
    // Empêche Chrome d'afficher sa propre bannière par défaut
    e.preventDefault()
    // On stocke l'événement pour l'utiliser plus tard
    installPrompt.value = e
  })

  window.addEventListener('appinstalled', () => {
    // L'app est installée, on cache le bouton
    installPrompt.value = null
    console.log('PWA installée avec succès !')
  })
})

const triggerInstall = async () => {
  if (!installPrompt.value) return

  // Affiche la boîte de dialogue native
  installPrompt.value.prompt()

  // Attend la réponse de l'utilisateur
  const { outcome } = await installPrompt.value.userChoice
  if (outcome === 'accepted') {
    installPrompt.value = null
  }
}
</script>

<template>
  <div v-if="installPrompt" class="pwa-banner">
  <!-- <div class="pwa-banner"> -->
    <p>Voulez-vous installer l'application sur votre écran d'accueil ?</p>
    <button @click="triggerInstall">Installer</button>
  </div>
</template>

<style scoped>
.pwa-banner {
  position: fixed;
  bottom: .5rem;
  left: .5rem;
  right: .5rem;
  /* transform: translateX(-50%); */
  background: #541E76;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  z-index: 1000;
}

p {
  font-size: .8rem;
  margin: 0;
}

button {
  background: white;
  color: #541E76;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
}
</style>

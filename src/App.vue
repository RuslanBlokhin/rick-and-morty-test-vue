<script setup>
import SearchBlock from './components/SearchBlock.vue';
import CharDetails from './components/char/CharDetails.vue';
import { RouterView } from 'vue-router';

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const charDetails = computed(() => store.getters.getCharDetails);
</script>

<template>
  <div class="container">
    <header class="header">
      <img src="./assets/logo.webp" />
    </header>
    <main class="main">
      <h1 hidden>Rick and Morty Characters</h1>
      <div class="main__block">
        <SearchBlock />
        <RouterView />
      </div>
      <CharDetails />
    </main>
  </div>
</template>

<style>
.container {
  min-width: 355px;
}
.header {
  max-width: 500px;
  margin: 0 auto;
}
.main {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>

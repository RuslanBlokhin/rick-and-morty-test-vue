<script setup>
import SearchBlock from './components/SearchBlock.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <div>
      <h1 hidden>Rick and Morty Characters</h1>
      <SearchBlock />
    </div>
    <RouterView />
  </div>
</template>

<style></style>

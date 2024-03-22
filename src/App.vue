<script setup>
import SearchBlock from './components/SearchBlock.vue';

import { RouterView } from 'vue-router';
</script>

<template>
  <main class="container">
    <SearchBlock />
    <RouterView />
  </main>
</template>

<script setup>
import SearchBlock from './components/SearchBlock.vue';
import { RouterView } from 'vue-router';
// import Home from './views/Home.vue';
// import Info from './views/Info.vue';
</script>

<template>
  <div>
    <div>
      <h1 hidden>Rick and Morty Characters</h1>
      <SearchBlock />
    </div>
    <RouterView />
    <!-- <router-view></router-view> -->
    <!-- <Info /> -->
  </div>
</template>

<style></style>

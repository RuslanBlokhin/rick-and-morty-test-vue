<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import CharItem from './CharItem.vue';
import CharDetails from './CharDetails.vue';

const store = useStore();

const isLoading = ref(false);

const findedChars = computed(() => store.getters.getFindedChars);
const isCloseSidebar = computed(() => store.getters.isCloseSidebar);

window.addEventListener('scroll', showMore);

function showMore() {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
    isLoading.value = true;

    store.dispatch('getMoreChars').then(resp => {
      if (resp.next === null) {
        window.removeEventListener('scroll', showMore);
      } else {
        isLoading.value = false;
      }
    });
  }
}
</script>

<template>
  <div class="chars-block">
    <ul v-if="findedChars" :class="[{ 'sidebar-close': isCloseSidebar }, 'char-list']">
      <CharItem v-for="char in findedChars" :char="char" :key="char.id" />
    </ul>
    <CharDetails />
  </div>
  <div v-if="isLoading" class="loader"></div>
</template>

<style>
.char-list {
  position: relative;
  max-width: 500px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  justify-content: center;
  column-gap: 20px;
  row-gap: 20px;
}
.chars-block {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.loadmore-btn {
  margin: 20px auto 0;
}
@media screen and (min-width: 768px) {
  .char-list.sidebar-close {
    max-width: 960px;
    grid-template-columns: repeat(2, 49%);
    justify-content: center;
  }
}
@media screen and (min-width: 1050px) {
  .char-list {
    max-width: 960px;
    grid-template-columns: repeat(2, 49%);
    justify-content: center;
  }
}
</style>

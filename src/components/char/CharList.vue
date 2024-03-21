<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import CharItem from "./CharItem.vue"

const store = useStore()

const findedChars = computed(() => store.getters.getFindedChars);
onMounted(() => {
  // console.log(findedChars.value);
})

</script>

<template>
  <ul v-if="findedChars.length" class="char-list">
      <CharItem v-for="char in findedChars" :char="char" :key="char.id"/>
  </ul>
</template>

<style>
.char-list {
  position: relative;
  margin: 20px auto 0;
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  justify-content: center;
  column-gap: 20px;
  row-gap: 20px;
}
@media screen and (min-width: 768px) {
  .char-list {
    max-width: 960px;
    grid-template-columns: repeat(2, 49%);
    justify-content: center;
    column-gap: 20px;
    row-gap: 20px;
  } 
}
</style>

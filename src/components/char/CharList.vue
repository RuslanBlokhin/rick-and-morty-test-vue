<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import CharItem from "./CharItem.vue"

const store = useStore()

const findedChars = computed(() => store.getters.getFindedChars);
onMounted(() => {
  console.log(findedChars.value);
})

</script>

<template>
  <ul class="char-list">
      <CharItem v-for="char in findedChars" :char="char" :key="char.id"/>
  </ul>
</template>

<style>
.char-list {
  position: relative;
  margin: 30px 0 auto;
  /* width: 70%; */
  display: grid;
  grid-template-columns: repeat(2, 40%);
  align-content: center;
  justify-content: center;
  column-gap: 20px;
  row-gap: 20px;
}
</style>

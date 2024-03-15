<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <ul class="char-list"></ul>
</template>

<style>
.char-list {
  margin-top: 20px;
  height: 1000px;
  background-color: beige;
}
</style>

<script setup>
import Input from './ui-kit/Input.vue';
import Select from './ui-kit/Select.vue';
import axios from 'axios';
// import Button from './ui-kit/Button.vue';
import { computed, ref } from 'vue';
// import { useRouter, useRoute } from 'vue-router';
// const router = useRouter();

const name = ref('');
const view = ref('');
const selectedStatus = ref('');
const selectedGender = ref('');
const status = ref(['Alive', 'Dead', 'unknown']);
const gender = ref(['Female', 'Male', 'Genderless', 'unknown']);
const url = computed(() => {
  return `https://rickandmortyapi.com/api/character/?name=${name.value}&status=${selectedStatus.value}&species=${view.value}&gender=${selectedGender.value}`;
});

async function searchChar() {
  // console.log(url.value);
  // console.log(this.$router);
  try {
    const response = await axios.get(url.value);
    const result = response.data.results;
    console.log(response.data.results);
  } catch (error) {
    console.error(error);
  } finally {
    // this.$router.push('/info');
  }
}
</script>

<template>
  <div class="logo">
    <img src="../assets/logo.webp" />
  </div>
  <div class="search-block">
    <form class="search-block__form">
      <Input v-model="name" placeholder="Имя персонажа" />
      <Select v-model="selectedStatus" :options="status" text="Статус"></Select>
      <Input v-model="view" placeholder="Вид" />
      <Select v-model="selectedGender" :options="gender" text="Гендер"></Select>
    </form>
    <button @click="searchChar" class="search-block__button" text="Поиск">Найти</button>
  </div>
</template>

<style>
.search-block {
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  background-color: aquamarine;
}
.search-block__form {
  display: flex;
  align-items: center;
  gap: 20px;
}
.logo {
  width: 500px;
  margin: 0 auto;
}
</style>

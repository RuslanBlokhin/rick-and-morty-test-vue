<script setup>
import Input from './ui-kit/Input.vue';
import Select from './ui-kit/Select.vue';
import { useStore } from 'vuex'
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const name = ref('');
const view = ref('');
const selectedStatus = ref('');
const selectedGender = ref('');
const status = ref(['Alive', 'Dead', 'unknown']);
const gender = ref(['Female', 'Male', 'Genderless', 'unknown']);

function searchChars() {
  const resp = store.dispatch('searchChars', { 
    name: name.value, 
    view: view.value, 
    status: selectedStatus.value, 
    gender: selectedGender.value 
  })
  router.push('/chars');
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
      <Select v-model="selectedGender" :options="gender" text="Пол"></Select>
    </form>
    <button @click="searchChars" class="search-block__button" text="Поиск">Найти</button>
  </div>
</template>

<style>
.search-block {
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;
  padding: 20px;
  margin: 0 auto;
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

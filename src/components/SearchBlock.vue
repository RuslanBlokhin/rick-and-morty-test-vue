<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import Input from './ui-kit/Input.vue';
import Select from './ui-kit/Select.vue';

const router = useRouter();
const store = useStore();

const isCloseSidebar = computed(() => store.getters.isCloseSidebar);

const name = ref('');
const view = ref('');
const error = ref(false);
const selectedStatus = ref('');
const selectedGender = ref('');
const status = ref(['Alive', 'Dead', 'unknown']);
const gender = ref(['Female', 'Male', 'Genderless', 'unknown']);

function searchChars() {
  store.commit('SET_CLOSE_SIDEBAR', true);

  store
    .dispatch('searchChars', {
      name: name.value,
      view: view.value,
      status: selectedStatus.value,
      gender: selectedGender.value,
    })
    .then(resp => {
      if (resp.error === null) {
        error.value = false;
        router.push('/chars');
      } else {
        error.value = true;
      }
    });
}
</script>

<template>
  <div class="search-block">
    <div class="search-block__logo">
      <img src="../assets/logo.webp" alt="logo" />
    </div>
    <div class="search-block__wrapper">
      <form class="search-block__form">
        <Input v-model="name" placeholder="Имя персонажа" />
        <Select v-model="selectedStatus" :options="status" text="Статус"></Select>
        <Input v-model="view" placeholder="Вид" />
        <Select v-model="selectedGender" :options="gender" text="Пол"></Select>
        <button
          @click="searchChars"
          @keyup.enter="searchChars"
          class="search-block__button"
          text="Поиск"
        >
          Найти
        </button>
      </form>
    </div>
    <div v-if="error" class="search-block__notfound-message">
      По данному запросу ничего не найдено, попробуйте ввести другие параметры поиска
    </div>
  </div>
</template>

<style>
.search-block {
  max-width: 728px;
  margin: 0 auto;
}
.search-block__logo {
  max-width: 500px;
  margin: 0 auto;
}
.search-block__wrapper {
  padding: 15px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: aquamarine;
}
.search-block__form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.search-block__notfound-message {
  margin-top: 20px;
  color: rgb(247, 247, 247);
}
</style>

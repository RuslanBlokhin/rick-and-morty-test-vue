<script setup>
import { computed, watch, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const charDetails = computed(() => store.getters.getCharDetails);
const isCloseSidebar = computed(() => store.getters.isCloseSidebar);

watch(isCloseSidebar, () => freezeScroll());

function freezeScroll() {
  const body = document.querySelector('body');

  if (charDetails.value && !isCloseSidebar.value && window.innerWidth < 768) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
}

const closeSidebar = () => store.commit('SET_CLOSE_SIDEBAR', true);

const underlayClickHandler = e => e.target === e.currentTarget && closeSidebar();
</script>

<template>
  <div v-if="charDetails && !isCloseSidebar" @click="underlayClickHandler" class="char-details">
    <div class="char-details__wrapper">
      <h2 class="char-details__title">{{ charDetails.name }}</h2>
      <ul class="char-details__list">
        <li class="char-details__item">
          <h4 class="char-details__item-name">Номер последнего эпизода</h4>
          <div class="char-details__item-value">{{ charDetails.lastEpisodeNumber }}</div>
        </li>
        <li class="char-details__item">
          <h4 class="char-details__item-name">Наименование эпизода</h4>
          <div class="char-details__item-value">{{ charDetails.lastEpisodeName }}</div>
        </li>
        <li class="char-details__item">
          <h4 class="char-details__item-name">Дата выхода эпизода</h4>
          <div class="char-details__item-value">{{ charDetails.lastEpisodeDate }}</div>
        </li>
        <li class="char-details__item">
          <h4 class="char-details__item-name">Последняя локация персонажа</h4>
          <div class="char-details__item-value">{{ charDetails.lastLocation }}</div>
        </li>
        <li class="char-details__item">
          <h4 class="char-details__item-name">Измерение локации</h4>
          <div class="char-details__item-value">{{ charDetails.dimension }}</div>
        </li>
      </ul>
      <button @click="closeSidebar" class="char-details__close-btn">Закрыть</button>
    </div>
  </div>
</template>

<style>
.char-details {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000000c0;
  z-index: 5;
}
.char-details__wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 250px;
  height: 500px;
  background-color: #fff5fd;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
}
.char-details__title {
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}
.char-details__item:not(:last-child) {
  margin-bottom: 10px;
}
.char-details__close-btn {
  background-color: #e0e0e0;
  color: #5f5f5f;
}
@media screen and (min-width: 768px) {
  .char-details {
    position: sticky;
    top: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 250px;
    height: 500px;
    background-color: #fff5fd;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
  }
}
</style>

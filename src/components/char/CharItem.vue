<script setup>
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
  char: Object,
});

function openCharDetails(e) {
  const currentID = e.currentTarget.id;
  store.dispatch('getCharDetails', currentID).then(resp => {
    if (resp.error !== null) {
      alert('Что-то пошло не так...');
    } else {
      store.commit('SET_CLOSE_SIDEBAR', false);
    }
  });
}
</script>

<template>
  <li class="char-item" @click="openCharDetails" :id="props.char.id">
    <div class="char-item__image-wrapper">
      <img :src="props.char.image" alt="avatar" class="char-item__image" />
    </div>
    <div class="char-item__info">
      <div class="char-item__info-row">
        <h4 class="char-item__info-params-name">Имя:</h4>
        <h3 class="char-item__info-params-value name">{{ props.char.name }}</h3>
      </div>
      <div class="char-item__info-row">
        <h4 class="char-item__info-params-name">Пол:</h4>
        <div class="char-item__info-params-value">{{ props.char.gender }}</div>
      </div>
      <div class="char-item__info-row">
        <h4 class="char-item__info-params-name">Статус:</h4>
        <div class="char-item__info-params-value">{{ props.char.status }}</div>
      </div>
      <div class="char-item__info-row">
        <h4 class="char-item__info-params-name">Вид:</h4>
        <div class="char-item__info-params-value">{{ props.char.species }}</div>
      </div>
      <div class="char-item__info-row">
        <h4 class="char-item__info-params-name">Измерение:</h4>
        <div class="char-item__info-params-value">{{ props.char.location.name }}</div>
      </div>
    </div>
  </li>
</template>

<style>
.char-item {
  padding: 0 10px 10px 0;
  z-index: 2;
  background-color: #fff5fd;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  color: #333;
  text-align: left;
  cursor: pointer;
}
.char-item__image-wrapper {
  padding: 5px;
  min-width: 130px;
  width: 130px;
  height: 130px;
  border-radius: 10px;
  box-shadow: 0 0 4px -2px;
  transform: rotate(-10deg);
  background-color: white;
  transition: scale 100ms ease-in;
}
.char-item:hover .char-item__image-wrapper {
  scale: 1.05;
}
.char-item__image {
  border-radius: 10px;
}
.char-item__info {
  padding-top: 10px;
}
.char-item__info-row {
  display: flex;
  align-items: baseline;
}
.char-item__info-row:not(:last-child) {
  margin-bottom: 5px;
}
.char-item__info-params-name {
  min-width: 100px;
}
</style>

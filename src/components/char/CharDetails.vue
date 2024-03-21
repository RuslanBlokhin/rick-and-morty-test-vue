<script setup>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const charDetails = computed(() => store.getters.getCharDetails);

</script>

<template >
    <div v-if="Object.keys(charDetails).length" class="char-details">
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
                <div class="char-details__item-value">{{ charDetails.lastEpisodeNumber }}</div>
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
        <button class="char-details__close-btn">Закрыть</button>
    </div>
</template>

<style>
.char-details {
    position: sticky;
    top: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-width: 250px;
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
</style>
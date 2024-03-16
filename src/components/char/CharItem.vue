<script setup>
const props = defineProps({
  char: Object,
})
console.log(props.char);
</script>

<template>
    <li class="char-item">
        <div class="char-item__image-wrapper">
            <img :src="props.char.image" alt="avatar" class="char-item__image">
        </div>
        <div class="char-item__info">
            <div class="char-item__info-column">
                <h4 class="char-item__info-params-name">Имя:</h4>
                <h4 class="char-item__info-params-name">Пол:</h4>
                <h4 class="char-item__info-params-name">Статус:</h4>
                <h4 class="char-item__info-params-name">Вид:</h4>
                <h4 class="char-item__info-params-name">Измерение:</h4>
            </div>
            <div class="char-item__info-column">
                <h3 class="char-item__info-params-value name">{{ props.char.name }}</h3>
                <div class="char-item__info-params-value">{{ props.char.gender }}</div>
                <div class="char-item__info-params-value">{{ props.char.status }}</div>
                <div class="char-item__info-params-value">{{ props.char.species }}</div>
                <div class="char-item__info-params-value">{{ props.char.location.name }}</div>
            </div>
        </div>
    </li>
</template>

<style>
.char-item {
    position: relative;
    z-index: 2;
    background-color: aliceblue;
    display: flex;
    gap: 50px;
    border-radius: 10px;
    color: #333;
    text-align: left;
}
.char-item__image-wrapper {
    padding: 5px;
    min-width: 150px;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0 0 4px -2px;
    transform: rotate(-10deg);
    background-color: white;
    cursor: pointer;
}
.char-item__image {
    border-radius: 10px;
}
.char-item__info {
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin: 10px 0;
}
.char-item__info-params-name:not(:last-child),
.char-item__info-params-value:not(:last-child) {
    margin-bottom: 10px;
}
/* .char-item__info-row {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin: 10px 0;
} */
</style>
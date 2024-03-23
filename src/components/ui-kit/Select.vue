<script setup>
defineProps({
  text: String,
  options: Array,
});
defineEmits(['update:modelValue']);
</script>

<template>
  <select @change="$emit('update:modelValue', $event.target.value)" class="select">
    <option class="select__option" :value="text" selected disabled hidden>{{ text }}</option>
    <option class="select__option" v-for="option in options" :value="option">{{ option }}</option>
  </select>
</template>

<style>
.select {
  height: 40px;
  padding: 6px;
  border: none;
  outline: none;
  border-radius: 9px;
  border: 1px solid transparent;
  transition: border-color 0.25s;
  cursor: pointer;
}
.select:focus {
  border-color: #646cff;
}
.select option {
  padding: 6px;
}
</style>

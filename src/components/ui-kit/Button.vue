<script setup>
defineProps({
  text: String,
});
defineEmits(['search']);
</script>

<template>
  <button @click="$emit('search')">{{ text }}</button>
</template>

<style></style>

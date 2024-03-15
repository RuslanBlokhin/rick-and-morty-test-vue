<script setup>
defineProps({
  placeholder: String,
  modelValue: String,
});
defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <input
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      class="input"
    />
  </div>
</template>

<style>
.input {
  height: 40px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: border-color 0.25s;
}
.input:focus {
  border-color: #646cff;
}
</style>

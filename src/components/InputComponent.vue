<template>
  <div class="field-wrapper flex flex-col items-start">
    <label
        :for="id">{{ labelText }}</label>
    <input
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :id="id"
        :name="id"
        :type="type"
        :placeholder="placeholder"
        class="w-full p-4 rounded-xl border border-gray-400 border-solid mt-3 mb-6"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputComponent',
  props: {
    modelValue: { type: String, required: true },
    id: { type: String, required: true },
    type: { type: String, required: true },
    placeholder: { type: String },
    labelText: { type: String, required: true },
  },
  emits: ['update:modelValue'],
});
</script>

<style scoped lang="scss">

</style>

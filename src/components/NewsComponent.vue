<template>
  <div class="bg-white bg-opacity-80 p-4 rounded-3xl m-1.5">
    <h1 class="font-semibold">{{ id }}. {{ title }}</h1>
    <div>{{ body }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsComponent',
  props: {
    id: { type: Number, required: true },
    title: String,
    body: { type: String, required: true },
    userId: Number,
  },
});
</script>

<style scoped>

</style>

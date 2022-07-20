<template>
  <div class="login pb-20 flex justify-center xl:justify-end">
    <LoginComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginComponent from '@/components/LoginComponent.vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    LoginComponent,
  },
});
</script>

<style scoped lang="scss">

</style>

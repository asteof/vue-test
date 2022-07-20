<template>
  <div :style="{
    'background-image': `url(${require('./assets/the-interior.png')})`,
    'background-position': 'bottom left'
  }" class="h-screen flex flex-col">
    <HeaderComponent/>
    <router-view class="flex-auto"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
  },
});

</script>

<style lang="scss">
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>

<template>
  <header class="grid grid-cols-12 py-2">
    <div class="
    col-start-1 col-end-4
    lg:col-start-1 lg:col-end-4 flex items-center justify-center">
      <h1 class="logo text-xl lg:text-5xl font-black">My Logo</h1>
      <img alt="Vue logo" src="../assets/logo.png" class="w-8 lg:w-20">
    </div>
    <nav class="col-start-4 col-end-13 text-sm md:text-lg lg:text-xl">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/news">News</router-link>
      |
      <router-link to="/profile">Profile</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { StoreModuleEnum } from '@/store/types';
import { AuthGettersEnum } from '@/store/auth/types';

export default defineComponent({
  name: 'HeaderComponent',
  computed: {
    isLoggedIn(): boolean {
      return this.$store.getters[`${StoreModuleEnum.authStore}/${AuthGettersEnum.doesTokenExist}`];
    },
  },
});

</script>

<style lang="scss" scoped>
nav {
  padding: 30px;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      background: rgba(42, 32, 34, 0.10);
      border-radius: 10px;
      padding: 2px 6px;
    }
  }
}
</style>

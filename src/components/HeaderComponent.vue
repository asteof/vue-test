<template>
  <header class="grid grid-cols-12 py-2">
    <div class="
    col-start-1 col-end-12
    lg:col-start-1 lg:col-end-4 flex items-center justify-center">
      <h1 class="logo text-5xl font-black">My Logo</h1>
      <img alt="Vue logo" src="../assets/logo.png" class="w-20">
    </div>
    <nav class="hidden lg:block col-start-4 col-end-10 text-xl">
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

export default defineComponent({
  name: 'HeaderComponent',
});

</script>

<style lang="scss" scoped>
nav {
  padding: 30px;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

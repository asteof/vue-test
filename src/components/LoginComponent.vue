<template>
  <div class="login-wrapper
  w-11/12
  md:w-7/12 xl:w-5/12
  xl:mr-28
  h-full p-6
  bg-white bg-opacity-70 rounded-3xl">
    <div class="flex text-2xl">
      <div class="w-1/2">
        <h2 class="text-left">Welcome to <a href="#" class="uppercase text-lime-700 font-semibold">lorem</a></h2>
        <h1 class="flex text-4xl xl:text-6xl font-medium">Sign in</h1>
      </div>
      <div class="flex flex-col justify-center items-start text-base font-light">
        <p>No Account?</p>
        <a href="#">Sign up</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginComponent',
});
</script>

<style scoped lang="scss">
.login-wrapper {
}
</style>

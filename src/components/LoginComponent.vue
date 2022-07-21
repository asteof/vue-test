<template>
  <div class="login-wrapper
  w-11/12
  md:w-7/12 xl:w-5/12
  xl:mr-28
  h-full p-8
  bg-white bg-opacity-70 rounded-3xl">
    <div class="flex text-2xl justify-between">
      <div class="w-1/2">
        <h2 class="text-left">Welcome to <a href="#" class="uppercase text-lime-700 font-semibold">lorem</a></h2>
        <h1 class="flex text-4xl xl:text-6xl font-medium">Sign in</h1>
      </div>
      <div class="flex flex-col justify-center items-start text-base font-light">
        <p>No Account?</p>
        <a href="#" class="text-lime-700">Sign up</a>
      </div>
    </div>

    <div class="social-media-btn-container flex gap-6 my-16">
      <button class="google flex justify-center gap-6 bg-blue-100 rounded-xl py-4 px-6 md:px-10">
        <img src="../assets/icons/google.svg" alt="Google">
        <span class="text-base text-blue-400 font-light">Sign in with Google</span>
      </button>

      <button class="facebook flex items-center justify-center gap-6 bg-white rounded-xl p-3">
        <img src="../assets/icons/Facebook.svg" alt="">
      </button>

      <button class="apple flex items-center justify-center gap-6 bg-white rounded-xl p-3">
        <img src="../assets/icons/apple.svg" alt="">
      </button>
    </div>

    <form @submit.prevent>

      <div class="inputs">
        <InputComponent
            v-model="email"
            id="email"
            type="email"
            label-text="Enter your username or email"
            placeholder="Username or email address"
        />
        <div class="mb-8"></div>
        <InputComponent
            v-model="password"
            id="password"
            type="password"
            label-text="Enter your Password"
            placeholder="Password"
        />
      </div>

      <p class="text-right text-blue-400 font-light"><a href="#">Forgot Password</a></p>

      <div class="flex justify-end mt-6">
        <button
            type="submit"
            class="bg-lime-700 bg-opacity-80 text-white py-4 px-28 rounded-xl"
        >Sign in
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputComponent from '@/components/InputComponent.vue';

export default defineComponent({
  name: 'LoginComponent',
  components: {
    InputComponent,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
});
</script>

<style scoped lang="scss">
.login-wrapper {
}
</style>

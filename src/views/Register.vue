<template>
  <div class="top">
    <h1>
      <div class="create">
        <form @submit.prevent="registeruser">
          <div>
            <label>Username:</label>
            <input v-model="name" type="text" required />
          </div>
          <label>Password:</label>
          <input v-model="password" type="password" required />

          <div>
            <label>Email:</label>
            <input v-model="email" type="mail" required />
          </div>
          <nav class="sign_buttons">
            <button class="register pointer">Register</button>
          </nav>
        </form>
      </div>
    </h1>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import registerUser from "../composables/register/registerUser.js";

export default {
  setup() {
    const name = ref("");
    const password = ref("");
    const email = ref("");

    const router = useRouter();
    const registeruser = registerUser(router, name, password, email);

    return { name, password, email, registeruser };
  },
};
</script>

<style>
.sign_buttons {
  display: flex;
  position: relative;
}
.register {
  margin: 16px auto;
}
</style>

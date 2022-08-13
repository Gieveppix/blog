<template>
  <div class="top">
    <h1>
      <div class="create">
        <form @submit.prevent="loginuser">
          <div>
            <label>Email:</label>
            <input v-model="email" type="mail" required />
          </div>
          <label for="password">Password:</label>
          <input v-model="password" type="password" required />

          <nav class="sign_buttons">
            <button class="login">Login</button>
            <!-- <button>Register</button> -->
          </nav>
        </form>
      </div>
    </h1>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import logInUser from "../composables/login/logInUser.js";

export default {
  setup() {
    const password = ref("");
    const email = ref("");

    const router = useRouter();
    const loginuser = logInUser(router, password, email);

    return { password, email, loginuser };
  },
};
</script>

<style>
.sign_buttons {
  display: flex;
  position: relative;
}
.login {
  margin-left: 120px;
  margin-right: 50px;
}
</style>

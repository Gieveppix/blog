<template>
  <div class="top">
    <h1>
      <div class="create">
        <form>
          <div>
            <label for="name">Username:</label>
            <input type="name" required />
          </div>
          <label for="password">Password:</label>
          <input type="password" id="password" required />

          <div>
            <label for="mail">Email:</label>
            <input type="mail" id="email" required />
          </div>
          <nav class="sign_buttons">
            <button class="register">Register</button>
          </nav>
        </form>
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Register",
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

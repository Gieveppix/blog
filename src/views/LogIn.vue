<template>
  <h1>
    <div class="create">
    <form>
        <div>
            <label for="mail">Email:</label>
            <input type="mail" id="email" required>
        </div>
        <label for="password">Password:</label>
        <input type="password" id="password" required>
        
        <nav class="sign_buttons">
            <button class="login">Login</button>
            <button>Register</button>
        </nav>

    </form>
  </div>
  </h1>
</template>

<script>
export default {
    name: "LogIn"
}
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
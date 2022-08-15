<template>
  <div class="background">
    <header>
      <router-link :to="{ name: 'Home' }"
        ><h1>The New and Improved Barrage Blog</h1></router-link
      >
      <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Create' }">Create Post</router-link>
        <router-link :to="{ name: 'LogIn' }">Log in</router-link>
        <router-link :to="{ name: 'Register' }">Register</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
.background {
  background: lightgrey;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 2;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
header h1 {
  color: rgb(67, 67, 67);
  font-size: 48px;
}
header h1:hover {
  -webkit-transition: color 0.33s;
  transition: color 0.33s;
  color: #7057dc;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active {
  color: rgb(67, 67, 67);
  font-weight: bold;
}
</style>

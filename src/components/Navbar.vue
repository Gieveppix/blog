<template>
  <div class="background">
    <header>
      <router-link :to="{ name: 'Home' }"><h1>The New and Improved Barrage Blog</h1></router-link>
      <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link v-show="user" :to="{ name: 'Create' }">Create Post</router-link>
          <router-link v-show="!user" :to="{ name: 'LogIn' }">Log in</router-link>
          <router-link v-show="!user" :to="{ name: 'Register' }">Register</router-link>
          <router-link @click="logout" v-show="user" :to="{ name: 'Home' }"><nav class="logout">Logout</nav></router-link>
      </nav>
    </header>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user.js";
import { computed } from "@vue/reactivity"

export default {
  setup() {
    const userStore = useUserStore();

    let user = computed(() => {
      return userStore.user
    })
    const login = () => { userStore.login() }
    const logout = () => { userStore.logout() }
    
    return { user, login ,logout }
  },
};
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
header nav {
  display: inline;
  
}
.logout {
  color: #bbb;
  text-decoration: none;
}
.logout:hover {
  -webkit-transition: color 0.33s;
  color: rgb(67, 67, 67);
  font-weight: bold;
}
</style>

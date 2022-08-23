import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
      user: null
    }
  },
  actions: {
    login(user) {
      this.user = user
    },
    logout() {
      this.user = null
    }
  },
  persist: true
})
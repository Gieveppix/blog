import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
      user: false
    }
  },
  actions: {
    login(user) {
      this.user = user
    },
    logout() {
      this.user = false
    }
  },
  persist: true
})
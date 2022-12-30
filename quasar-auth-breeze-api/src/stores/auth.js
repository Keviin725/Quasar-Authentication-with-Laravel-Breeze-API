import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: null
  }),
  getters:{
    user: (state) => state.authUser
  },
  actions:{
    async getToken(){
      await api.get("/sanctum/csrf-cookie");
    },
    async getUser(){
      await this.getToken()
      const data = await api.get('/api/user')
      this.authUser = data.data
    },
    async handleLogin(data) {
      await this.getToken();
      await api.post("/login",{
        email: data.email,
        password: data.password
      }),
      this.$router.push('/')

    },
    async handleRegister(data) {
      await this.getToken()
      await api.post('/register', {
        email: data.email,
        password: data.password,
        cpassword: data.cpassword
      })
      this.$router.push('/')

    }
  }
})

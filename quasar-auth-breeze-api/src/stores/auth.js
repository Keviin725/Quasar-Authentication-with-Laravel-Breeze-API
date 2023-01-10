import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: null,
    authErrors:[]
  }),
  getters:{
    user: (state) => state.authUser,
    errors: (state) => state.authErrors
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
      this.authErrors = []
      await this.getToken();
      try {
        await api.post("/login",{
          email: data.email,
          password: data.password
        }),
        this.$router.push('/')
      } catch (error) {
        if(error.response.status === 422){
          this.authErrors = error.response.data.errors
        }
      }

    },
    async handleRegister(data) {
      this.authErrors = []
      await this.getToken()
      try {
        await api.post('/register', {
          email: data.email,
          password: data.password,
          cpassword: data.cpassword
        })
        this.$router.push('/')
      } catch (error) {
        if(error.response.status === 422){
          this.authErrors = error.response.data.errors
        }
      }

    },
    async handleLogout(){
      await api.post('/logout')
      this.authUser = null
    },

    async handleForgotPassword(email){
      this.authErrors = [],
      this.getToken()

      try {
        await api.post('/forgot-password', {
          email: email
        })
      } catch (error) {
        if(error.response.status === 422){
          this.authErrors = error.response.data.errors
        }
      }
    }
  }
})

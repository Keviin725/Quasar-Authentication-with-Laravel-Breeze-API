<template>
  <q-header class="bg-grey absolute-top">
    <q-toolbar>
      <q-toolbar-title class="text-grey-9">
        QuasarAuth
      </q-toolbar-title>

        <q-tabs v-model="tab">
          <q-route-tab :to="{name: 'home'}" name="home" label="Home" />
          <q-route-tab :to="{name: 'login'}" name="login" label="Login" />
          <q-route-tab :to="{name: 'register'}" name="register" label="Register" />
        </q-tabs>

        <!---
          TODO:
          <template v-if="!authStore.user">

          </template>
          
          <template v-else>
            <q-btn @click= authStore.handleLogout()>
              logout
            </q-btn>
          </template>

        -->
    </q-toolbar>
  </q-header>


</template>

<script>
import {ref} from 'vue'
import { useAuthStore } from 'src/stores/auth';
export default {

  data(){
    const authStore = useAuthStore()

    return{
      tab: ref('home')
    }
  }
}
</script>

<style>
  .space-between{
    display: flex;
    justify-content: space-between;
  }

</style>

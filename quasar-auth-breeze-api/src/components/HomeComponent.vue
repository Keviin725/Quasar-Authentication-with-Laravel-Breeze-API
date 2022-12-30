<template>
  <q-layout view="lHh Lpr lFf" class="q-pa-lg bg-grey-4">

    <nav-component/>
    <!--

      <div v-if="authStore.user">
        <h1>{{ authStore.user.name }}</h1>
        <p>{{ authStore.user.email }}</p>
      </div>

      <div v-else>
        <h1>User Not Found</h1>
      </div>
    -->

   <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey absolute-bottom">
        <q-toolbar>
          <q-toolbar-title class="text-grey-9 row justify-end">Kevin Machava &copy; All rights reserved 2022</q-toolbar-title>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, } from 'vue'
import NavComponent from '../components/NavComponent.vue'
import{useAuthStore} from '../stores/auth'


export default defineComponent({
  components: { NavComponent },

  methods:{

    async onMounted(){
      const authStore = useAuthStore()

      await authStore.getUser()
    }
  },
  mounted(){
    this.onMounted()
  }

})
</script>

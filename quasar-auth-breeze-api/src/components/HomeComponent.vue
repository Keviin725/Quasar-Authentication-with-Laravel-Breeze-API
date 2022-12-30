<template>
  <q-layout view="lHh Lpr lFf" class="q-pa-lg bg-grey-4">

    <nav-component/>

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
import { defineComponent, ref, onMounted} from 'vue'
import NavComponent from '../components/NavComponent.vue'
import {api} from 'src/boot/axios';


export default defineComponent({
  components: { NavComponent },

  data(){


    onMounted(async () =>{
      
      await api.get('/api/user').then(response =>{

        console.log(response)
      }).catch(error=>{
        console.log(error)
      })
    })
    return{

    }
  },

})
</script>

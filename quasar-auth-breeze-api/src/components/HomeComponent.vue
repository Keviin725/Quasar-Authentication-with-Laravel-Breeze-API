<template>
  <q-layout view="lHh Lpr lFf" class="q-pa-lg">

    <nav-component/>

   <q-page-container>
      <router-view />
    </q-page-container>


  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import NavComponent from '../components/NavComponent.vue'
import {api} from 'src/boot/axios';


export default defineComponent({
  components: { NavComponent },

  data(){
    const user = ref()
    return{

    }
  },


    async mounted(){
      await api.get('/api/user').then(response=>{

        console.log(response)
      }
      ).catch(error=>{

        console.log(error)
      }
      )
    }

})
</script>

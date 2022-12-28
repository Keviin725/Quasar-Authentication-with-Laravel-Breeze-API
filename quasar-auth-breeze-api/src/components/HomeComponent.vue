<template>
  <q-layout view="lHh Lpr lFf" class="q-pa-lg">

    <nav-component/>

   <q-page-container>
      <router-view />
    </q-page-container>


  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import NavComponent from '../components/NavComponent.vue'

export default defineComponent({
  components: { NavComponent },
})
</script>

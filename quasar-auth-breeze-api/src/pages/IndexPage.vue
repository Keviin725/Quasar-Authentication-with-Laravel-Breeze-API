<template>
  <q-page>
   <nav-component/>
   <router-view/>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import NavComponent from '../components/NavComponent.vue'

export default defineComponent({
  components: { NavComponent },
  name: 'IndexPage'
})
</script>

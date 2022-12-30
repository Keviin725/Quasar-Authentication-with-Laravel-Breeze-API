<template>
  <q-page class="container row justify-center" padding>

      <q-card class="my-card" style="height: 85vh; width: 50vh;">
        <q-item class="justify-center q-ma-sm">
          <q-item-section avatar>
            <q-avatar size="75px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>
        </q-item>
        <q-card-section class="row justify-center" style="font-size:35px">
          Register
        </q-card-section>
        <q-card-section>

            <q-form @submit.prevent.stop="onSubmit">
              <q-input
                rounded
                clear-icon="close"
                clearable
                outlined
                v-model="form.name"
                color="primary"
                label="Name"
                type="text"
                class="col-md-12 col-sm-12 col-xs-12"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Preencha o devidamente os campos',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="person"></q-icon>
                </template>
              </q-input>
              <q-input
                rounded
                clear-icon="close"
                clearable
                outlined
                type="email"
                v-model="form.email"
                color="primary"
                label="Email"
                class="col-md-12 col-sm-12 col-xs-12"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Preencha o devidamente os campos',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="mail"></q-icon>
                </template>
              </q-input>
              <q-input
                rounded
                clear-icon="close"
                clearable
                outlined
                type="password"
                v-model="form.password"
                color="primary"
                label="Password"
                class="col-md-12 col-sm-12 col-xs-12"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Preencha o devidamente os campos',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="key"></q-icon>
                </template>
              </q-input>
              <q-input
                rounded
                clear-icon="close"
                clearable
                outlined
                type="password"
                v-model="form.cpassword"
                color="primary"
                label="Confirm Password"
                class="col-md-12 col-sm-12 col-xs-12"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Preencha o devidamente os campos',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="key"></q-icon>
                </template>
              </q-input>
            </q-form>
            <router-link class="row justify-center" to="/login">Sign in</router-link>
            <q-btn
              class="col-md-12"
              label="Submit"
              type="submit"
              rounded
              color="primary"
              padding
              @click="onSubmit()"
            />
        </q-card-section>

      </q-card>



  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
import { ref } from "vue";

export default {
  name: "PageIndex",
  data() {
    return {
      form: {
        password: ref(null),
        email: ref(null),
        cpassword: ref(null)
      },
    };
  },
  methods: {
    async onSubmit() {
     await this.getToken()
      await api.post('/register', this.form).then(response=>{
        console.log(response)
        this.$router.push('/')
      }).catch(error=>{
        console.log(error)
      })
    },
    async getToken(){
      await api.get('/sanctum/csrf-cookie')
    }
  },
};
</script>

<style lang="scss">

</style>

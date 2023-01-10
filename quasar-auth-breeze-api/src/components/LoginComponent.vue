<template>
  <q-page class="container row justify-center q-pa-xl" padding>
    <q-card class="my-card" style="height: 65vh; width: 50vh">
      <q-item class="justify-center">
        <q-item-section avatar>
          <q-avatar size="75px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-card-section class="row justify-center" style="font-size: 35px">
        Login
      </q-card-section>
      <q-card-section class="">
        <q-form @submit.prevent="authStore.handleLogin(form)">
          <q-input
            type="email"
            rounded
            clear-icon="close"
            clearable
            outlined
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
          <div v-if="authStore.errors.email" class="flex">
            <span class=" text-red text-sm">{{ authStore.errors.email[0] }}</span>
          </div>
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

          <div v-if="authStore.errors.password" class="flex">
            <span class=" text-red text-sm">{{ authStore.errors.password[0] }}</span>
          </div>
        </q-form>



        <div>
          <router-link class="row justify-center" to="#"
            >Forgot Password</router-link
          >
          <router-link class="row justify-center" to="/register"
            >Sign up</router-link
          >
        </div>

        <div>
          <q-btn
            label="Login"
            type="submit"
            rounded
            color="primary"
            padding
            @click="authStore.handleLogin(form)"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "src/stores/auth";

export default {
  name: "PageIndex",

  data() {
    const authStore = useAuthStore()
    const form = ref({
      email: "",
      password: "",
    })
    return {
      authStore,
      form
    };
  },
  methods: {

  },
};
</script>

<style lang="scss"></style>

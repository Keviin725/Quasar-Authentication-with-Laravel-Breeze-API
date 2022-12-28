<template>
  <q-page class="container" padding>
    <div class="row justify-center">

      <q-card class="my-card q-ma-md" style="height: 450px; width: 450px;">
        <q-item class="justify-center">
          <q-item-section avatar>
            <q-avatar size="75px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>
        </q-item>
        <q-card-section class="row justify-center" style="font-size:35px">
          Login
        </q-card-section>
        <q-card-section class="">

            <q-form @submit.prevent.stop="onSubmit" class="">
              <q-input
                rounded
                clear-icon="close"
                clearable
                outlined
                v-model="form.email"
                color="primary"
                label="Username"
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
            </q-form>

              <router-link class="row justify-center" to="#">Forgot Password</router-link>
              <router-link class="row justify-center" to="/register">Sign up</router-link>
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
    </div>



  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PageIndex",
  data() {
    return {
      form: {
        password: ref(null),
        email: ref(null),
      },
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="scss">

</style>

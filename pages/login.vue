<template>
  <div>
  <Header />

    <h1 class="text-center mt-15">Connexion</h1>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        prepend-inner-icon="mdi-email"
        placeholder="Saisissez votre email"
        v-model="userLogin.email"
        :rules="emailRules"
        label="Votre email"
        required
        clearable
      ></v-text-field>

      <v-text-field
        prepend-inner-icon="mdi-lock"
        placeholder="Saisissez votre password"
        v-model="userLogin.password"
        :rules="passwordRules"
        label="Votre mot de passe"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        required
        clearable
      ></v-text-field>

      <div class="black--text mt-n4 mb-4">
        <NuxtLink
          class="red--text caption"
          to="/forget-password"
          title="Mot de passe oublié ?"
          >Mot de passe oublié ?
        </NuxtLink>
      </div>

      <div class="text-center mt-2">
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="checkCredencialUser"
        >
          Valider
        </v-btn>
      </div>

      <div
        v-if="errorSubmitLogin"
        class="red white--text mt-3 pa-2 rounded text-center"
      >
        {{ errorMessage }}
      </div>
    </v-form>

    <div class="text-center mt-5">
      <h3>Vous n'avez pas de compte ?</h3>
      <NuxtLink to="/inscription" title="Ouvrir un compte">
        Ouvrir un compte
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import userInfo from "~/mock/usersData.json";
import { genericMessage } from "~/utils/genericMessage";
import { rules } from "~/utils/vuetifyRules";

export default {
  mounted() {
    this.infoUser = userInfo;
  },
  data() {
    return {
      valid: true,
      emailRules: rules.emailRules,
      passwordRules: rules.passwordRules,
      userLogin: {
        email: "",
        password: "",
      },
      errorSubmitLogin: false,
      errorMessage: genericMessage.errorMessageLogin,
      infoUser: [],
      showPassword: false,
      darkMode: false
    };
  },
  methods: {
    checkCredencialUser(): void {
      let validForm = (
        this.$refs.form as Vue & { validate: () => boolean }
      ).validate();
      if (validForm) {
        this.getUserFromApi();
      }
    },
    getUserFromApi(): void {
      if (
        this.userLogin.email === userInfo[0].email &&
        this.userLogin.password === userInfo[0].password
      ) {
        this.$router.push({
          path: "/sites",
        });
      } else {
        this.errorSubmitLogin = true;
        setTimeout(() => {
          this.errorSubmitLogin = false;
        }, 3000);
      }
    },
    toggleDarkMode(): void {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.darkMode = !this.darkMode;
      }
  },
  computed: {
      switchLabel(): string {
        return this.darkMode ? 'light' : 'dark';
      }
    }
};
</script>
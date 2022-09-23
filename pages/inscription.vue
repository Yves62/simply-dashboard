<template>
  <div>
    <Header />
    <h2 class="text-center mt-7">Inscription</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        prepend-inner-icon="mdi-account"
        placeholder="Saisissez votre nom"
        v-model.trim="userInscription.name"
        :rules="nameRules"
        label="Votre nom *"
        required
        clearable
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-account"
        placeholder="Saisissez votre prénom"
        v-model.trim="userInscription.firstName"
        :rules="firstNameRules"
        label="Votre prénom *"
        required
        clearable
      ></v-text-field>

      <v-text-field
        prepend-inner-icon="mdi-email"
        placeholder="Saisissez votre email"
        v-model.trim="userInscription.email"
        :rules="emailRules"
        label="Votre email *"
        required
        clearable
      ></v-text-field>

      <v-text-field
        prepend-inner-icon="mdi-lock"
        placeholder="Saisissez votre mot de passe"
        v-model.trim="userInscription.password"
        :rules="pwdRules"
        label="Votre mot de passe *"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        clearable
      ></v-text-field>

      <v-text-field
        prepend-inner-icon="mdi-lock"
        placeholder="Confirmez votre mot de passe"
        v-model.trim="userInscription.confirmPassword"
        :rules="[pwdConfirm, checkSamePassword]"
        label="Confirmez votre mot de passe *"
        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showConfirmPassword ? 'text' : 'password'"
        @click:append="showConfirmPassword = !showConfirmPassword"
        clearable
      ></v-text-field>

      <div class="text-center mt-2">
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="postInscriptionUser"
        >
          Valider
        </v-btn>
      </div>

      <div
        v-if="successInscription"
        class="green white--text mt-3 pa-2 rounded text-center"
      >
        {{ messageSuccessInscription }}
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import { genericMessage } from "~/utils/genericMessage";
import { rules } from "~/utils/vuetifyRules";
export default {
  data() {
    return {
      valid: true,
      nameRules: rules.nameRules,
      firstNameRules: rules.firstNameRules,
      emailRules: rules.emailRules,
      pwdRules: rules.passwordRules,
      pwdConfirm: rules.pwdConfirm,
      userInscription: {
        name: "",
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      successInscription: false,
      messageSuccessInscription: genericMessage.successMessageInscription,
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    postInscriptionUser(): void {
      let validForm = (
        this.$refs.form as Vue & { validate: () => boolean }
      ).validate();
      if (validForm) {
        this.successInscription = true;
        setTimeout(() => {
          this.successInscription = false;
          this.$router.push({
            path: "/login",
          });
        }, 3000);
      }
    },
    checkSamePassword(): string {
      if (
        this.userInscription.password !== this.userInscription.confirmPassword
      ) {
        return `${genericMessage.errorSamePassword}`;
      }
    },
  },
};
</script>





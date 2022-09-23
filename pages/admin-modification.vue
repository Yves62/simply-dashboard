<template>
  <div>
    <Header />

    <div class="d-flex">
      <Navigation class="me-4" />
      <v-card height="500" width="100%" class="pa-3">
        <div class="d-flex align-center justify-center mb-7" width="100%">
          <v-icon x-large left @click="$router.back()" class="me-15"
            >mdi-chevron-left</v-icon
          >
          <h2 class="my-5 text-center">Modifier vos informations</h2>
        </div>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            prepend-inner-icon="mdi-account"
            placeholder="Saisissez votre nom"
            v-model.trim="infoUser.name"
            :rules="nameRules"
            label="Votre nom"
            required
            clearable
          ></v-text-field>
          <v-text-field
            prepend-inner-icon="mdi-account"
            placeholder="Saisissez votre prénom"
            v-model.trim="infoUser.firstName"
            :rules="firstNameRules"
            label="Votre prénom"
            required
            clearable
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-email"
            placeholder="Saisissez votre email"
            v-model.trim="infoUser.email"
            :rules="emailRules"
            label="Votre email"
            required
            clearable
          ></v-text-field>

          <div class="text-center mb-7">
            <v-btn x-small @click="showInputPassword"
              >Modifier mon mot de passe</v-btn
            >
          </div>

          <div v-if="showInputChangePassword">
            <v-text-field
              prepend-inner-icon="mdi-lock"
              placeholder="Saisissez votre mot de passe"
              v-model.trim="infoUser.password"
              :rules="pwdRules"
              label="Votre mot de passe"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              clearable
            ></v-text-field>

            <v-text-field
              prepend-inner-icon="mdi-lock"
              placeholder="Confirmez votre mot de passe"
              v-model.trim="infoUser.confirmPassword"
              :rules="[pwdConfirm, checkSamePassword]"
              label="Confirmez votre mot de passe *"
              :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showConfirmPassword ? 'text' : 'password'"
              @click:append="showConfirmPassword = !showConfirmPassword"
              clearable
            ></v-text-field>
          </div>

          <div class="text-center mt-2">
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="postNewInfoUser"
            >
              Valider
            </v-btn>
            <v-btn
              :disabled="!valid"
              outlined
              color="primary"
              class="mr-4"
              @click="redirectToOthersSection"
            >
              Annuler
            </v-btn>
          </div>
          <div
            v-if="successModification"
            class="green white--text mt-3 pa-2 rounded text-center"
          >
            {{ messageSuccessModification }}
          </div>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import userInfo from "~/mock/usersData.json";
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
      infoUser: {
        name: userInfo[0].name,
        firstName: userInfo[0].firstname,
        email: userInfo[0].email,
        password: userInfo[0].password,
        confirmPassword: "",
      },
      showInputChangePassword: false,
      successModification: false,
      messageSuccessModification:
        genericMessage.successMessageModificationAccount,
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    postNewInfoUser(): void {
      let validForm = (
        this.$refs.form as Vue & { validate: () => boolean }
      ).validate();
      if (validForm) {
        this.successModification = true;
        setTimeout(() => {
          this.successModification = false;
          this.$router.push({
            path: "/account-menu",
          });
        }, 3000);
      }
    },
    showInputPassword(): void {
      this.showInputChangePassword = !this.showInputChangePassword;
    },
    checkSamePassword(): string {
      if (this.infoUser.password !== this.infoUser.confirmPassword) {
        return `${genericMessage.errorSamePassword}`;
      }
    },
    redirectToOthersSection(): void {
      this.$router.push({
        path: "/others",
      });
    },
  },
};
</script>



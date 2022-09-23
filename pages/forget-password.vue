<template>
  <div>
    <Header />
    <h2 class="text-center mb-7 mt-10">Vous avez oublié votre mot de passe ?</h2>
    <p class="text-justify">
      Saisissez votre adresse e-mail dans le champ ci- dessous. Un mail vous
      sera envoyé.
    </p>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        prepend-inner-icon="mdi-email"
        placeholder="Saisissez votre email"
        v-model.trim="userEmail"
        :rules="emailRules"
        label="Votre email"
        required
        clearable
      ></v-text-field>

      <div class="text-center mt-2">
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="checkMailUser"
        >
          Valider
        </v-btn>
      </div>
      <div
        v-if="confirmationEmailSend"
        class="green white--text mt-3 pa-2 rounded text-center"
      >
        {{ messageConfirmationEmailSend }}
      </div>
      <div
        v-if="errorSubmitEmail"
        class="red white--text mt-3 pa-2 rounded text-center"
      >
        {{ errorMessageEmail }}
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import { genericMessage } from "~/utils/genericMessage";
import userInfo from "~/mock/usersData.json";
import { rules } from '~/utils/vuetifyRules'

export default {
  data() {
    return {
      valid: true,
      emailRules: rules.emailRules,
      userEmail: null,
      confirmationEmailSend: false,
      messageConfirmationEmailSend: genericMessage.successMessagePassword,
      errorSubmitEmail: false,
      errorMessageEmail: genericMessage.errorMessageEmail,
    };
  },
  methods: {
    checkMailUser(): void {
      let validForm = (
        this.$refs.form as Vue & { validate: () => boolean }
      ).validate();
      if (validForm) {
        this.getUserMailFromDataJson();
      }
    },
    getUserMailFromDataJson(): void {
      if (this.userEmail === userInfo[0].email) {
        this.confirmationEmailSend = true;
        setTimeout(() => {
          this.confirmationEmailSend = false;
          this.$router.push({
            path: "/login",
          });
        }, 3000);
      } else {
        this.errorSubmitEmail = true;
        setTimeout(() => {
          this.errorSubmitEmail = false;
        }, 3000);
      }
    },
  },
};
</script>


<template>
  <div>
    <Header />
    <div class="d-flex">
      <Navigation class="me-4" />
      <v-card height="560" width="100%" class="pa-3">
        <div class="d-flex align-center justify-center mb-7" width="100%">
          <v-icon x-large left @click="$router.back()" class="me-15"
            >mdi-chevron-left</v-icon
          >
          <h2 class="my-5 text-center">Contacter le support</h2>
        </div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            prepend-inner-icon="mdi-account"
            placeholder="Saisissez votre nom"
            v-model.trim="userContact.name"
            :rules="nameRules"
            label="Votre nom *"
            required
            clearable
          ></v-text-field>
          <v-text-field
            prepend-inner-icon="mdi-account"
            placeholder="Saisissez votre prénom"
            v-model.trim="userContact.firstName"
            :rules="firstNameRules"
            label="Votre prénom *"
            required
            clearable
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-email"
            placeholder="Saisissez votre email"
            v-model.trim="userContact.email"
            :rules="emailRules"
            label="Votre email *"
            required
            clearable
          ></v-text-field>

          <v-textarea
            prepend-inner-icon="mdi-comment"
            placeholder="Saisissez votre message"
            v-model.trim="userContact.message"
            :rules="messageRules"
            label="Votre message *"
            name="message"
            no-resize
            clearable
          ></v-textarea>

          <div class="text-center mt-2">
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="postMessage"
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
        </v-form>
        <div v-if="successMessageSubmit" class="mb-15">
          <div class="green white--text mt-3 pa-2 rounded text-center">
            {{ messageSuccessContact }}
          </div>
        </div>
      </v-card>
    </div>
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
      messageRules: rules.messsageRules,
      userContact: {
        name: "",
        firstName: "",
        email: "",
        message: "",
      },
      successMessageSubmit: false,
      messageSuccessContact: genericMessage.successMessageContact,
    };
  },
  methods: {
    postMessage(): void {
      let validForm = (
        this.$refs.form as Vue & { validate: () => boolean }
      ).validate();
      if (validForm) {
        this.successMessageSubmit = true;
        setTimeout(() => {
          this.successMessageSubmit = false;
          this.$router.push({
            path: "/others",
          });
        }, 4000);
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


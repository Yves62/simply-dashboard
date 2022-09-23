     <template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        <v-icon large color="orange">mdi-plus-circle-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="justify-center">
        <span class="text-h5">Formulaire ajout de site</span>
      </v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation class="pa-5">
        <v-text-field
          prepend-inner-icon="mdi-account"
          placeholder="Saisissez le nom de l'utilisateur"
          v-model.trim="userInscription.name"
          :rules="nameRules"
          label="Nom de l'utilisateur *"
          required
          clearable
        ></v-text-field>
        <v-text-field
          prepend-inner-icon="mdi-account"
          placeholder="Saisissez le nom du site"
          v-model.trim="userInscription.firstName"
          :rules="firstNameRules"
          label="Nom du site *"
          required
          clearable
        ></v-text-field>

        <v-text-field
          prepend-inner-icon="mdi-email"
          placeholder="Saisissez l'email de l'utilisateur"
          v-model.trim="userInscription.email"
          :rules="emailRules"
          label="Email utilisateur *"
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

        <div class="d-flex align-center justify-center">
          <div class="text-center mt-2">
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="postNewSite"
            >
              Valider
            </v-btn>
          </div>
          <div class="text-center mt-2">
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="dialog = false"
              outlined
            >
              Annuler
            </v-btn>
          </div>
        </div>

        <div
          v-if="successAddedSite"
          class="green white--text mt-3 pa-2 rounded text-center"
        >
          {{ messageSuccessAddedSite }}
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>
      
<script lang="ts">
import { genericMessage } from "~/utils/genericMessage";
import { rules } from "~/utils/vuetifyRules";
export default {
  data() {
    return {
      dialog: false,
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
      successAddedSite: false,
      messageSuccessAddedSite: genericMessage.successMessageAddedSite,
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    postNewSite(): void {
      let validForm = (
        this.$refs.form as Vue & { validate: () => boolean }
      ).validate();
      if (validForm) {
        this.successAddedSite = true;
        setTimeout(() => {
          this.successAddedSite = false;
          this.dialog = false;
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
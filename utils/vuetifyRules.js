export const rules = {
  emailRules: [
    (v) => !!v || "Ce champ email est obligatoire",
    (v) => /.+@.+\..+/.test(v) || `Votre email n'est pas valide`,
  ],
  passwordRules: [(v) => !!v || "Ce champ password est obligatoire"],
  pwdConfirm: [(v) => !!v || "Le champ de confirmation du mot de passe est obligatoire",
  ],
  emailRules: [
    (v) => !!v || "Ce champ email est obligatoire",
    (v) => /.+@.+\..+/.test(v) || `Votre email n'est pas valide`,
  ],
  nameRules: [
    (v) => !!v || "Le champ nom est obligatoire",
    (v) => /^[A-Za-z]+$/.test(v) || "Ce champ ne peut contenir de caractères numériques",
  ],
  firstNameRules: [
    (v) => !!v || "Le champ prénom est obligatoire",
    (v) => /^[A-Za-z]+$/.test(v) || "Ce champ ne peut contenir de caractères numériques",
  ],
  messsageRules: [(v) => !!v || "Ce champ message est obligatoire"],
}

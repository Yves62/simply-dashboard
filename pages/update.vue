<template>
  <div>
    <Header />
    <div class="d-flex">
      <Navigation class="me-4" />
      <v-card height="650" width="100%" class="pa-3">
        <div class="text-right">
          <v-btn width="350" class="orange white--text mb-4" @click="redirectToListOfSite"
            >Choisir un autre site à mettre à jour
          </v-btn>
        </div>
        <SearchSite />
        <ActionSite />
        <div
          class="d-flex align-center justify-space-between"
          v-for="(text, index) in listOfUpdate"
          :key="index"
        >
          <p>{{ text.leftElement }}</p>
          <p>{{ text.rightElement }}</p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import redirection from "~/mixins/redirection";
export default {
  data() {
    return {
      listOfUpdate: [
        {
          leftElement: "Liste des mises a jours",
          rightElement: "Votre wordpress est à jour",
        },
        { leftElement: "Wordpress", rightElement: "Dernière version à jour" },
        { leftElement: "Thème Astra", rightElement: "Dernière version à jour" },
        { leftElement: "Yoast SEO", rightElement: "Dernière version à jour" },
        { leftElement: "Imagify", rightElement: "Dernière version à jour" },
        { leftElement: "UpdraftPlus", rightElement: "Dernière version à jour" },
        { leftElement: "Wordfence", rightElement: "Dernière version à jour" },
        {
          leftElement: "WP fastest cache",
          rightElement: "Dernière version à jour",
        },
      ],
    };
  },
  mixins: [redirection],
};
</script>

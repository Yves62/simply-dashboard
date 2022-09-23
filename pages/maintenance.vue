<template>
  <div>
    <Header />
    <div class="d-flex">
      <Navigation class="me-4" />
      <v-card height="580" width="100%" class="pa-3">
        <div class="text-right">
          <v-btn width="350" class="orange white--text mb-4" @click="redirectToListOfSite"
            >Retour à la liste des sites
          </v-btn>
        </div>
        <SearchSite />
        <div class="border-card">
          <ActionSite />
          <p class="red--text font-weight-black ml-3">Une maintenance du serveur est programmé le 02 octobre 2022 a 03h00</p>
        </div>

        <div class="border-card mt-4">
          <ActionSite />
          <p class="green--text font-weight-black ml-3">Pas de maintenance prochainement</p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import redirection from "~/mixins/redirection";
export default {
  mixins: [redirection],
};
</script>

<style scoped>
.border-card {
  border: 1px solid black;
}
</style>


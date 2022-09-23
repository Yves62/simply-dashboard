<template>
  <div>
    <Header />
    <div class="d-flex">
      <Navigation class="me-4" />
      <v-card height="750" width="100%" class="pa-3">
        <div class="text-right">
          <v-btn
            width="350"
            class="orange white--text mb-4"
            @click="redirectToListOfSite"
            >Choisir un autre site à mettre à jour
          </v-btn>
        </div>
        <SearchSite />
        <div class="border-card">
          <ActionSite />
          <p class="ml-3">Lancer un test d'optimisation</p>
          <div class="d-flex align-center justify-space-between pa-3 mb-5" @click="showModal">
            <v-btn width="150" class="orange white--text mb-4"
              >Optimiser
            </v-btn>
            <span>Votre site est parfaitement optimisé</span>
          </div>
        </div>

        <div class="border-card mt-4">
          <ActionSite />
          <p class="ml-3">Lancer un test d'optimisation</p>
          <div class="d-flex align-center justify-space-between pa-3 mb-5" @click="showModal">
            <v-btn width="150" class="orange white--text mb-4"
              >Optimiser
            </v-btn>
            <span>Votre site a besoin d'être optimisé</span>
          </div>
        </div>
      </v-card>
    </div>
    <action-modal v-if="showActionModal" @close="showActionModal = false"
      ></action-modal
    >
  </div>
</template>

<script lang="ts">
import redirection from "~/mixins/redirection";
import modalAction from "~/mixins/modalAction";
export default {
  mixins: [redirection, modalAction],
};
</script>

<style scoped>
.border-card {
  border: 1px solid black;
}
</style>


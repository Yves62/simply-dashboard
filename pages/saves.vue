<template>
  <div>
    <Header />
    <div class="d-flex">
      <Navigation class="me-4" id="navigation" />
      <v-card height="550" width="100%" class="pa-3">
        <div class="text-right">
          <v-btn
            width="350"
            class="orange white--text mb-4"
            @click="redirectToListOfSite"
            >Choisir un autre site à sauvegarder
          </v-btn>
        </div>
        <SearchSite />
        <ActionSite />
        <div class="d-flex align-center justify-space-between pa-3 mb-5">
          <p>
            Espace disque utilisé par ce site:
            <span class="red--text font-weight-bold" @click="showModal">caculer</span>
          </p>
          <v-icon color="red" large @click="showModal">mdi-refresh</v-icon>
        </div>

        <div class="d-flex align-center justify-space-between">
          <div>
            <p>Derniere sauvegarde le</p>
            <p>Mardi 21 septembre 2022</p>
          </div>
          <div class="btn-group">
            <div class="mb-7">
              <v-btn width="150" class="primary white--text" @click="showModal">Sauvegarder</v-btn>
              <v-btn width="150" class="red white--text" @click="showModal">Effacer</v-btn>
            </div>
            <div>
              <v-btn width="150" class="primary white--text" @click="showModal">Restaurer</v-btn>
              <v-btn width="150" class="red white--text" @click="showModal">Effacer</v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <action-modal v-if="showActionModal" @close="showActionModal = false"
      ></action-modal
    >
    <Tabs id="tabs" />
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
#navigation {
  display: block;
}
#tabs {
  display: none;
}

@media screen and (max-width: 800px) {
  #navigation {
    display: none;
  }
  #tabs {
    display: block;
  }
}
</style>
<template>
  <v-card class="d-flex align-center justify-space-between pa-3 mb-5">
    <div class="left">
      <p>User one</p>
      <p>Nom du site de l'utilisateur : http://localhost:3000</p>
    </div>
    <div class="right d-flex align-center justify-space-between">
      <div value="recent" class="text-center mr-3" @click="showModal">
        <v-icon>mdi-delete</v-icon>
        <p>Supprimer</p>
      </div>
      <div value="recent" class="text-center mr-3" @click="showModal">
        <v-icon>mdi-account</v-icon>
        <p>Profil</p>
      </div>
      <div value="recent" class="text-center mr-3">
        <v-icon>mdi-plus-circle-outline</v-icon>
        <p>Plus</p>
      </div>
    </div>
    <action-modal
      v-if="showActionModal"
      @close="showActionModal = false"
    ></action-modal>
  </v-card>
</template>

<script lang="ts">
import modalAction from "~/mixins/modalAction";
export default {
  mixins: [modalAction],
};
</script>
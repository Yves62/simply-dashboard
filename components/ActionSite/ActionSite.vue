<template>
  <div>
    <v-card class="d-flex align-center justify-space-between pa-3 mb-5">
      <div class="left">
        <p class="font-weight-medium">Site one</p>
        <p>http://localhost:3000</p>
      </div>
      <div class="right d-flex align-center justify-space-between">
        <div value="recent" class="text-center mr-3" @click="showModal">
          <v-icon>mdi-delete</v-icon>
          <p>Supprimer</p>
        </div>
        <div value="recent" class="text-center mr-3" @click="showModal">
          <v-icon>mdi-content-save-cog</v-icon>
          <p>Sauvegarder</p>
        </div>
        <div value="recent" class="text-center mr-3" @click="showModal">
          <v-icon>mdi-history</v-icon>
          <p>Dashboard</p>
        </div>
        <div value="recent" class="text-center mr-3">
          <v-icon>mdi-plus-circle-outline</v-icon>
          <p>Plus</p>
        </div>
      </div>
    </v-card>
    <action-modal v-if="showActionModal" @close="showActionModal = false"
      >Confirmez votre action</action-modal
    >
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showActionModal: false,
    };
  },
  methods: {
    showModal() {
      this.showActionModal = !this.showActionModal;
    },
  },
};
</script>

<style scoped>
p{
  cursor: pointer;
}
</style>
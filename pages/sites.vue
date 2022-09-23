<template>
  <div>
    <Header />
    <div class="d-flex">
      <Navigation class="me-4" />
      <v-card height="500" width="100%" class="pa-3">
        <SearchSite />
       <ActionSite />
        <v-card class="d-flex align-center justify-space-between pa-3 mb-5">
          <div class="left">
            <p>Site two</p>
            <p>http://localhost:3000</p>
          </div>
          <div class="right d-flex align-center justify-space-between">
            <div value="recent" class="text-center mr-3">
              <v-icon>mdi-delete</v-icon>
              <p>Supprimer</p>
            </div>
            <div value="recent" class="text-center mr-3">
              <v-icon>mdi-content-save-cog</v-icon>
              <p>Sauvegarder</p>
            </div>
            <div value="recent" class="text-center mr-3">
              <v-icon>mdi-history</v-icon>
              <p>Dashboard</p>
            </div>
            <div value="recent" class="text-center mr-3">
              <v-icon>mdi-plus-circle-outline</v-icon>
              <p>Plus</p>
            </div>
          </div>
        </v-card>
        <v-pagination class="mt-10" v-model="page" :length="6"></v-pagination>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

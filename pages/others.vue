<template>
  <div>
    <Header />
    <div class="d-flex">
      <Navigation class="me-4" />
      <v-card height="500" width="100%" class="pa-3">
        <h2 class="my-5 text-center">Modifier vos informations</h2>
        <div class="mt-3">
          <v-btn class="primary white--text d-block mb-3" depressed @click="redirectToAdminProfil"
            >Voir mes infos</v-btn
          >
          <v-btn class="primary white--text d-block mb-3" depressed @click="redirectToAdminModification"
            >Modifier mes infos</v-btn
          >
          <v-btn class="primary white--text d-block mb-3" depressed @click="redirectToContact"
            >Contacter le support</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    redirectToContact(): void{
      this.$router.push({
        path: '/contact'
      })
    },
    redirectToAdminModification(): void{
      this.$router.push({
        path: '/admin-modification'
      })
    },
    redirectToAdminProfil(): void{
      this.$router.push({
        path: '/admin-profil'
      })
    },
  }
}

</script>
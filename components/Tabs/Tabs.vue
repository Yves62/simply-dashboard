<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
    id="tabs"
    class="text-center"
  >
    <v-btn
      :value="item.title"
      v-for="(item, index) in items"
      :key="index"
      class="pa-0 ma-0"
      router
      :to="item.router"
    >
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
export default {
  data() {
    return {
      value: "Sites",
      items: [
        { title: "Sites", icon: "mdi-sitemap", router: "/sites" },
        {
          title: "Sauvegardes",
          icon: "mdi-content-save-cog",
          router: "/saves",
        },
        { title: "Mises à jours", icon: "mdi-update", router: "/update" },
        {
          title: "Optimisation",
          icon: "mdi-arrow-up-circle-outline",
          router: "/optimization",
        },
        { title: "Maintenance", icon: "mdi-alarm", router: "/maintenance" },
        {
          title: "Comptes utilisateurs",
          icon: "mdi-account",
          router: "/account",
        },
        { title: "Autres", icon: "mdi-hammer-wrench", router: "/others" },
        { title: "Se déconnecter", icon: "mdi-logout", router: "/login" },
      ],
      mini: false,
    };
  },
};
</script>

<style scoped src="./tabs.css" />

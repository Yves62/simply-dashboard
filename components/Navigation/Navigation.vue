<template>
  <v-card height="500" >
    <v-navigation-drawer permanent :mini-variant.sync="mini">
      <v-list>
        <v-list-item link>
          <v-icon @click="redirectionToAdminProfil">mdi-account</v-icon>
          <v-list-item-title class="ml-7">John Doe</v-list-item-title>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="item.router"
          active-class="primary white--text"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
export default {
  data() {
    return {
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
  methods:{
    redirectionToAdminProfil(){
      this.$router.push({
        path: '/admin-profil'
      })
    }
  }
};
</script>
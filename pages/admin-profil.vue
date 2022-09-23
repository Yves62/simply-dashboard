<template>
  <div>
    <Header />
    <div class="d-flex">
      <Navigation class="me-4" />
      <v-card class="mx-auto" height="580" width="100%">
        <div class="d-flex align-center justify-center mb-7" width="100%">
          <v-icon x-large left @click="$router.back()" class="me-15"
            >mdi-chevron-left</v-icon
          >
          <h2 class="my-5 text-center">Vos informations</h2>
        </div>
        <v-list-item class="grey lighten-4">
          <v-row>
            <v-card-title width="300" class="mx-auto">
              <v-list-item-avatar>
                <v-icon large>mdi-account</v-icon>
              </v-list-item-avatar>
              <v-btn icon class="mr-4" nuxt to="/admin-modification">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-title>
          </v-row>
        </v-list-item>
        <v-list two-line>
          <v-list-item>
            <v-icon color="indigo" class="mr-8"> mdi-account </v-icon>

            <v-list-item-content>
              <v-list-item-title
                >{{ infoUser[0].firstname }} {{ infoUser[0].name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-icon color="indigo" class="mr-8"> mdi-email </v-icon>

            <v-list-item-content>
              <v-list-item-title>{{ infoUser[0].email }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-map-marker </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Arras</v-list-item-title>
              <v-list-item-subtitle>62000</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import userInfo from "~/mock/usersData.json";
export default {
  data: () => ({
    infoUser: userInfo,
  }),
};
</script>




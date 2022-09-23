<template>
    <div class="container-header mt-5">
        <img src="./img/logo.png" alt="logo de simply-site">
        <h1>Simply-Site</h1>
          <v-switch 
          :value="darkMode" 
          @change="toggleDarkMode" 
          :label="`toggle ${switchLabel} mode`"
        ></v-switch>
    </div>
    
</template>

<script lang="ts">

export default {
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    toggleDarkMode: function () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.darkMode = !this.darkMode;
      }
  },
  computed: {
      switchLabel: function () {
        return this.darkMode ? 'light' : 'dark';
      }
    }
};
</script>

<style scoped src="./header.css" />
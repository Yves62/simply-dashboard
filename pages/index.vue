<template>
  <div id="container-index">
    <div id="container-info">
      <h1>Bonjour</h1>
      <HeaderIndex />
      <nuxt-link to="login" class="text-decoration-none grey--text">
        <h3>Connectez-vous</h3>
        <v-icon large class="mt-1">mdi-arrow-right-thin-circle-outline</v-icon>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped src='./css/index.css' />

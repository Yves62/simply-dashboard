<template>
  <div class="container" @click.stop="$emit('close')">
    <div class="modal">
      <p>Confirmez votre action</p>
      <div class="btn-action">
        <button class="validate-btn" @click.stop="$emit('close')">Valider</button>
        <button class="cancel-btn" @click.stop="$emit('close')">X</button>
      </div>
    </div>
  </div>
</template>

<style scoped src="./action-modal.css" />
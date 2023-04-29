<script setup lang="ts">
const reloadPage = () => {
  location.reload();
}
</script>

<template>
  <div>
    <v-btn @click="reloadPage()">RETRY</v-btn>
  </div>
</template>

<style scoped>
</style>

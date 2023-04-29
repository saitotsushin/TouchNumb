<script setup lang="ts">
const reloadPage = () => {
  location.reload();
}
</script>

<template>
  <div>
    <v-btn @click="reloadPage()">RETRY</v-btn>
    <div class="BtnTop">
      <router-link to="/" class="text-decoration-none">TOP</router-link>
    </div>
  </div>
</template>

<style scoped>
.BtnTop{
  margin-top: 3.4rem;
}
</style>

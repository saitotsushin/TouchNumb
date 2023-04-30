<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'

// const reloadPage = () => {
//   location.reload();
// }
const emit = defineEmits([
  'game-retry'
]);
const Retry = () => {
  emit('game-retry',false);
}
</script>

<template>
  <div>
    <!-- <v-btn @click="reloadPage()" color="primary">RETRY</v-btn> -->
    <!-- <v-btn to="/game/" color="primary">RETRY</v-btn> -->
    <v-btn @click="Retry" color="primary">RETRY</v-btn>

    <div class="BtnTop">
      <router-link to="/" class="text-decoration-none text-orange">TOP</router-link>
    </div>
  </div>
</template>

<style scoped>
.BtnTop{
  margin-top: 3.4rem;
}
</style>

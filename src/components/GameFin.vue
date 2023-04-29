<script setup lang="ts">
import { ref,watch } from 'vue'

const props = defineProps<{
  isFin: Boolean
}>()

const isActive = ref(false);
watch(() => props.isFin, (newValue, oldValue) => {
  if (newValue == true) {
    isActive.value = true;
  }
});

// if (props.isFin) {
//   clearInterval(intervalId);
// }
</script>

<template>
    <div class="overlay" :class="{ active: isActive }">
      <div class="box">
        <router-link to="/game" class="link">RETRY</router-link>
      </div>
    </div>  
</template>

<style scoped>
.box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.overlay{
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.8);
  /* display: block; */
  display: none;
}
.active{
  display: block !important;
}
</style>

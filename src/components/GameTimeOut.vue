<script setup lang="ts">
import { ref,watch } from 'vue'
import BtnPageReload from './BtnPageReload.vue';

const props = defineProps<{
  isTimeOut: Boolean
}>()

const isActive = ref(false);
watch(() => props.isTimeOut, (newValue, oldValue) => {
  if (newValue == true) {
    isActive.value = true;
  }
});
const emit = defineEmits([
  'game-retry'
]);
const GameRetry = () => {
  isActive.value = false;
  emit('game-retry',true);
}
</script>

<template>
    <div class="overlay" :class="{ active: isActive }">
      <div class="box">
        <p>Sorry...TimeOut!</p>
        <BtnPageReload @game-retry="GameRetry"/>
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
.box p{
  color: #fff;
  margin-bottom: 1rem;
}
.overlay{
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,1);
  /* display: block; */
  display: none;
}
.active{
  display: block !important;
}
</style>

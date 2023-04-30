<script setup lang="ts">
import { ref,watch,defineEmits } from 'vue'

const props = defineProps<{
  isCountDown: Boolean,
  isRetry: Boolean
}>()

const emit = defineEmits([
  'game-start'
]);
const GameStart = () => {
  emit('game-start',true);
}

let timeElapsed = 2;
const seconds = ref(3);
const isHidden = ref(false);

let intervalId: any = null;

const CountDownStart = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }  
  intervalId = setInterval(() => {
    timeElapsed = timeElapsed - 1;
    seconds.value = Math.floor(timeElapsed % 60) + 1;
    if (timeElapsed < 0) {
      clearInterval(intervalId);
      isHidden.value = true;
      GameStart();
    }
  }, 1000);
}
CountDownStart();

const Reflash = () => {
  intervalId = null;
  clearInterval(intervalId);
  timeElapsed = 2;
  seconds.value = 3;
  isHidden.value = false;
}
watch(() => props.isCountDown, (newValue, oldValue) => {
  if (newValue == true) {
    CountDownStart();
  } else {
  }
});
watch(() => props.isRetry, (newValue, oldValue) => {
  if (newValue == true) {
    Reflash();
    CountDownStart();
  } else {
  }
});


</script>

<template>
  <div class="overlay" :class="{ hidden: isHidden }">
    <div class="timer">
      <span>{{ seconds }}</span>
    </div>  
  </div>
</template>

<style scoped>
.overlay{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.timer{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  font-size: 3rem;
}
.timer span{
  display: inline-block;
  width: 1.2rem;
  font-weight: bold;
}
.hidden{
  display: none !important;
}
</style>

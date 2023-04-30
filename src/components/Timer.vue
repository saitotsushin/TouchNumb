<script setup lang="ts">
import { ref,watch,defineEmits } from 'vue'

const props = defineProps<{
  isStart: Boolean,
  isFin: Boolean,
  isTimeOut: Boolean
}>()

// const startTime = Date.now()
let timeElapsed = 0;
const seconds_parts1 = ref('0')
const seconds_parts2 = ref('0')
const milliseconds_parts1 = ref('0')
const milliseconds_parts2 = ref('0')

let intervalId: any = null;

const emit = defineEmits([
  'game-timeout',
  'game-cleartime'
]);
const TimeOut = () => {
  emit('game-timeout',false);
}
const ClearTime = () => {
  emit('game-cleartime',timeElapsed);
}
function Reflash() {
  timeElapsed = 0;
  seconds_parts1.value = "0";
  seconds_parts2.value = "0";
  milliseconds_parts1.value = "0";
  milliseconds_parts2.value = "0";
}
function StartGame(){
  const startTime = Date.now();
  if (intervalId) {
      clearInterval(intervalId);
    }
  intervalId = setInterval(() => {

    timeElapsed = Date.now() - startTime
    // cleartime = timeElapsed;
    const seconds = Math.floor((timeElapsed / 1000) % 60)
    const milliseconds = timeElapsed % 100
    let seconds_parts = seconds.toString().padStart(2, '0').split("");

    seconds_parts1.value = seconds_parts[0];
    seconds_parts2.value = seconds_parts[1];

    let milliseconds_parts = milliseconds.toString().padStart(2, '0').split("");
    milliseconds_parts1.value = milliseconds_parts[0];
    milliseconds_parts2.value = milliseconds_parts[1];

    if (timeElapsed > 30000) {//30000
      clearInterval(intervalId);
      TimeOut();
    }
  }, 48);
}
watch(() => props.isStart, (newValue, oldValue) => {
  if (newValue == true) {
    StartGame();
  } else {
    Reflash();
  }
});
watch(() => props.isFin, (newValue, oldValue) => {
  if (newValue == true) {
    clearInterval(intervalId);
    ClearTime();
    Reflash();
  }
});
</script>

<template>
    <div class="timer">
      <span>{{ seconds_parts1 }}</span>
      <span>{{ seconds_parts2 }}</span>
      <span class="CenterColon">:</span>
      <span>{{ milliseconds_parts1 }}</span>
      <span>{{ milliseconds_parts2 }}</span>
    </div>  
</template>

<style scoped>
.timer{
  display: flex;
  color: #fff;
}
.timer span{
  display: inline-block;
  width: 1.1rem;
  font-size: 1.4rem;
}
.timer .CenterColon {
  width: 0.6rem;
}
</style>

<script setup lang="ts">
import { ref,watch } from 'vue'

const props = defineProps<{
  isFin: Boolean
}>()

// const emit = defineEmits([
//   'touch-panel'
// ]);
// const Touched = () => {
//   emit('touch-panel',props.index);
// }
const startTime = Date.now()
const seconds_parts1 = ref('0')
const seconds_parts2 = ref('0')
const milliseconds_parts1 = ref('0')
const milliseconds_parts2 = ref('0')

let intervalId: any = null;
intervalId = setInterval(() => {
  const timeElapsed = Date.now() - startTime
  const seconds = Math.floor((timeElapsed / 1000) % 60)
  const milliseconds = timeElapsed % 100
  let seconds_parts = seconds.toString().padStart(2, '0').split("");

  seconds_parts1.value = seconds_parts[0];
  seconds_parts2.value = seconds_parts[1];

  let milliseconds_parts = milliseconds.toString().padStart(2, '0').split("");
  milliseconds_parts1.value = milliseconds_parts[0];
  milliseconds_parts2.value = milliseconds_parts[1];

  // elapsedTime3.value = `${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`
  // elapsedTime4.value = `${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`
}, 48);

watch(() => props.isFin, (newValue, oldValue) => {
  console.log(`message changed from ${oldValue} to ${newValue}`);
  if (newValue == true) {
    clearInterval(intervalId)
  }
});

// if (props.isFin) {
//   clearInterval(intervalId);
// }
</script>

<template>
    <div class="timer">
      <span>{{ seconds_parts1 }}</span>
      <span>{{ seconds_parts2 }}</span>
      <span>:</span>
      <span>{{ milliseconds_parts1 }}</span>
      <span>{{ milliseconds_parts2 }}</span>
    </div>  
</template>

<style scoped>
.timer{
  display: flex;
}
.timer span{
  display: inline-block;
  width: 1.2rem;
  font-size: 1.6rem;
}
</style>

<script setup lang="ts">
import { ref,watch,defineEmits } from 'vue'
import BtnPageReload from './BtnPageReload.vue';

const props = defineProps<{
  isFin: Boolean,
  clearTime: number
}>()

const isActive = ref(false);
const setClearTime = ref("00:00");

watch(() => props.isFin, (newValue, oldValue) => {
  if (newValue == true) {
    isActive.value = true;
    setClearTime.value = ChangeTimeFormat(props.clearTime);
  }
});
const emit = defineEmits([
  'game-retry'
]);
const GameRetry = () => {
  setClearTime.value = "00:00";
  isActive.value = false;
  emit('game-retry',true);
}
function ChangeTimeFormat(_time:number) {
  const seconds = Math.floor((_time / 1000) % 60)
  const milliseconds = _time % 100
  let seconds_parts = seconds.toString().padStart(2, '0').split("");
  let milliseconds_parts = milliseconds.toString().padStart(2, '0').split("");

  return seconds_parts[0]+seconds_parts[1] + ":" + milliseconds_parts[0]+milliseconds_parts[1];

}
</script>

<template>
    <div class="overlay" :class="{ active: isActive }">
      <div class="box">
        <div class="Title">ClearTime</div>
        <div class="ClearTime">{{ ChangeTimeFormat(clearTime) }}</div>
        <BtnPageReload @game-retry="GameRetry"/>
      </div>
    </div>  
</template>

<style scoped>
.Title{
  font-size: 1.2rem;
  line-height: 1.1;
  color: #FFF;
  margin-bottom: 0.5rem;
}
.ClearTime{
  font-size: 2.4rem;
  line-height: 1.1;
  color: #FFF;
  font-weight: bold;
  margin-bottom: 2rem;
  letter-spacing: 0.2rem;
}
.box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.overlay{
  width: 100%;
  height: 100vh;
  z-index: 3000;
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

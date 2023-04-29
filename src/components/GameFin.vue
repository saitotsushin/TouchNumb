<script setup lang="ts">
import { ref,watch } from 'vue'
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
    console.log(props.clearTime);
    // console.log(clearTime.value);
    setClearTime.value = ChangeTimeFormat(props.clearTime);
  }
});

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
        <BtnPageReload/>
      </div>
    </div>  
</template>

<style scoped>
.Title{
  font-size: 2.0rem;
  color: #FFF;
}
.ClearTime{
  font-size: 1.8rem;
  color: #FFF;
  font-weight: bold;
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

<script setup lang="ts">
import { reactive,ref } from 'vue';
// import Vue from 'vue';
import TouchPanel from '../components/TouchPanel.vue';
import Timer from '../components/Timer.vue';
import GameFin from '../components/GameFin.vue';
let NowNumber = 1;
interface Item {
  index: number;
  touched: boolean;
}
const NumberList = reactive<Item[]>([
  { index: 1, touched: false },
  { index: 2, touched: false },
  { index: 3, touched: false },
  { index: 4, touched: false },
  { index: 5, touched: false },
  { index: 6, touched: false },
  { index: 7, touched: false },
  { index: 8, touched: false },
  { index: 9, touched: false },
  { index: 10, touched: false },
  { index: 11, touched: false },
  { index: 12, touched: false },
  { index: 13, touched: false },
  { index: 14, touched: false },
  { index: 15, touched: false },
  { index: 16, touched: false }
]);

const result = [...NumberList]; // 元の配列をコピー
for (let i = result.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1)); // 0 〜 i までのランダムな整数
  [result[i], result[j]] = [result[j], result[i]]; // 要素を交換
}
// リアクティブオブジェクトを更新
NumberList.splice(0, NumberList.length, ...result);

// const intervalId = ref();
const IsFin = ref(false);

const handleNameUpdate = (_index: number) => {
  if (_index !== NowNumber) {
    return;
  }
  const index = NumberList.findIndex(user => user.index === _index);
  if (index !== -1) {
    const newUser = { ...NumberList[index], touched: true };
    NumberList.splice(index, 1, newUser);
    NowNumber++;
  }
  if (_index == 16) {
    IsFin.value = true;
  }
}
</script>
<template>
  <div>
    <Timer :isFin="IsFin"/>  
    <div class="PanelList">
      <div v-for="item in NumberList" :key="item.index">
        <TouchPanel :index="item.index" :touched="item.touched" @touch-panel="handleNameUpdate"/>
      </div>  
    </div>
    <GameFin :isFin="IsFin"/>
  </div>
</template>

<style scoped>
.PanelList{
  width: 320px;
  display: flex;
  flex-wrap: wrap;
}
</style>

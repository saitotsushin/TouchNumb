<script setup lang="ts">
import { reactive,ref } from 'vue';
import TouchPanel from '../components/TouchPanel.vue';
import Timer from '../components/Timer.vue';
import CountDown from '../components/CountDown.vue';
import GameFin from '../components/GameFin.vue';
import GameTimeOut from '../components/GameTimeOut.vue';

const NowNumber = ref(1);
const IsStart = ref(false);
const IsCountDown = ref(false);
const IsRetry = ref(false);
const IsFin = ref(false);
const IsTimeOut = ref(false);
const ClearTime = ref(0);

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

const GameStart = () => {
  IsCountDown.value = false;
  IsStart.value = true;
  IsRetry.value = false;
  const result = [...NumberList]; // 元の配列をコピー
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0 〜 i までのランダムな整数
    [result[i], result[j]] = [result[j], result[i]]; // 要素を交換
  }
  // リアクティブオブジェクトを更新
  NumberList.splice(0, NumberList.length, ...result);

}
const GameRetry = () => {
  IsStart.value = false;
  IsFin.value = false;
  IsCountDown.value = true;
  IsTimeOut.value = false;
  ClearTime.value = 0;
  NowNumber.value = 1;
  IsRetry.value = true;
  NumberList.forEach(element => {
    element.touched = false;    
  });
  CountDownStart();
}
const CountDownStart = () => {
  IsCountDown.value = true;
}
const GameClear = (_time: number) => {
  ClearTime.value = _time;
  IsRetry.value = false;
}
const TimeOut = () => {
  IsTimeOut.value = true;
  IsRetry.value = false;
}
const PanelCountUp = (_index: number) => {
  if (_index !== NowNumber.value) {
    return;
  }
  const index = NumberList.findIndex(user => user.index === _index);
  if (index !== -1) {
    const newUser = { ...NumberList[index], touched: true };
    NumberList.splice(index, 1, newUser);
    NowNumber.value++;
  }
  if (_index == 16) {
    IsFin.value = true;
  }
}

</script>
<template>
  <div>
    <CountDown 
        @game-start="GameStart"
        :isCountDown="IsCountDown"
        :isRetry="IsRetry"/>
    <div class="MainGame">
      <div class="GameHeader">
        <div class="NextNumber"><span>NEXT</span><b>{{ NowNumber }}</b></div>
        <Timer
          :isStart="IsStart"
          :isFin="IsFin"
          :isTimeOut="IsTimeOut"
          @game-timeout="TimeOut"
          @game-cleartime="GameClear"/>  
      </div>
      <div class="PanelList">
        <div v-for="item in NumberList" :key="item.index" class="CardItem">
          <TouchPanel
            :index="item.index"
            :touched="item.touched"
            @touch-panel="PanelCountUp"/>
        </div>  
      </div>
    </div>
    <GameFin 
      :isFin="IsFin" 
      :clearTime="ClearTime" 
      @game-retry="GameRetry"/>
    <GameTimeOut 
      :isTimeOut="IsTimeOut"
      @game-retry="GameRetry"/>
  </div>
</template>

<style scoped>
.MainGame{
  /* z-index: 5000; */
  position: relative;
}
.GameHeader{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.NextNumber{
  width: 32%;
  display: flex;
}
.NextNumber *{
  display: inline-block;
}
.NextNumber b{
  font-size: 2.4rem;
  color: #FFF;
  font-weight: bold;
  margin-left: 0.5rem;
}
.NextNumber span{
  writing-mode: vertical-rl;
  font-size: 0.6rem;
  color: #FFF;
}
.PanelList{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 320px;
}
.CardItem{
    width: calc(100% / 4);
    box-sizing: border-box;
    padding: 4px;
    margin: 0;
    display: flex;
}
</style>
